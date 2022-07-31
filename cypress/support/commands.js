// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// const { expect } = require("chai")

Cypress.Commands.add('login', (userName, passward) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('[name="txtUsername"]').type(userName)
    cy.get('[name="txtPassword"]').type(passward)
    cy.get('[value="LOGIN"]').click()
    //cy.get('h1').should('have.text', 'Dashboard')
})

//---------------------------------------------------------------------------------------------------------

Cypress.Commands.add('Verifycontactus', (firstName, lastName, email, message) => {
    if (firstName !== undefined) cy.get('[name="first_name"]').type(firstName)
    if (lastName !== undefined) cy.get('[name="last_name"]').type(lastName)
    if (email !== undefined) cy.get('[name="email"]').type(email)
    if (message !== undefined) cy.get('[name="message"]').type(message)
})

//-----------------------------------------------------------------------------------------------------------

Cypress.Commands.add('Validatetable', (tableid,expectedvalue) => {
    let sum = 0
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get(`#t0${tableid}`).find('tr').each(function (el, index, arr) {
        if (index !=0) {
            sum = sum + Number(el.find('td').last().text())
        }
    }).then(function () {
        expect(sum).to.equals(expectedvalue)
        cy.log(sum)
    })
})

//-----------------------------------------------------------------------------------------------

Cypress.Commands.add('JuiceShopLogin',()=>{
    let token;
        cy.request({
            method:"POST",
            url:"http://localhost:3000/rest/user/login",
            body:{email: "dadas@gmail.com", password: "dadas123"}

        }).then(function(response){
            token = response.body.authentication.token
            localStorage.setItem('token',token)
            cy.visit('http://localhost:3000/#/')
            cy.get('.close-dialog > .mat-button-wrapper > span').click()
        })
})

//---------------------------------------------------------------------------------------------------------
import 'cypress-file-upload';       // Plugin for File Upload
//---------------------------------------------------------------------------------------------------------
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
