describe('User can see the game', () => {
    Iteration('user can see title', ()=> {
        cy.visit('http://localhost:3001')
        cy.contains('Rock / Paper / Scissors')
    })
})