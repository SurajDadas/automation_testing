///<reference types ="Cypress"/>
import Login from "../Page_Objects/loginClass";
let login = new Login()
import Forgot_Passward from "../Page_Objects/ForgotPassClass";
let forgot_passward = new Forgot_Passward()




describe('Verify and Practice the PAGE OBJECT MODEL ( POM )', function () {

    it('Verify the Successful Login functionality with valid credentials by using page Object Model', function () {

        login.Visit()
        login.EnterData("Admin", "admin123")
        login.Submit()
        login.Validate_Text()
    })

    it('Validate the login credential with invalid credentials by using pade object model POM', function () {
        login.Visit()
        login.ForgotPasswardTextClick()
        forgot_passward.ValidateUrlOfNewPage()
        forgot_passward.Enter_UserName('Admin')
        forgot_passward.Click_Reset_Button()
        forgot_passward.Validate_Text()

    })

})







































