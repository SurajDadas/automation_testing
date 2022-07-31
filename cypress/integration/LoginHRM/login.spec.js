
// //************************ SIR CODE ****************************


// describe('validate the login function', function () {
//     it('verify the login with valid credential', function () {
//         cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials')
//         cy.get('#divUsername > .form-hint').type('Admin')
//         cy.get('#txtPassword').type('admin123')
//         cy.get('#btnLogin').click()
//         cy.get('h1').should('be.visible')
//     })

//     it('validate the login form with invalid credential ', function () {
//         cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials')
//         cy.get('#divUsername > .form-hint').type('Admin')
//         cy.get('#txtPassword').type('admin121')
//         cy.get('#btnLogin').click()
//         cy.get('#spanMessage').should('be.visible')
//     })
// })




// // ********************** MY PRACTICE********************

describe('validate the login function', () => {

    it('validate the login form with invalid credential ', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('[id="txtUsername"]').type("Admin")
        cy.get('[id="txtPassword"]').type('admin123')
        cy.get('[id="btnLogin"]').click()
        cy.get('[id="menu_admin_viewAdminModule"]').should('be.visible')
    })

    it('validate the login form with invalid credential ', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('[id="txtUsername"]').type("Admin")
        cy.get('[id="txtPassword"]').type('admin12345')
        cy.get('[id="btnLogin"]').click()
        cy.get('[id="spanMessage"]').should('be.visible')
    })

    it('validate the login function with invalid credential', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('[id="txtUsername"]').type("Suraj")
        cy.get('[id="txtPassword"]').type("admin123")
        cy.get('[id="btnLogin"]').click()
        cy.get('[id="spanMessage"]').should('be.visible')
    })

    it('validate the login function with invalid credential', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('[id="txtUsername"]').type('Suraj')
        cy.get('[id="txtPassword"]').type('admin12345')
        cy.get('[id="btnLogin"]').click()
        cy.get('[id="spanMessage"]').should('be.visible')
    })
})
















