class orange_loginPage {
    element = {
        //Property
        //locator
        userName: () => cy.get(`input[placeholder='Username']`),
        password: () => cy.get(`input[placeholder='Password']`),
        loginBtn: () => cy.get(`button[type='submit']`),
        helpBtn: () => cy.get(`button[title='Help']`),
        loginLogo: () => cy.xpath(`//h5[@class='oxd-text oxd-text--h5 orangehrm-login-title']`)
    }
    // Functions 
    loginFunctionality() {
      this.element.loginLogo().should('be.visible');
      this.element.userName().should('be.empty').clear().type("Admin");
      this.element.password().should('be.visible').type("admin123");
      this.element.loginBtn().should('not.be.disabled').click();
      this.element.helpBtn().should('be.visible');
    }

    loginWrongFunctionality() {
      this.element.userName().should('be.empty').clear().type("Admin1");
      this.element.password().should('be.visible').type("admin1234");
      this.element.loginBtn().should('not.be.disabled').click();
      //this.element.helpBtn().should('be.visible');
    }

    loginFunctionalityVerification(uNam, pas) {
      let uName=uNam;
      let pass= pas;
      this.element.userName().should('be.empty').clear().type(uName);
      this.element.password().should('be.visible').type(pass);
      this.element.loginBtn().should('not.be.disabled').click();
      this.element.helpBtn().should('be.visible');
    }
}
module.exports = new orange_loginPage();