

describe('validate the contact us form by using fixture',()=>{
    it('validate the contact us form',()=>{
         cy.fixture('contactusmulti').then((data)=>{
         data.forEach((info)=>{
             cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
             cy.get('[name="first_name"]').type(info.firstName)
             cy.get('[name="last_name"]').type(info.lastName)
             cy.get('[name="email"]').type(info.email)
             cy.get('[name="message"]').type(info.message)
             cy.get('[value="SUBMIT"]').click()
         })
         })
    })
})







