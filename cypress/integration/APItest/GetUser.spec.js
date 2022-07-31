/// <reference types ="cypress"/>

describe('GET API user test',function(){

       let accessToken = "f163d8b7e4a611e5d55e44aa0f01ad4b5e1957f37fa274656d7a8f4045df43b2"

    it('Get API test',function(){
        cy.request({
            method : "GET",
            url : "https://gorest.co.in/public/v2/users",
            headers :{
              "Authorization" : "Bearer" + accessToken
            }
        }).then(function(res){
            expect(res.status).to.eql(200)
            expect(res.body[0].id).to.eql(3327)
        })
    })















})











































