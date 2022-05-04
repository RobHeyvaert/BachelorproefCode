 /* eslint-disable */
 /*
 describe("quotes test", () => {
    // checken of de lijst met boeken getoond word
    it("show quotes", () => {
      cy.intercept(
        "GET",
        "https://the-dune-api.herokuapp.com/quotes/1000",
        { fixture: "quotes.json" }
      );
  
      cy.visit("http://localhost:3000/quotes");
      cy.get("[data-cy=quotes_quote]").should("have.length", 1);
      cy.get("[data-cy=quotes_quote_id]").eq(0).contains("20");
      cy.get("[data-cy=quotes_quote_text]").eq(0).should("contain", "Arrakis");
    });
  
    // bij lang laden van de API call -> loading tag visible
    it("very slow response", () => {
      cy.intercept(
        "https://the-dune-api.herokuapp.com/quotes/1000",
        (req) => {
          req.on("response", (res) => {
            res.setDelay(1000);
          });
        }
      ).as("slowResponse");
      cy.visit("http://localhost:3000/quotes");
      cy.get("[data-cy=quotes_loading]").should("be.visible");
      cy.wait("@slowResponse");
      cy.get("[data-cy=quotes_loading]").should("not.exist");
    });
  
    // checken of de filter werkt
    it("check filter", () => {
      cy.visit("http://localhost:3000/quotes");
      cy.get("[data-cy=quotes_search_input").type("ed Arrakis to");
      cy.get("[data-cy=quotes_search_btn").click();
      cy.get("[data-cy=quotes_quote").should("have.length", 2);
      cy.get("[data-cy=quotes_quote_text]").each((el, idx) => {
        expect(el[0].textContent).to.match(/ed Arrakis to/);
      });
    });

    // checken of de filter lege lijst geeft 
    it("check empty filter", () => {
      cy.visit("http://localhost:3000/quotes");
      cy.get("[data-cy=quotes_search_input").type("xyz");
      cy.get("[data-cy=quotes_search_btn").click();
      cy.get("[data-cy=quotes").should("have.length", 0);
      cy.get("[data-cy=quotes_error").should("not.exist");
    });
  
    it("error from backend", () => {
      cy.intercept(
        "GET",
        "https://the-dune-api.herokuapp.com/quotes/1000",
        { statusCode: 500, body: { error: "internal server error" } }
      );
      cy.visit("http://localhost:3000/quotes");
      cy.get("[data-cy=quotes_search_input").type("Ir");
      cy.get("[data-cy=quotes_search_btn").click();
      cy.get("[data-cy=quotes_error").should("be.visible");
    });
  });
  */