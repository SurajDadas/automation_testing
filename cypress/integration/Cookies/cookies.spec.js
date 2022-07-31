/// <reference types ="Cypress"/>

/*Different cookies method to SET, GET & CLEAR

 1. cy.setCookie()
 2. cy.getCookie()
 3. cy.getCookies()
 4. cy.clearCookie()
 5. cy.clearCookies()

*/

describe('Example of managing Cookies in cypress', function () {

    beforeEach(function () {                                                        // Hooks
        cy.visit('https://opensource-demo.orangehrmlive.com/')                      // Visit Url
    })

/* In this method we firstly clear cookie and then one single cookie is set  */
    it('To set a browser cookie, use the cy.setCookie() command', function () {
        cy.clearCookies().then(function () {                                         // Clear All Cookies
            cy.setCookie('Suraj', 'Suraj23456')                                      // set new Cookie     
        })
    })

/* In this method we want to get cookie which we set in the first testcase but every testcase 
   refreshes so data of older testcase is not carry forward in next testcase so this test case fails*/
    it('To get a browser cookies, use the cy.getCookies() command', function () {
        cy.getCookies('Suraj').should('have.propery','value','Suraj23456')            // get cookie
    })


/* set and get cookies method written in same testcase*/
    it('To set a browser cookie, use the cy.setCookie() command', function () {
        cy.setCookie('Suraj', 'Suraj12345')                                           // set cookie
        cy.setCookie('Sopan','SwapnilMalwadkar').then(function(){                     // set cookie
            cy.getCookie('orangehrm').should('have.property','name','orangehrm')      // get cookie and assert default cookie
            cy.getCookie('Suraj').should('have.property','value','Suraj12345')        // get cookie and asert it
            cy.getCookie('Sopan').should('have.property','value','SwapnilMalwadkar')  // get cookie and assert it
            cy.getCookies().should('have.length',3)                                   // getcookies()
        })
    })



    







})