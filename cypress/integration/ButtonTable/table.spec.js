
describe('Validate Table functionality',function(){

it('Validate the table functionality',function(){
  let sum =0
  cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
  cy.get('[id="t01"]').find('tr').each(function(el,index,arr){
        if(index!==0){
            sum = sum + Number(el.find('td').last().text())
        }
  }).then(function(){
      expect(sum).to.eql(159)
      cy.log(sum)
  }) 


})

it('Validate the table functionality',function(){


        
         cy.Validatetable(1,159)
         cy.Validatetable(2,163)
        })




















})