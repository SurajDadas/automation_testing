/// <reference types="cypress"/>


describe('Use differnt alert methods of JavaScript', function () {
    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    // test case for alert
    it('JavaScript alert', function () {
        cy.on('window:alert', function (str) {
            expect(str).to.eql('I am a JS Alert')
        })
        cy.get('[onclick="jsAlert()"]').click()
        cy.contains('You successfully clicked an alert').should('be.visible')
    })

        //-----------------------------------------------------------------------------------------------------
    // test case for confirm and pressed ok button method 1
    it('JavaScript confirm : ok', function () {
        cy.on('window:confirm', function (str) {
            expect(str).to.eql('I am a JS Confirm')
            return true
        })
        cy.get('[onclick="jsConfirm()"]').click()
        cy.contains('You clicked: Ok').should('be.visible')
    })

    // test case for confirm and pressed ok button method 2
    it('JavaScript confirm : ok', function () {
        cy.window().then(function (obj) {
            cy.stub(obj, 'confirm').returns(true)
        })
        cy.get('[onclick="jsConfirm()"]').click()
        cy.contains('You clicked: Ok').should('be.visible')
    })


    // test case for confirm and pressed cancel button method 1
    it('JavaScript confirm : cancel', function () {
        cy.on('window:confirm', function (str) {
            expect(str).to.eql('I am a JS Confirm')
            return false
        })
        cy.get('[onclick="jsConfirm()"]').click()
        cy.contains('You clicked: Cancel').should('be.visible')
    })


    it('JavaScript confirm : cancel', function () {
       cy.window().then(function(obj){
       cy.stub(obj,'confirm').returns(false)
       })
        cy.get('[onclick="jsConfirm()"]').click()
        cy.contains('You clicked: Cancel').should('be.visible')
    })
    //-----------------------------------------------------------------------------------------------------
    // test case for prompt and pressed ok button
    it('JavaScript Prompt : ok', function () {
        cy.window().then(function (str) {
            cy.stub(str, 'prompt').returns('Hello')
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.contains('You entered: Hello').should('be.visible')
    })

    // test case for prompt and pressed cancel button
    it('JavaScript Prompt : cancel', function () {
        cy.window().then(function (str) {
            cy.stub(str, 'prompt').returns(null)
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.contains('You entered:').should('be.visible')
    })


})
