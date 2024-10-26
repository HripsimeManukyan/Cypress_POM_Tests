import HomePage from "../PageObjects/HomePage";


describe('Add to Cart Functionality Test', () => {
    const homePage = new HomePage()

    it('Test "Add to Cart" Functionality for a Product Assert', () => {
        homePage.openPage()
        homePage.addProductToCart('Samsung galaxy s6')
        homePage.verifyAlertContains('Product added')
        homePage.navigateToCart()
        homePage.verifyProductInCart('Samsung galaxy s6')
    })
})

