Cypress.Commands.add('clearCart', () => {
    cy.get('#cart li').each(() => {
      cy.get('button').contains('Remove').click();
    });
  });
