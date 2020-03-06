describe("User can see a score", () => {
    It("present score board", () => {
        cy.visit("http://localhost:3001")
        cy.contain("Player");
        cy.contain("Computer");
    });
});