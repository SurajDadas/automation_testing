
import data from '../../fixtures/contactusmulti.json'

describe('validate the contact us form with fixture method',()=>{
    data.forEach((info,index)=>{
         it(`validate the contact us form with fixture method ${index+1}`,()=>{
             cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
             cy.get('[name="first_name"]').type(info.firstName)
             cy.get('[name="last_name"]').type(info.lastName)
             cy.get('[name="email"]').type(info.email)
             cy.get('[name="message"]').type(info.message)
             cy.get('[value="SUBMIT"]').click()
         })

        })
})



















