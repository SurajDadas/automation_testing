/// <reference types = "cypress"/>
describe("Check weather information",function(){


    it('Check weather information for all cities',function(){
       cy.request({
        method : "GET",
        url : "https://gorest.co.in/public/v2/users"
       }).then(function(res){
        
       })




    })





})