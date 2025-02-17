class AddToCartPage {
  constructor() {
    this.firstProduct = () =>
      cy.iframe('iframe[name="framelive"]').find(".thumbnail-top").first();
    this.addToCartBtn = () =>
      cy
        .iframe('iframe[name="framelive"]')
        .find(`button[data-button-action="add-to-cart"]`);
    this.subTotalValue = () =>
      cy.iframe('iframe[name="framelive"]').find("span.subtotal.value");
    this.totalValue = () =>
      cy.iframe('iframe[name="framelive"]').find(".product-total>span.value");
    this.continueShoppingBtn = () =>
      cy.iframe('iframe[name="framelive"]').find(".btn.btn-secondary").last();
    this.proceedToCheckOutBtn = () =>
      cy.iframe('iframe[name="framelive"]').find(".btn.btn-primary").last();
  }
  addToCartScenario() {
    this.addToCartBtn().click();
    this.subTotalValue()
      .invoke("text")
      .then((value) => {
        // Now use the extracted value to assert against the total value
        this.totalValue().should("contain", value);
      });
    this.continueShoppingBtn().should("be.visible");
    this.proceedToCheckOutBtn().should("be.visible");
  }
}

export default new AddToCartPage();
