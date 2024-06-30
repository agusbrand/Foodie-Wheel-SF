describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load successfully", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Foodie Wheel SF");
  });

  it("should spin the wheel and display a result", () => {
    cy.get("[data-cy=chosen-food-truck]").should("not.exist");
    cy.get("[data-cy=spin-button]").should("be.visible");

    cy.get("[data-cy=spin-button]").click();

    cy.get("[data-cy=chosen-food-truck]").should("be.visible");
  });
});
