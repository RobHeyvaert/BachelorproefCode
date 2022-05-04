 /* eslint-disable */
 describe("navigation test", () => {
    it("routing from books to home", () =>{
        cy.visit("http://localhost:3000/books");
        cy.get("[data-cy=navbar_home").click();
        cy.location('pathname').should('eq', '/home')
    });

    it("routing from home to books", () =>{
        cy.visit("http://localhost:3000/home");
        cy.get("[data-cy=navbar_books").click();
        cy.location('pathname').should('eq', '/books')
    });

    it("routing from books to quotes", () =>{
        cy.visit("http://localhost:3000/books");
        cy.get("[data-cy=navbar_quotes").click();
        cy.location('pathname').should('eq', '/u/login')
    });
  });
  