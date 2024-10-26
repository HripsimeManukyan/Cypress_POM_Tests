class HomePage {

    elements = {
        product_button: '.btn.btn-success',
        cart_link: '#cartur'
    }

    openPage() {
        cy.visit('https://demoblaze.com/')
    }

    addProductToCart(productName) {
        cy.contains(productName).click()
        cy.get(this.elements.product_button).click()
    }

    verifyAlertContains(message) {
        cy.on('window:alert', (str) => {
            expect(str).to.equal(message)
        })
    }

    navigateToCart() {
        cy.get(this.elements.cart_link).click()
    }

    verifyProductInCart(productName) {
        cy.contains(productName).should('be.visible')
    }
}

export default HomePage;

