describe('various ways to switch the tab in cypress', function () {
    it('various ways to switch the tab in cypress, method 1', function () {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()           // Remove Attribute  ==> target
        cy.url().should('contain', 'Contact-Us')
    })
    it('various ways to switch the tab in cypress, method 2', function () {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('attr', 'target', '_self').click()          // Upadte Attribute Value ==> self
        cy.url().should('contain', 'Contact-Us')
    })
    it('various ways to switch the tab in cypress, method 3', function () {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('attr', 'href').then(function (resourse) {    // Update url
            cy.visit(`https://webdriveruniversity.com/${resourse}`)
        })
        cy.url().should('contain', 'Contact-Us')   
    })
})
