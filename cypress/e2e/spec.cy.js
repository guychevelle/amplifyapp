describe('spec.cy.js', () => {
  it('this test visits Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()

    // clicking the 'type' link will open a new page
    // the page url should include the below text:
    // '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // get an input, type it in the app and verify
    // that the value has been updated. cy.get() gets
    // a DOM element from the page
    cy.get('[id="email1"]')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
