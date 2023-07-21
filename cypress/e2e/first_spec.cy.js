describe('Register and Login', () => {

  it('new user sign up', () => {
    cy.visit('https://www.batabd.com/');
    cy.wait(10000);
    //double click
    cy.get(`a[title='User Icon']`).dblclick();
    cy.wait(10000);
    //cy go and back
    cy.go('back');
    cy.wait(10000);
    cy.go('forward');
    //reload()
    cy.wait(10000);
    cy.reload();

  })

  it('new user sign up', () => {
    cy.visit('https://www.batabd.com/');
    cy.wait(10000);
    //double click
    cy.get(`a[title='User Icon']`).dblclick();
    cy.wait(10000);
    //cy go and back
    cy.go('back');
    cy.wait(10000);
    cy.go('forward');
    //reload()
    cy.wait(10000);
    cy.reload();

  })
})