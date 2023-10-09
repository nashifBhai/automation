const homePage = require("../page_objects/home.page");
const loginPage = require("../page_objects/login.page");
const productPage = require("../page_objects/products.page");

beforeEach(() => {
    // open the application and verify elements
    cy.visit('https://www.automationexercise.com/');
});

describe("Automation Excercise Project Solution", () => {
    it("Home page visibility", () => {
        //home page assertions
        homePage.homePageAssertions();
    });
    it("Signup page", () => {
        //login signup assertions
        loginPage.loginSignupAssertion();
        //signup button
        loginPage.signUp();
        //fill up signup details
        loginPage.signUpDetails();
    });

    it("Login with Wrong Credentials", () => {
        //home page assertions
        homePage.homePageAssertions();
        //login with wrong Credentials
        loginPage.loginSignupAssertion();
        //login with wrong credentials
        loginPage.loginWrongCredentials();
    });

    it("Login with Right Credentials", () => {
        //home page assertions
        homePage.homePageAssertions();
        //login with wrong Credentials
        loginPage.loginSignupAssertion();
        //login with wrong credentials
        loginPage.loginRightCredentials();
        //home page assertions
        homePage.homePageAssertions();
    });

    it("Search a product and add to cart the Product", () => {
        //home page assertions
        homePage.homePageAssertions();
        //login with wrong Credentials
        loginPage.loginSignupAssertion();
        //login with wrong credentials
        loginPage.loginRightCredentials();
        //home page assertions
        homePage.homePageAssertions();
        productPage.productsPageAssertion();
        productPage.searchProduct();
    });
});