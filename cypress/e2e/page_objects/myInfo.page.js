class myInfoPage {
    element = {
        //Property
        //locator
        driversLiscenceNo: () => cy.xpath(`(//input[@class='oxd-input oxd-input--active'])[5]`),
        licenseExpiryDate: () => cy.xpath(`(//input[@placeholder='yyyy-mm-dd'])[1]`),//2023-12-31
        femaleGender: () => cy.xpath(`//input[@value='2']`),
        gender: () => cy.get(`[type="radio"]`),
        smokecheck: () => cy.xpath(`//label[normalize-space()='Yes']`),
        addBtn: () => cy.xpath(`//button[normalize-space()='Add']`),
        browseFile: () => cy.get(`.oxd-file-button`),
        uploadFile: () => cy.get(`.oxd-icon.bi-upload.oxd-file-input-icon`),

        //button[normalize-space()='Add']

        //label[normalize-space()='Yes']
    }
    // Functions 
    addMyInfo() {
      this.element.driversLiscenceNo().should('be.visible').clear().type("123456789");
      this.element.licenseExpiryDate().should('be.empty').clear().type("2023-12-31");
      //force true
      this.element.femaleGender().click({ force: true });
      //first and last
      this.element.gender().first().check({force: true});
      //value
      this.element.gender().check('2', {force: true});
      this.element.smokecheck().should('be.visible').click({force: true});
      this.element.addBtn().should('be.visible').click();
    }

    addFile() {
      const p = 'sample.png'
      this.element.browseFile().attachFile(p);
      this.element.uploadFile().should('be.visible').click();  
    }
}
module.exports = new myInfoPage();