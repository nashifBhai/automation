class homePage {
    element = {
        //Property
        //locator
        homeBtn: () => cy.xpath(`//a[normalize-space()='Home']`),
    }
    // Functions 
    homePageAssertions() {
      this.element.homeBtn().should('be.visible').click();
    }
}
module.exports = new homePage();