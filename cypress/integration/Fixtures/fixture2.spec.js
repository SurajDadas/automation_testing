describe('verify the contact us form', function () {
    let data;
    before(function () {
        cy.fixture('contactus1').then((database) => {
            data = database
        })
    })
    it('verify the contact us form with fixture 1 case 1', function () {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('[name="contactme"]').should('have.text', 'CONTACT US')
        cy.get('[name="first_name"]').type(data[0].firstName)
        cy.get('[name="last_name"]').type(data[0].lastName)
        cy.get('[name="email"]').type(data[0].email)
        cy.get('[name="message"]').type(data[0].message)
        cy.get('[value="SUBMIT"]').click()
        cy.get('h1').should('contain', 'Thank You for your Message!')
    })
    it('verify the contact us form with fixture 1 case 1', function () {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('[name="contactme"]').should('have.text', 'CONTACT US')
        cy.get('[name="first_name"]').type(data[1].firstName)
        cy.get('[name="last_name"]').type(data[1].lastName)
        cy.get('[name="email"]').type(data[1].email)
        cy.get('[name="message"]').type(data[1].message)
        cy.get('[value="SUBMIT"]').click()
        cy.get('h1').should('contain', 'Thank You for your Message!')
    })
})