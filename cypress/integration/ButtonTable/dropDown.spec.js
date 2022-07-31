///<reference types ="Cypress"/>

describe('Validate Static DropDown',function(){
    it('TC01 : Validate Static Drop Down',function(){
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').scrollIntoView().invoke('removeAttr','target').click()
        cy.get('#dropdowm-menu-1').select('Python')
        cy.get('#dropdowm-menu-1').select('SQL')
    })

    it('TC01 : Validate Static Drop Down',function(){
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').scrollIntoView().invoke('removeAttr','target').click()
        cy.get('#dropdowm-menu-1').select('C#')
        cy.contains('C#').should('be.visible')
        cy.get('#dropdowm-menu-2').select('TestNG')
        cy.contains('TestNG').should('be.visible')
        cy.get('#dropdowm-menu-3').select('JavaScript')
        cy.contains('JavaScript').should('be.visible')
    })
    

    it.only('Validate Static Drop Down',function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#speed').select('Medium')
        cy.contains('Medium').should('be.visible')
        cy.get('#files').select('PDF file')
        cy.contains('PDF file').should('be.visible')
        cy.get('#number').select('3')
        cy.contains('3').should('be.visible')
    })



})














