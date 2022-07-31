///<reference types = "cypress"/>

describe('X_Path',function(){
    it('Select element by using X_Path',function(){
        cy.visit('https://www.amazon.in/')
        cy.xpath('//input[@id="twotabsearchtextbox"]').type('java')
        cy.xpath("//div[@class='autocomplete-results-container']//div[@class='s-suggestion s-suggestion-ellipsis-direction' and text()='java']//span[@class='s-heavy' and text()=' programming books']").click()
        cy.xpath('//span[@class="a-size-medium a-color-base a-text-normal" and text()="Beginning Programming with Java For Dummies, 5ed"]').should('have.text','Beginning Programming with Java For Dummies, 5ed')
    })


    it.only('Select element by using X_Path',function(){
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.xpath('//div[@id="topPanel"]//a//img[@alt="ParaBank"]').should('be.visible')
        cy.xpath('//div//input[@name="username"]').type('Suraj@gmail.com')
        cy.xpath('//div//input[@name="password"]').type('suraj123')
        cy.xpath('//div//input[@value="Log In"]').click()
        cy.xpath('//h1[@class="title"]').should('have.text','Accounts Overview')
    })
})























