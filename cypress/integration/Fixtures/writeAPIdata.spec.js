///<reference types = 'cypress'/>

describe('Write the Data obtained from the API response into Fixture File',function(){
    it('Write Data to fixture file',function(){
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users?page=2'
        }).then(function(resp){
            cy.writeFile('cypress/fixtures/writeData.json',resp.body)
        })
        cy.fixture('writeData').then(function(resp){
            expect(resp.page).to.eql(2)
            expect(resp.data.length).to.eql(6)
            expect(resp.total).to.eql(12)

        })
    })
})



































