describe('Ordering System', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('should add an item to the cart', () => {
      cy.get('#itemName').type('Product A');
      cy.get('#quantity').type('2');
      cy.get('button').contains('Add to Cart').click();

      cy.get('#cart li').should('have.length', 1);
    });

    it('should submit an order', () => {
      // Add an item to the cart first
      cy.get('#itemName').type('Product B');
      cy.get('#quantity').type('3');
      cy.get('button').contains('Add to Cart').click();

      // Submit the order
      cy.get('button').contains('Submit Order').click();

      // Ensure the cart is empty after submission
      cy.get('#cart li').should('have.length', 0);

      // Optionally, you can add assertions for order confirmation messages, etc.
      cy.contains('Order submitted successfully.');
    });
  });
