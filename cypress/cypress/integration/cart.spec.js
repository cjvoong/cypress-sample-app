describe('Shopping Cart', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('should remove an item from the cart', () => {
      // Add an item to the cart first
      cy.get('#itemName').type('Product C');
      cy.get('#quantity').type('1');
      cy.get('button').contains('Add to Cart').click();

      // Remove the item from the cart
      cy.get('#cart li').contains('Product C').parent().find('button').contains('Remove').click();

      // Ensure the cart is empty
      cy.get('#cart li').should('have.length', 0);
    });

    it('should clear the cart', () => {
      // Add items to the cart
      cy.get('#itemName').type('Product D');
      cy.get('#quantity').type('2');
      cy.get('button').contains('Add to Cart').click();

      cy.get('#itemName').type('Product E');
      cy.get('#quantity').type('3');
      cy.get('button').contains('Add to Cart').click();

      // Clear the cart
      cy.clearCart();

      // Ensure the cart is empty
      cy.get('#cart li').should('have.length', 0);
    });
  });
