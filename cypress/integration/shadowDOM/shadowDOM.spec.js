///<reference types="Cypress"/>

/*   **********   Shadow DOM = A DOM inside DOM     **********
    --  Like iFrame firstly we have to get  SHADOW ROUTE(OPEN)  element in html code
    --  then check the mode of SHADOW ROUTE is OPEN Or CLOSED  
    **  if CLOSED then we have to ask developer to make it as OPEN 
    --  And then select the element exactly Present above SHADOW ROUTE(OPEN)
    --  after geting element use   .shadow()    method and 
    --  then TRAVERSE the element normally and then add EVENT or VALIDATE

    **  if we don't want to use .shadow()  method 
    --  for that add this line in Cypress.json File       "includeShadowDom" : true
    --  after including we don't have to use .shadow() method just traverse normally
    --  but above process should have to follow
*/


describe('Shadow DOM', function () {
    it('TC01 : Validate The Shadow DOM With .shadow() method', function () {
        cy.visit('http://127.0.0.1:5500/cypress/integration/shadowDOM/index.html')
        cy.get('button').click()
        cy.get('#shadowHost').shadow().find('input[id="name"]').type('Hello')
    })

    it('TC02 : Validate The Shadow DOM Without .shadow() method', function () {
        cy.visit('http://127.0.0.1:5500/cypress/integration/shadowDOM/index.html')
        cy.get('button').click()
        cy.get('#shadowHost').find('input[id="name"]').type('Hello')
        // here we not using  .shadow   method as we added   "includeShadowDom" : "True"   in Cypress.json file
    })

//------------------------------------------------

//                                 ( Not Working : Site Error )

    // it('TC03 : Validate The Shadow DOM With .shadow() method', function () {
    //     cy.visit('https://books-pwakit.appspot.com/')
    //     cy.get('book-app').shadow().find('app-toolbar').find('input').type('hello')
    // })


    // it('TC04 : Validate The Shadow DOM Without .shadow() method',function(){
    //     cy.visit('https://books-pwakit.appspot.com/')
    //     cy.get('book-app').find('app-toolbar').find('input').type('hello')
    //     // here we not using  .shadow   method as we added   "includeShadowDom" : "True"   in Cypress.json file
    // })



})




















