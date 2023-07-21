const loginPageObjs = require("../page_objects/login.page");
const homePageObjs = require("../page_objects/home.page");


beforeEach(() => {
    // open the application and verify elements
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

describe("Login Verification for User", () => {
    it("Check Login Pages for Wrong credentials", () => {
        loginPageObjs.loginWrongFunctionality();
    });
    it("Check Login Pages for right credentials", () => {
        loginPageObjs.loginFunctionality();
        cy.wait(3000);
        homePageObjs.homePageAssertions();
    });
});