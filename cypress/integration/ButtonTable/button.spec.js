///<reference types="Cypress"/>

describe('Validate the Radio Button, Checkbox functionality', function () {

    it('Validate the Radio Button functionality', function () {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('[value="green"]').check().should('be.checked')
        cy.get('[value="blue"]').should('not.be.checked')

        // validate every radio
        cy.get('#radio-buttons').find('input').each(function (el) {
            cy.wrap(el).check().should('be.checked')
        })

    })

    //--------------------------------------------------------

    it('Validate the CheckBox functionality', function () {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-1"]').check().should('be.checked')
        cy.get('[value="option-1"]').uncheck().should('not.be.checked')

        // validate every checkbox

        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-3"]').uncheck().should('not.be.checked')
        cy.get('[id="checkboxes"]').find('input').each(function (el) {
            cy.wrap(el).click().should('be.checked')
            cy.wrap(el).click().should('not.be.checked')
        })

    })

    //--------------------------------------------------------

    it('Validate Static DropDown Functionality', function () {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('C#')
        cy.get('#dropdowm-menu-1').children().eq(1).should('have.text', 'C#')

        let selectedValues = ['C#', 'Maven', 'CSS']

        cy.get('.section-title').first().find('select').each(function (el, index) {
            cy.wrap(el).select(selectedValues[index]).should('contain', selectedValues[index])
        })
    })
    it.only('Validate Dynamic DropDown Functionality', function () {
        cy.visit('https://www.google.com/')
        cy.get('[title="Search"]').type('javascript')
        cy.get('[role=option]').find('span').each(function (el) {
            if (el.text().includes(' interview questions')) {
                cy.wrap(el).click()
                //return false

            }

        })
        cy.url().should('contain','javascript+interview+questions')
    })




})





















