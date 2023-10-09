class productPage {
    element = {
        //Property
        //locator
        productsPageBtn: () => cy.get(`a[href='/products']`),
        featuredItems: () => cy.get(`.features_items`),
        searchProduct: () => cy.get(`#search_product`),
        submitSearch: () => cy.get(`#submit_search`),
        searchedProduct: () => cy.get(`div[class='overlay-content'] p`),
        addToCartBtn: () => cy.get(`div[class='productinfo text-center'] a[class='btn btn-default add-to-cart']`),
    }
    // Functions
    productsPageAssertion() {
      this.element.productsPageBtn().should('be.visible').click();
      this.element.featuredItems().should('be.visible');
    }

    searchProduct() {
      //searchProduct
      this.element.searchProduct().should('be.visible').type('blue top');
      //search button
      this.element.submitSearch().should('be.visible').click();
      //searched Product visibility
      this.element.searchedProduct().should('exist').and('be.visible').and('include.text', 'Blue Top');
    }
}
module.exports = new productPage();