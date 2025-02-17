class SignInPage {
  constructor() {
    this.signInBtn = () =>
      cy
        .iframe('iframe[name="framelive"]')
        .find("#_desktop_user_info")
        .contains("Sign in");
    this.email = () =>
      cy.iframe('iframe[name="framelive"]').find("#field-email");
    this.password = () =>
      cy.iframe('iframe[name="framelive"]').find("#field-password");
    this.submitBtn = () =>
      cy.iframe('iframe[name="framelive"]').find("#submit-login");
    this.signOutBtn = () =>
      cy
        .iframe('iframe[name="framelive"]')
        .find("div.user-info")
        .contains(" Sign out ");
  }

  proceedToCheckoutScenario(email, password) {
    this.signInBtn().click();
    cy.frameLoaded('iframe[name="framelive"]');
    cy.wait(1000);
    this.email().type(email);
    this.password().type(password);
    this.submitBtn().click();
  }
}

export default new SignInPage();
