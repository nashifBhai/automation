class loginPage {
    element = {
        //Property
        //locator
        loginSignupBtn: () => cy.get(`a[href='/login']`),
        nameInputSignUp: () => cy.get(`input[placeholder='Name']`),
        emailInputSignUp: () => cy.get(`input[data-qa='signup-email']`),
        signUpBtn: () => cy.get(`button[data-qa='signup-button']`),
        genderInput: () => cy.get(`#id_gender1`),
        passwordInput: () => cy.get(`#password`),
        daysInput: () => cy.get(`#days`),
        monthsInput: () => cy.get(`#months`),
        yearsInput: () => cy.get(`#years`),
        specialOfferInput: () => cy.get(`#optin`),
        firstNameInput: () => cy.get(`#first_name`),
        lastNameInput: () => cy.get(`#last_name`),
        companyInput: () => cy.get(`#company`),
        address1Input: () => cy.get(`#address1`),
        address2Input: () => cy.get(`#address2`),
        countryInput: () => cy.get(`#country`),
        stateInput: () => cy.get(`#state`),
        cityInput: () => cy.get(`#city`),
        zipCodeInput: () => cy.get(`#zipcode`),
        mobileNumberInput: () => cy.get(`#mobile_number`),
        createAccountBtn: () => cy.get(`button[data-qa='create-account']`),
        continueBtn: () => cy.get(`a[data-qa="continue-button"]`),
        logoutBtn: () => cy.get(`a[href='/logout']`),
        emailAddressInput: () => cy.get(`input[data-qa='login-email']`),
        passwordLoginInput: () => cy.get(`input[placeholder='Password']`),
        loginBtn: () => cy.get(`button[data-qa='login-button']`),
        wrongCredentialsWarning: () => cy.get(`p[style]`)
    }
    // Functions
    loginSignupAssertion() {
      this.element.loginSignupBtn().should('be.visible').click();
    }

    signUp() {
      //name input signup
      this.element.nameInputSignUp().should('be.visible').type('Udenix');
      //email input signup
      this.element.emailInputSignUp().should('be.visible').type('udenixinfo10@gmail.com');
      //signup button
      this.element.signUpBtn().should('be.visible').click();
    }

    signUpDetails() {
      //gender input
      this.element.genderInput().should('be.visible').check(`Mr`).should('be.checked');
      //password input
      this.element.passwordInput().should('be.visible').type('Udenix1234!');
      //date of birth days input
      this.element.daysInput().should('be.visible').select('11');
      //date of birth months input
      this.element.monthsInput().should('be.visible').select('11');
      //date of birth years input
      this.element.yearsInput().should('be.visible').select('2001');
      //special offer input
      this.element.specialOfferInput().should('be.visible').check().should('be.checked');
      //first name input
      this.element.firstNameInput().should('be.visible').type('Mr');
      //last name input
      this.element.lastNameInput().should('be.visible').type('Udenix');
      //company input
      this.element.companyInput().should('be.visible').type('Udenix');
      //address1 input
      this.element.address1Input().should('be.visible').type('Udenix Test Street');
      //address2 input
      this.element.address2Input().should('be.visible').type('Udenix Test City');
      //country input
      this.element.countryInput().should('be.visible').select('Canada');
      //state input
      this.element.stateInput().should('be.visible').type('Toronto');
      //city input
      this.element.cityInput().should('be.visible').type('Toronto City');
      //zip code input
      this.element.zipCodeInput().should('be.visible').type('12345');
      //mobile number input
      this.element.mobileNumberInput().should('be.visible').type('12345678901');
      //create account button
      this.element.createAccountBtn().should('not.be.disabled').click();
      //continue button
      this.element.continueBtn().should('not.be.disabled').click();
      //logout button
      this.element.logoutBtn().should('be.visible').click();
    }

    loginWrongCredentials() {
      //email address input login
      this.element.emailAddressInput().should('be.visible').type('udenixinfo7@gmail.com');
      //email input signup
      this.element.passwordLoginInput().should('be.visible').type('Udenix12345!');
      //signup button
      this.element.loginBtn().should('be.visible').click();
      //verify warning/error message
      this.element.wrongCredentialsWarning().should('exist').and('be.visible').and('include.text', 'Your email or password is incorrect!');
    }

    loginRightCredentials() {
      //email address input login
      this.element.emailAddressInput().should('be.visible').type('udenixinfo10@gmail.com');
      //email input signup
      this.element.passwordLoginInput().should('be.visible').type('Udenix1234!');
      //signup button
      this.element.loginBtn().should('be.visible').click();
    }
}
module.exports = new loginPage();