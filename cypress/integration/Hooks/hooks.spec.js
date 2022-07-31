describe('Verify contact us form', function () {
    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').should('have.text', 'CONTACT US')
    })
    it('verify the contact us form test no 1', function () {
        cy.Verifycontactus('Suraj', 'Dadas', 'dadas.suraj96@gmail.com', 'I am learning javascript')
        cy.get('[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
    it('verify the contact us form test no 2', function () {
        cy.Verifycontactus('Suraj', 'Dadas', 'dadas.suraj96@gmail.com', 'I am learning javascript')
        cy.get('[value="RESET"]').click()
        cy.Verifycontactus()
    })
    it('verify the contact us form test no 3', function () {
        cy.Verifycontactus('Suraj', 'Dadas', 'dadas.suraj96gmail.com', 'I am learning javascript')
        cy.get('[value="SUBMIT"]').click()
        cy.get('html').should('contain', 'Error: Invalid email address')
    })
    it('verify the contact us form test no 4', function () {
        cy.Verifycontactus('Suraj', 'Dadas', 'dadas.suraj96@gmail.com')
        cy.get('[value="SUBMIT"]').click()
        cy.get('html').should('contain', 'Error: all fields are required')
    })
})
