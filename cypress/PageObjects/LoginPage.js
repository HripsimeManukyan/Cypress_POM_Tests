class LoginPage {

    elements = {
        login_btn_modal: '#login2',
        username_input: '#loginusername',
        password_input: '#loginpassword',
        login_button: '#logInModal button.btn-primary',
        welcome_message: 'a#nameofuser',
        logout_button: '#logout2',
        login_modal: '#logInModal'
    }

    openPage() {
        cy.visit('https://demoblaze.com/')
    }

    login(username, password) {
        cy.get(this.elements.login_btn_modal).click()
        cy.get(this.elements.username_input, {timeout: 10000}).type(username)
        cy.get(this.elements.password_input).type(password)
        cy.get(this.elements.login_button).click()
    }

    verifyLoginSuccess(username) {
        cy.get(this.elements.welcome_message, {timeout: 10000})
            .should('be.visible').and('contain.text', `Welcome ${username}`)
        cy.get(this.elements.logout_button).should('be.visible')
    }

    verifyLoginModalDisappears() {
        cy.get(this.elements.login_modal).should('not.be.visible')
    }
}

export default LoginPage;

