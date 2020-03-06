describe("User can make a move", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3001");
    });
  
    describe("choose a move", () => {
      it("rock", () => {
        cy.get("rock").click()
        
      });
  
      it("select paper", () => {
        cy.get("paper").click();
        
          
      });
  
      it("select scissors", () => {
        cy.get("scissors").click();
      });
    
    });
  });