
describe('verify contact us form', () => {

    // let info = {
    //      firstName : 'Suraj',
    //      lastName : 'Dadas',
    //      email : 'dadas.suraj96@gmail.com',
    //      message : 'I am learning Javascript'
    // }

    // it('verify contact us form with hard coded values',()=>{
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type('Suraj')
    //     cy.get('input[name="last_name"]').type('Dadas')
    //     cy.get('input[name="email"]').type('dadas.suraj96@gmail.com')
    //     cy.get('textarea[name="message"]').type('I am learning javaScript')
    //     cy.get('input[value="SUBMIT"]').click()
    // })


    // it('verify contact us form with object declaration',()=>{
    //         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(info.firstName)
    //         cy.get('input[name="last_name"]').type(info.lastName)
    //         cy.get('input[name="email"]').type(info.email)
    //         cy.get('textarea[name="message"]').type(info.message)
    //         cy.get('input[value="SUBMIT"]').click()
    //     })



    // it('verify contact us form by using fixture method 1', () => {
    //         cy.fixture('contactus').then(function(data){
    //         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(data.firstName)
    //         cy.get('input[name="last_name"]').type(data.lastName)
    //         cy.get('input[name="email"]').type(data.email)
    //         cy.get('textarea[name="message"]').type(data.message)
    //         cy.get('input[value="SUBMIT"]').click()
    //     })
    // })



      beforeEach(function(){
          cy.fixture('contactus').then(function(data){
              this.info =data
          })
      })
     it('verify contactus form with fixture method2 beforeEach',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('input[name="first_name"]').type(this.info.firstName)
                cy.get('input[name="last_name"]').type(this.info.lastName)
                cy.get('input[name="email"]').type(this.info.email)
                cy.get('textarea[name="message"]').type(this.info.message)
                cy.get('input[value="SUBMIT"]').click()
     })
})