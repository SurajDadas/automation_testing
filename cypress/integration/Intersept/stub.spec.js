///<reference types="Cypress"/>
import payload from '../../fixtures/contactus.json'


describe('Stub', function () {

    it('Validate the Stubbing 01', function () {
        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }, {
            body: { userName: 'Suraj', lastName: 'Dadas' }
        }
        ).as('GetComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn.btn.btn-primary').click()
        cy.wait('@GetComment').then(function (resp) {
            cy.log(resp)
        })
    })

    //----------------------------------------------------------------------------------

    it('Validate the Stubbing 02', function () {
        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }, {
            body: payload,
            statusCode: 401
        }
        ).as('GetComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn.btn.btn-primary').click()
        cy.wait('@GetComment').then(function ({ response, request }) {
            cy.log(response)
        })
    })

    //----------------------------------------------------------------------------------

    it('Validate the Stubbing 03', function () {
        cy.intercept({
            method: 'POST',
            url: 'https://jsonplaceholder.cypress.io/comments'
        }, {
            body: {
                body: "I am Dada",
                email: "Suraj Dadas",
                id: 101
            }
        }).as('PostComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-post.btn.btn-success').click()
        cy.wait('@PostComment').then(function ({ response, request }) {
            cy.log(response)
        })
    })

    //----------------------------------------------------------------------------------

    it('Validate the Stubbing 04', function () {
        cy.intercept({
            method : 'GET',
            url :'https://reqres.in/api/users?page=2'
        },{
            body : {
                firstName : 'Suraj',
                lastName : 'Dadas'
            }
        }).as('GetUser')

        cy.visit('https://reqres.in/')
        cy.get('[data-key="url"]').click()
        cy.wait('@GetUser').then(function({response,request}){
            cy.log(response)
        })
    })

    //----------------------------------------------------------------------------------

    it.only('Validate the Stubbing 05',function(){
        cy.intercept({
            method : 'GET',
            url : 'https://reqres.in/api/users'
        },{
            statusCode : 500,
            body : {
                nam: "Suraj",
                job: "Dadas"
            }
        }).as('PostUser')

        cy.visit('https://reqres.in/')
        cy.get('[data-id="post"]').click()
        cy.get('[class="url"]').click()
        cy.wait('@PostUser').then(function({response,request}){
             cy.log(response.statusCode)
             cy.log(response.body)
        })
    })

})
























