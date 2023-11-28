import {PET} from '../../testData';
import {When, Then, Given} from "@badeball/cypress-cucumber-preprocessor";

Given("Created new Pet", () => {
    cy.createPet(PET);
});

When("I send GET request with with existing ID of a pet", () => {
    cy.request('GET', `/pet/${PET.id}`).then((response) => {
        cy.wrap(response).as('getResponse');
    });
});

Then("I get 200 response code", () => {
    cy.get('@getResponse').should((response) => {
        expect(response.status).to.equal(200);
    })
});

Then("Verify that name of created Pet is same for retrieved", () => {
    cy.get('@getResponse').should((response) => {
        expect(response.body.name).to.equal(PET.name);
    })
});

Then("Delete a pet", () => {
    cy.deletePet(PET.id);
});