Cypress.Commands.add('createPet', (pet) => {
    cy.request('POST', '/pet', pet);
});

Cypress.Commands.add('deletePet', (petId) => {
    cy.request('DELETE', `/pet/${petId}`);
});