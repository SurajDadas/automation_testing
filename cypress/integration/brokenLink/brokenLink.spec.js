///<reference types = 'cypress'/>
describe('Validate the kesari tours', () => {

    beforeEach(function () {
        cy.visit('https://www.kesari.in/')
    })

    it.only('Validate the each tab link', () => {
        let arr = []
        cy.get('#main-menu > ul >li').find('a:first').each((el) => {
            let herf = el.attr('href');
            //cy.log(herf)
            arr.push(herf)
            cy.log(arr);
        })
        .then(() => {
            cy.get('#main-menu > ul >li').each((ele, index) => {
                let text = ele.find('a:first')
                if (text.attr('href').startsWith('/')) {
                    cy.wrap(text).click({ force: true })
                    cy.url().should('contain', arr[index])
                    cy.go('back')
                }
            })
        })
    })

    it('Validate URl using click on each tab', () => {
        let responce = ["/Group-Tours", "/Speciality-Tours", "/Speciality-Tours/Low-Price-Tours",
            "/Tailor-Made", "http: //www.kesarimice.in", "/kesari-forex", "/visa", "/cruises",
            "/Deals", "/About-Us", "javascript:void(0);"]

        cy.visit('https://www.kesari.in/')
        cy.get('nav[id="main-menu"]').find('ul:first').children().each((el, index) => {
            let text = el.find('a').first()
            if (text.attr('href').startsWith('/')) {
                cy.wrap(text).click({ force: true })
                cy.url().should('contain', responce[index])
                cy.go('back')
            }
        })
    })

    it('validate url for each navigate bar', () => {
        cy.visit('https://www.kesari.in/')
        cy.get('.menu-item-has-children > a').each((el) => {
            let kk = el.attr("href")
            if (!(kk.includes("void(0)")))
                if (((el.prop("target")) != "_blank")) {
                    cy.visit(`https://www.kesari.in${kk}`).then(() => {
                        cy.url().should('contain', kk)
                    })
                } else {
                    cy.log(kk, "different base domain")
                }
        })
    })
})


