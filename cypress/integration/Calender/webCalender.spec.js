///<reference types= "Cypress"/>

describe('Calender', function () {
    it('Validate the Calender', function () {

        //  14 August 2023

        let date1 = new Date()
        date1.setDate(date1.getDate() + 365)
        let date = date1.getDate()
        //cy.log(date)
        let year = date1.getFullYear()
        //cy.log(year)
        let month = date1.toLocaleString('default', { month: 'long' })
        //cy.log(month)

        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.xpath('//div[@id="datepicker"]').click()

        function selectMonthYear() {
            cy.get('.datepicker-switch').first().then(function (el) {
                if (! el.text().includes(year)) {
                    cy.get('.next').first().click()
                    selectMonthYear()
                }
            }).then(function () {
                cy.get('.datepicker-switch').first().then(function (el) {
                    if (! el.text().includes(month)) {
                        cy.get('.next').first().click()
                        selectMonthYear()
                    }
                })
            })
        }

        function getFutureDate() {
            cy.contains(date).click()
        }
        selectMonthYear()
        getFutureDate()
    })
})




















