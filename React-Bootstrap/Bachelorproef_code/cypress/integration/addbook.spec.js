 /* eslint-disable */
 describe("Add book test", () => {
 it("add transaction submit test route and reset form", () => {
	cy.visit("http://localhost:3000/books/add");
	
    cy.get("[data-cy=book_title]").type("Dune");
	cy.get("[data-cy=book_year]").type("1965");
	cy.get("[data-cy=book_author]").type("Frank Herbert");
	cy.get("[data-cy=book_wiki_url]").type("wikipedia.be");
    cy.get("[data-cy=submit_book]").click();

    cy.location('pathname').should('eq', '/books')

	cy.visit("http://localhost:3000/books/add");

	cy.get("[data-cy=book_title]").should("be.empty")
	cy.get("[data-cy=book_year]").should("be.empty")
	cy.get("[data-cy=book_author]").should("be.empty")
	cy.get("[data-cy=book_wiki_url]").should("be.empty")
});

it("add transaction cancel test route and reset form", () => {
	cy.visit("http://localhost:3000/books/add");
	
    cy.get("[data-cy=book_title]").type("Dune");
	cy.get("[data-cy=book_year]").type("1965");
	cy.get("[data-cy=book_author]").type("Frank Herbert");
	cy.get("[data-cy=book_wiki_url]").type("wikipedia.be");
    cy.get("[data-cy=cancel_book]").click();

    cy.location('pathname').should('eq', '/books')

	cy.visit("http://localhost:3000/books/add");

	cy.get("[data-cy=book_title]").should("be.empty")
	cy.get("[data-cy=book_year]").should("be.empty")
	cy.get("[data-cy=book_author]").should("be.empty")
	cy.get("[data-cy=book_wiki_url]").should("be.empty")
});
});