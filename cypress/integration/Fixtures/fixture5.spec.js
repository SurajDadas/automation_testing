
describe('verify the contact us function with fixture',()=>{
    beforeEach(function(){
        cy.fixture('contactus').then(function(database){
            this.data = database
        })
    })
    it('verify the contact us form with fixture method',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(this.data.firstName)
        cy.get('[name="last_name"]').type(this.data.lastName)
        cy.get('[name="email"]').type(this.data.email)
        cy.get('[name="message"]').type(this.data.message)
        cy.get('[value="SUBMIT"]').click()
    })
})
