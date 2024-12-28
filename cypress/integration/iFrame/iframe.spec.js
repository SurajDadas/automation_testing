///<reference types = "Cypress"/>

describe('Validate iframe', function () {

// function defined for third test case to find iFrame
    let getIframe = function (id) {
        return cy.get(`#${id}`)
    }


    it.only('Verify iframe',function(){
        cy.visit('https://demo.automationtesting.in/Frames.html')
        cy.get('#singleframe').then(function(iframe){
            let bdy = iframe.contents().find('body')
            cy.wrap(bdy).as('body')
            cy.get('@body').within(function(){
                cy.get('[type="text"]').first().type('Suraj')
            })
        })
    })

    it.only('Verify iframe',function(){
        cy.visit('https://demo.automationtesting.in/Frames.html')
        cy.contains('Iframe with in an Iframe').click({force : true})

        cy.get('iframe[style="float: left;height: 300px;width:600px"]').then(function(iframe){
            let bdy = iframe[0].contentDocument.body
            cy.wrap(bdy).as('body')
            cy.get('@body').within(function(){
                cy.get('iframe[style="float: left;height: 250px;width: 400px"]').then(function(iframe){
                    let bdy = iframe[0].contentDocument.body
                    cy.wrap(bdy).as('body')
                    cy.get('@body').within(function(){
                        cy.get('[type="text"]').last().type('Suraj Dadas')
                    })
                })
            })
        })
    })

    it('Test Case 1 : Validate iframe by using jquery', function () {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function ($iframe) {
            let body = $iframe.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('div[class="section-title"]').parent().should('have.attr', 'class', 'thumbnail')
        })
    })


    it('Test Case 2 : Validate iframe by using JavaScript', function () {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function (iframe) {
            let body = iframe[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('div[class="section-title"]').parent().should('have.attr', 'class', 'thumbnail')
        })
    })


    it('test Case 3 : Validate iframe by using JavaScript by using function', function () {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        getIframe('frame').then(function(iframe){
            let body = iframe[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('div[class="section-title"]').parent().should('have.attr', 'class', 'thumbnail')
        })
    })


})





























