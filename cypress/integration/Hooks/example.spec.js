///<reference types="Cypress"/>


before(function () {
    cy.log('I Will Run Once Before All Test Cases In The Block')
})

beforeEach(function(){
    cy.log('I Will Run Before Every Test Case')
})

afterEach(function(){
    cy.log('I will Run After Every Test Case')
})

after(function(){
    cy.log('I will Run After All Test Cases In The Block ')
})

it('1st Test Case',function(){
    cy.log('I am 1st Test Case')
})

it('2nd Test Case',function(){
    cy.log('I am 2nd Test Case')
})

it('3rdst Test Case',function(){
    cy.log('I am 3rd Test Case')
})

it('4th Test Case',function(){
    cy.log('I am 4th Test Case')
})
















