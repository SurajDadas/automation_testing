

describe('Verify the window command in cypress', () => {

    it('verify the window command for various operations like reload, forward, backward in javascript', () => {
        cy.login('Admin', 'admin123')
        cy.window().then(function (win) {
            win.location.reload()
        })
        cy.window().then(function (win) {
            win.history.back()
            win.history.forward()
        })
    })

    it.only('verify the window command for various operations like reload, forward, backward in Cypress',()=>{
        cy.login('Admin','admin123')
        cy.reload()
        cy.go(1)
        cy.go(-1)
        cy.url().should('contain','index.php')
    })
})