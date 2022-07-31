///<reference types="Cypress"/>

const url = 'https://opensource-demo.orangehrmlive.com/index.php/auth/requestPasswordResetCode';
const Validate_Logo = 'img[src="/webres_62b82647dcd4e5.19015658/themes/custom/images/login/logo.png"]';
const text_box = '#securityAuthentication_userName';
const Reset_Passward = '#btnSearchValues';
const Cancel = '##btnSearchValues'



class Forgot_Passward {

    Visit_Forgot_Passward() {
        cy.visit(url)
    }

    ValidateUrlOfNewPage() {
        cy.url().should('include','PasswordResetCode')
    }

    Enter_UserName(userName){
        cy.get(text_box).type(userName)
    }

    Click_Reset_Button(){
        cy.get(Reset_Passward).click()
    }

    Click_Cancel_Button(){
        cy.get(Cancel)
    }

    Validate_Text(){
        cy.contains('There is a password reset request already in the system.').should('be.visible')
    }

}

export default Forgot_Passward


































