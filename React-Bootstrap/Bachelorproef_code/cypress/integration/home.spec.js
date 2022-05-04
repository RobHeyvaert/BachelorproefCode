 /* eslint-disable */
 describe("home test", () => {
    it("de applicatie draait", () => {
      cy.visit("http://localhost:3000/home");
      cy.get("h1").should("exist");
      cy.get("[data-cy=home_welcome]").should("exist");
      cy.get("[data-cy=home_vstack]").should("exist");
      cy.get("[data-cy=home_hstack]").should("exist");
    });
  });