///<reference types="Cypress"/>

const url = 'https://opensource-demo.orangehrmlive.com/';
const Enter_userName = '#txtUsername';
const Enter_passward = '#txtPassword';
const Submit_Button = '#btnLogin';
const Validate_Text = '[alt="OrangeHRM"]'
const Forgot_Passward = 'a[href="/index.php/auth/requestPasswordResetCode"]'




class Login {

    Visit() {
        cy.visit(url)
    }


    EnterData(userName, passward) {
        cy.get(Enter_userName).type(userName)
        cy.get(Enter_passward).type(passward)
    }


    Submit() {
        cy.get(Submit_Button).click()
    }


    Validate_Text() {
        cy.get(Validate_Text).should('be.visible')
    }


    ForgotPasswardTextClick() {
        cy.get(Forgot_Passward).click()
    }

}
export default Login


































































