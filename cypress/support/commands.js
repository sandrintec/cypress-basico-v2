Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  cy.get('#firstName').type('Sandro')
  cy.get('#lastName').type('Santos')
  cy.get('#email').type('sandrinsandro11@gmail.com')
  cy.get('#open-text-area').type('Teste')
  cy.contains('button', 'Enviar').click() 
})