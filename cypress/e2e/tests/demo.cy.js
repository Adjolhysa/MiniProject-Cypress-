import "cypress-iframe";
import SignInPage from "../pages/SignInPage";
import globalInput from "../../enum/enum";
import RegisterPage from "../pages/RegisterPage";
import addToCartPage from "../pages/addToCartPage";

beforeEach(() => {
  cy.visit(globalInput.url);
});

it("Sceanrio 1", () => {
  SignInPage.signInBtn().click();
  cy.wait(1000);
  RegisterPage.registerUser(
    globalInput.firstName,
    globalInput.lastName,
    globalInput.email,
    globalInput.password,
    globalInput.dob
  );
  cy.wait(1500);
  SignInPage.signOutBtn().should("be.visible");
  SignInPage.signOutBtn().should("be.visible").click();
  cy.wait(1500);
  SignInPage.signInBtn().should("be.visible");
});

it("Sceanrio 2", () => {
  SignInPage.signInBtn().click();
  SignInPage.proceedToCheckoutScenario(globalInput.email, globalInput.password);
  cy.wait(1500);
  SignInPage.signOutBtn().should("be.visible");
  SignInPage.signOutBtn().should("be.visible").click();
  cy.wait(1500);
  SignInPage.signInBtn().should("be.visible");
});

it("Sceanrio 3", () => {
  SignInPage.signInBtn(globalInput.email, globalInput.password);
  cy.wait(1000);
  addToCartPage.firstProduct().click();
  cy.wait(1500);
  addToCartPage.addToCartBtn().should("be.visible");
  addToCartPage.addToCartScenario();
});
