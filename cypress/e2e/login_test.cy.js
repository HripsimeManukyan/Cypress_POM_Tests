import LoginPage from "../PageObjects/LoginPage";


describe('Login Functionality Test', () => {
    it('Test successful login asserts', () => {
        const loginPage = new LoginPage()

        loginPage.openPage()
        loginPage.login('username', 'password')
        loginPage.verifyLoginSuccess('username')
        loginPage.verifyLoginModalDisappears()

    })
})

