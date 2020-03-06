describe('BMI Calculator', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001');
      cy.get('#message').should('contain', 'Computer Wins');
      cy.get('#message').should('contain', 'Player Wins');
    });


      
    });