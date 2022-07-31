
describe('verify contact us form', function () {

    let info = {
        firstName: 'Suraj',
        lastName: 'Dadas',
        email: 'dadas.suraj96@gmail.com',
        message: 'i am learning javascript'
    }

    it('verify contact us form(Using Direct Hard Coded Values), method 1', function () {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('[name="first_name"]').type('Suraj')
        cy.get('[name="last_name"]').type('Dadas')
        cy.get('[name="email"]').type('dadas.suraj96@gmail.com')                // By using Direct hard coded value
        cy.get('[name="message"]').type('i am learning javascript')
        cy.get('[value="SUBMIT"]').click()
        cy.get('h1').should('contain', 'Thank You for your Message!')
    })

    it('verify contact us form(using Function), method 2', function () {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('[name="contactme"]').should('have.text', 'CONTACT US')
        cy.get('[name="first_name"]').type(info.firstName)                      // By using Function
        cy.get('[name="last_name"]').type(info.lastName)
        cy.get('[name="email"]').type(info.email)
        cy.get('[name="message"]').type(info.message)
        cy.get('[value="SUBMIT"]').click()
        cy.get('h1').should('contain', 'Thank You for your Message!')
    })

    it('verify contact us form (Using fixture Method), method 3', function () {
        cy.fixture('contactus').then(function (info) {
            cy.visit('https://webdriveruniversity.com/')
            cy.get('#contact-us').invoke('removeAttr', 'target').click()         // By using Fixture
            cy.get('[name="contactme"]').should('have.text', 'CONTACT US')
            cy.get('[name="first_name"]').type(info.firstName)
            cy.get('[name="last_name"]').type(info.lastName)
            cy.get('[name="email"]').type(info.email)
            cy.get('[name="message"]').type(info.message)
            cy.get('[value="SUBMIT"]').click()
            cy.get('h1').should('contain', 'Thank You for your Message!')

        })
    })
})
 



