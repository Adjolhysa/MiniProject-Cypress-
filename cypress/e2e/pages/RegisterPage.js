class RegisterPage {
  constructor() {
    this.createAccountBtn = () =>
      cy.iframe('iframe[name="framelive"]').find(".no-account");
    this.mrGender = () =>
      cy.iframe('iframe[name="framelive"]').find("#field-id_gender-1");
    this.firsName = () =>
      cy.iframe('iframe[name="framelive"]').find("#field-firstname");
    this.lastName = () =>
      cy.iframe('iframe[name="framelive"]').find("#field-lastname");
    this.email = () =>
      cy.iframe('iframe[name="framelive"]').find("#field-email");
    this.password = () =>
      cy.iframe('iframe[name="framelive"]').find("#field-password");
    this.dob = () =>
      cy.iframe('iframe[name="framelive"]').find("#field-birthday");
    this.checlMark1 = () =>
      cy.iframe('iframe[name="framelive"]').find('input[name="optin"]');
    this.checlMark2 = () =>
      cy.iframe('iframe[name="framelive"]').find('input[name="psgdpr"]');
    this.checlMark3 = () =>
      cy.iframe('iframe[name="framelive"]').find('input[name="newsletter"]');
    this.checlMark4 = () =>
      cy
        .iframe('iframe[name="framelive"]')
        .find('input[name="customer_privacy"]');
    this.saveBtn = () =>
      cy
        .iframe('iframe[name="framelive"]')
        .find('button[data-link-action="save-customer"]');
  }

  registerUser(firstName, lastName, email, password, dob) {
    this.createAccountBtn().click();
    cy.wait(1000);
    this.mrGender().click();
    this.firsName().type(firstName);
    this.lastName().type(lastName);
    this.email().type(email);
    this.password().type(password);
    this.dob().type(dob);
    this.checlMark1().click();
    this.checlMark2().click();
    this.checlMark3().click();
    this.checlMark4().click();
    this.saveBtn().click();
  }
}

export default new RegisterPage();
