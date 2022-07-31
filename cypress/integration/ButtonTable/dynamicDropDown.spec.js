///<reference types = "Cypress"/>

describe('Validate The Dynamic Drop Down on Amazon.in',function(){
    it('TC01 : Dynamic Drop Down',function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('apple')
        cy.xpath('//span[@class="s-heavy" and text()=" iphone 13"]').click()
        cy.contains('iPhone 13. Superbright. Supercolorful. Supersharp.').should('be.visible')
    })


    it.only('Validate The Dynamic Drop Down on Google',function(){
        cy.visit('https://www.google.com/')
        cy.xpath('//input[@class="gLFyf gsfi"]').type('minskole')
        cy.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[2]/div[2]/div[2]/ul[1]/div/ul/li[1]').click()
        cy.contains('minSkole (@minskole) • Instagram photos and videos').should('be.visible')
    })

})



















