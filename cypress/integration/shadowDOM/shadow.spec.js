///<reference types="Cypress"/>

describe('Validate The shadow() DOM',function(){
    it('By using .shadow method',function(){
        cy.visit('http://127.0.0.1:5500/cypress/integration/shadowDOM/index.html')
        cy.get('[onclick="attachShadowDom()"]').click()
        cy.get('#shadowHost').shadow().find('h2').should('have.text','I belong to Shadow DOM')
        cy.get('#shadowHost').shadow().find('#name').type('Suraj').should('have.value','Suraj')
    })

    it('Without using .shadow() method',function(){
        cy.visit('http://127.0.0.1:5500/cypress/integration/shadowDOM/index.html')
        cy.get('[onclick="attachShadowDom()"]').click()
        cy.get('h2').first().should('have.text','I belong to Shadow DOM')
        cy.get('#name').type('Suraj').should('have.value','Suraj')
    })

    it('By using JavaScript Method',function(){
        cy.visit('http://127.0.0.1:5500/cypress/integration/shadowDOM/index.html')
        cy.get('[onclick="attachShadowDom()"]').click()
        cy.get('#shadowHost').then(function(el){
            let [dom] = el.get()
            expect(dom.shadowRoot.querySelector('h2').textContent).to.eql('I belong to Shadow DOM')
            })
    })

    it('Without using .shadow() method configration added only for Specific Commands not intalled in Cypress.json',function(){
        cy.visit('http://127.0.0.1:5500/cypress/integration/shadowDOM/index.html')
        cy.get('[onclick="attachShadowDom()"]').click()
        cy.get('h2',{includeShadowDom : true}).first().should('have.text','I belong to Shadow DOM')
        cy.get('#name',{includeShadowDom : true}).type('Suraj').should('have.value','Suraj')
    }) 
})
