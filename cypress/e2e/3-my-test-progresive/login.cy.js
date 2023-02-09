/// <reference types="cypress" />

describe('Login', function() {
    const urlLogin = 'http://localhost:8100/tabs/tab3';
    const buttonLogoutAdmin = '.ion-page > ion-tabs > .md > .md:nth-child(4) > .md:nth-child(1)';
    const buttonLogoutUser = '.ion-page > ion-tabs > .md > .md:nth-child(3) > .md:nth-child(1)';
    beforeEach(function() {
      cy.visit(urlLogin);
    });
  
    it('admin can log in', function() {
      cy.get('#input-username').type("admin");
      cy.wait(3000);
      cy.get('#input-password').type("admin");
      cy.wait(3000);
      cy.get('#button-login').click();
      cy.get('.swal2-toast-shown > .swal2-container > .swal2-popup >  #swal2-title').should('have.text', 'Login Exitoso');
    //   cy.location().should((location) => {
    //     expect(location.href).to.eq('http://localhost:8100/tabs/tab1')
    //   })
      cy.url().should("include", "/tabs/tab1");
      cy.wait(3000);
      cy.get('#tab-button-tab2').click();
      cy.wait(3000);
      cy.url().should("include", "/tabs/tab2");
      cy.wait(3000);
      cy.get(buttonLogoutAdmin).click();
    });
  
    it('user can log in', function() {
      cy.get('#input-username').type("user");
      cy.wait(3000);
      cy.get('#input-password').type("user");
      cy.wait(3000);
      cy.get('#button-login').click();
      cy.get('.swal2-toast-shown > .swal2-container > .swal2-popup >  #swal2-title').should('have.text', 'Login Exitoso');
      cy.url().should("include", "/tabs/tab1");
      cy.wait(3000);
      cy.get(buttonLogoutUser).click();
    });
  
    it('shows error with empty input', function() {
      cy.get('#button-login').click();
      cy.get('.swal2-toast-shown > .swal2-container > .swal2-popup >  #swal2-title').should('have.text', 'Wrong credentials');
    });
  
    it('shows error with incorrect input', function() {
      cy.get('#input-username').type("wqerqwerqwer");
      cy.wait(3000);
      cy.get('#input-password').type("qwerqwerqweqw");
      cy.wait(3000);
      cy.get('#button-login').click();
      cy.get('.swal2-toast-shown > .swal2-container > .swal2-popup >  #swal2-title').should('have.text', 'Wrong credentials');
  });
})
