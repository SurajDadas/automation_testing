///<reference types="Cypress"/>

describe('Calender',function(){

    it('My leave is from',function(){
       cy.visit('https://opensource-demo.orangehrmlive.com/')
       cy.get('#txtUsername').type('Admin')
       cy.get('#txtPassword').type('admin123')
       cy.get('#btnLogin').click()
       cy.get('tbody').find('.quickLaunge').find('[href="/index.php/leave/viewMyLeaveList"]').click()
       cy.get('[class="ui-datepicker-trigger"]').first().click()

       let date1 = new Date()
       date1.setDate(date1.getDate()+100)
       let date = date1.getDate()
       let year = date1.getFullYear()
       let month = date1.getMonth()
       let month1 = date1.toLocaleString('default',{month : 'long'})
    
      


       //     Difficult to Set date , Month and Year
       
       //            Check later


    })
})






















