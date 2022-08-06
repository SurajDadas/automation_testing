///<reference types = 'cypress'/>
describe('Validate the kesari tours', () => {

    it.skip('Validate the broken link method : 1', function () {
        let arr = []
        cy.visit('https://www.kesari.in/')
        cy.get('#main-menu > ul > li> a').each(function (el) {
            let href = el.attr('href')
            arr.push(href)
            cy.log(arr)
        }).then(function () {
            cy.get('#main-menu > ul > li> a').each(function (el, index) {
                let text = el.attr('href')
                if (text.startsWith('/')) {
                    cy.wrap(el).click({ force: true })
                    cy.url().should('contain', arr[index])
                    cy.go(-1)
                }
            })
        })
    })

    it.skip('Validate the broken link Method : 2', function () {
        cy.visit('https://www.kesari.in/')
        let array = ["/Group-Tours", "/Speciality-Tours", "/Speciality-Tours/Low-Price-Tours",
            "/Tailor-Made", "http://www.kesarimice.in", "/kesari-forex", "/visa",
            "/cruises", "/Deals", "/About-Us", "javascript:void(0);"]
        cy.get('#main-menu > ul > li > a').each(function (el, index) {
            let href = el.attr('href')
            if (href.startsWith('/')) {
                cy.wrap(el).click({ force: true })
                cy.url().should('contain', array[index])
                cy.go("back")
            }
        })
    })


    
    it('Validate the broken link Method : 2', function () {
        let arr = ["http://www.restapitutorial.com/","https://www.soapui.org/","https://jmeter.apache.org/",
        "https://rahulshettyacademy.com/brokenlink","#","#","#","#","#","#","#","#","#","#","#"]
        let brokenLink = []
        let href 
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        // cy.get('.gf-t > tbody > tr > td > ul > li >a').each(function (el) {
        //     href = el.attr('href')
        //     arr.push(href)
        // })
        // cy.log(arr)
        // .then(function () {
            cy.get('.gf-t > tbody > tr > td > ul > li >a').each(function (el, index) {
               cy.wrap(el).click()
        })
        cy.log(brokenLink)

    })




})