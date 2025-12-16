describe('ag-grid-piano-e2e', () => {
  beforeEach(() => cy.visit('/'));

  describe('Piano Grid Display', () => {
    it('should display the AG Grid piano component', () => {
      cy.get('ag-grid-angular').should('be.visible');
    });
  });
});
