describe('Login', () => {
  it('should be able to login', () => {
    cy.visit('http://localhost:3000/Login')
    cy.get('#username').type('MylesJefferson')
    cy.get('#password').type('password')
    cy.get('form').within(() => {
      cy.get('button').click()
    })
  })
})