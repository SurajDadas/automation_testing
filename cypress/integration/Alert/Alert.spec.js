///<reference types="Cypress"/>

describe('Alert, Confirm, Prompt', function () {
    it('Validate Alert', function () {
        cy.on('window : alert', function (resp) {
            expect(resp).to.eql('I am a JS Alert')
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsAlert()"]').click()
        cy.contains('You successfully clicked an alert').should('be.visible')
    })

    //-------------------------------------------------------------------------------------

    it('Validate Confirm', function () {
        cy.on('window:confirm Click on OK', function (resp) {
            expect(resp).to.eql('I am a JS Confirm')
            return true
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        cy.contains('You clicked: Ok').should('be.visible')
    })



    it('Validate Confirm Click on Cancel', function () {
        cy.on('window:confirm', function (resp) {
            expect(resp).to.eql('I am a JS Confirm')
            return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        cy.contains('You clicked: Cancel').should('be.visible')
    })

    //----------------------------------------------------------------------------------------

    it('Validate Confirm  Click on OK', function () {
        cy.window().then(function (obj) {
            cy.stub(obj, 'confirm').returns(true)
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        cy.contains('You clicked: Ok').should('be.visible')
    })



    it('Validate Confirm Click on Cancel', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function (obj) {
            cy.stub(obj, 'confirm').returns(false)
        })                                           // In this Case we have visit website first 
        cy.get('[onclick="jsConfirm()"]').click()
        cy.contains('You clicked: Cancel').should('be.visible')
    })

    //----------------------------------------------------------------------------------------

    it('Validate Prompt Enter "Hello" and Click on OK', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function (obj) {
            cy.stub(obj, 'prompt').returns('Hello')
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.contains('You entered: Hello').should('be.visible')
    })

    it('Validate Prompt Enter Nothing and Click on OK', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function (obj) {
            cy.stub(obj, 'prompt').returns(null)
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.contains('You entered: ').should('be.visible')
    })

    it('Validate Prompt Click on Cancel', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function (obj) {
            cy.stub(obj, 'prompt').returns(false)
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.contains('You entered: ').should('be.visible')
    })


})
