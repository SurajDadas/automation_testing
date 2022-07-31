///<reference types="cypress" />

describe('verify the juice_shop',function(){
    it('verify ui less login',function(){
        cy.JuiceShopLogin() 
    }) 
    it.only('count number of Products on dashboard',function(){
        let count=0
        cy.JuiceShopLogin() 
        cy.get('.mat-card.mat-focus-indicator.mat-elevation-z6.ribbon-card').each(function(el){
            count=count+1
        }).then(function(){
            cy.log(count)
        })
    }) 
    it('verify the API in juice_shop',function(){   //not working
        let param="apple"
        cy.intercept({
            method:"GET",
            url:`http://localhost:3000/rest/products/search?q=${param}`
        }).as('interc')
        cy.JuiceShopLogin()
        cy.get('.mat-search_icon-search').click()
            cy.get('#mat-input-0').type(param+'{enter}')
            cy.reload()
            cy.wait('@interc').then(function(res){
                cy.log(res)
            })
        
        
       


    })
    it.only('page navigation',function(){
        cy.JuiceShopLogin()
        cy.get('.cc-btn').click()
        for(let i=0;i<10;i++){
        cy.get('button[aria-label="Next page"]').invoke('text').then(function(res){
            
                if(res!=' 25 – 35 of 35 '){
                    cy.get('button[aria-label="Next page"]').click({force:true})
                }
            
        })
    }
    })
})























