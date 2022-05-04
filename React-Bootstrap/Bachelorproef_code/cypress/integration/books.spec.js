 /* eslint-disable */
 describe("books test", () => {
    // checken of de lijst met boeken getoond word
    it("show books", () => { 
      cy.login()
        .then(() => {
          cy.intercept(
            "GET",
            "https://the-dune-api.herokuapp.com/books/200",
            { fixture: "books.json" }
          );
          cy.visit("http://localhost:3000/books");
    
          cy.get("[data-cy=books_book]").should("have.length", 1);
          cy.get("[data-cy=books_book_title]").eq(0).contains("Dune Messiah");
          cy.get("[data-cy=books_book_year]").eq(0).should("contain", "1969");
      })
    });
  
    // bij lang laden van de API call -> loading tag visible
    it("very slow response", () => {
      cy.intercept(
        "https://the-dune-api.herokuapp.com/books/200",
        (req) => {
          req.on("response", (res) => {
            res.setDelay(1000);
          });
        }
      ).as("slowResponse");
      cy.visit("http://localhost:3000/books");
      cy.get("[data-cy=loading]").should("be.visible");
      cy.wait("@slowResponse");
      cy.get("[data-cy=loading]").should("not.exist");
    });
  
    // checken of de filter werkt
    it("check filter", () => {
      cy.visit("http://localhost:3000/books");
      cy.get("[data-cy=books_search_input").type("Go");
      cy.get("[data-cy=books_search_btn").click();
      cy.get("[data-cy=books_book").should("have.length", 1);
      cy.get("[data-cy=books_book_title]").each((el, idx) => {
        expect(el[0].textContent).to.match(/Go/);
      });
    });

    // checken of de filter lege lijst geeft 
    it("check empty filter", () => {
      cy.visit("http://localhost:3000/books");
      cy.get("[data-cy=books_search_input").type("xyz");
      cy.get("[data-cy=books_search_btn").click();
      cy.get("[data-cy=book").should("have.length", 0);
      cy.get("[data-cy=books_error").should("not.exist");
    });
  

    
    it("error from backend", () => {
      cy.intercept(
        "GET",
        "https://the-dune-api.herokuapp.com/books/200",
        { statusCode: 500, body: { error: "internal server error" } }
      );
      cy.visit("http://localhost:3000/books");
      cy.get("[data-cy=books_search_input").type("Ir");
      cy.get("[data-cy=books_search_btn").click();
      cy.get("[data-cy=books_error").should("be.visible");
    });

    it("routing to add book", () =>{
        cy.visit("http://localhost:3000/books");
        cy.get("[data-cy=books_addbook_button").click();
        cy.location('pathname').should('eq', '/books/add')
    });
  });
  