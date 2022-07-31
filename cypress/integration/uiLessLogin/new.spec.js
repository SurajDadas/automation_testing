///<reference types="cypress" />

describe('Validate UI less Login', function () {
      
    it('Validate the UI Login',function(){
        cy.visit('http://localhost:3000/#/login')
        cy.get('.close-dialog > .mat-button-wrapper > span').click()
        cy.get('#email').type('dadas@gmail.com')
        cy.get('#password').type('dadas123')
        cy.get('#loginButton').click()
        cy.contains('All Products').should('be.visible')
    })


    it.only('Validate the UI Less Login',function(){
        let token =''
        cy.request({
            method : "POST",
            url : "http://localhost:3000/rest/user/login",
            body :{
                email: "Suraj@gmail.com",
                password: "suraj1996"
            }
        }).then(function(response){
           token = response.body.authentication.token
           cy.visit('http://localhost:3000/#/login')
           cy.get('.close-dialog > .mat-button-wrapper > span').click()
           window.localStorage.setItem('token',token)
           cy.contains('All Products').should('be.visible')

        })
    })
    
})