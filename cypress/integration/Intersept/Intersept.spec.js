/// <reference types ="Cypress"/>

describe('Intersept ', function () {

    it('GET API with Intersept',function(){
        cy.intercept({
            method : 'GET',
            url : 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('GetResponse')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn.btn.btn-primary').click()
        cy.wait('@GetResponse').then(function({response, request}){
            cy.log(response)
            expect(response.statusCode).to.eql(200)
            cy.get('.network-comment').should('have.text',response.body.body)
        })
    })
   

    it('POST request by using Intersept',function(){
        cy.intercept({
            method : 'POST',
            url : 'https://jsonplaceholder.cypress.io/comments'
        }).as('PostResponse')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-post.btn.btn-success').click()
        cy.wait('@PostResponse').then(function({request,response}){
            expect(response.statusCode).to.eql(201)
            cy.get('.network-post-comment').should('have.text','POST successful!')
        })
    })


    it('PUT request with Intersept',function(){
        cy.intercept({
            method : 'PUT',
            url : 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('PutComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-put.btn.btn-warning').click()
        cy.wait('@PutComment').then(function({response,request}){
            expect(response.statusCode).to.eql(200)
        })
    })


})


























