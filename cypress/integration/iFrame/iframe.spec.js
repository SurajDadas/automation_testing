///<reference types = "Cypress"/>

describe('Validate iframe', function () {

// function defined for third test case to find iFrame
    let getIframe = function (id) {
        return cy.get(`#${id}`)
    }



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





























