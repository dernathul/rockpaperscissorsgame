describe('User can see the game', () => {
    It('user can see title', ()=> {
        cy.visit('http://localhost:3001')
        cy.contains('Choose your move')
    })
})