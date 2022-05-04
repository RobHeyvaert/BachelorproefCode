 /* eslint-disable */
 describe('login', () => {
    it('should successfully log into our app', () => {
      cy.login("home")
    });

    it('should successfully log into our app', () => {
      cy.login("books")
    });
  });