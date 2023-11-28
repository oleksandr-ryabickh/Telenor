import {PET} from '../../testData';
import {When, Then, Given} from "@badeball/cypress-cucumber-preprocessor";
import {generateRandomNumber} from '../util';

Given("Created Pet", () => {
    cy.createPet(PET);
});

When("I send DELETE request with existing ID of a pet", () => {
    cy.request('DELETE', `/pet/${PET.id}`).then((response) => {
        cy.wrap(response).as('deleteResponse');
    });
});

Then("I get 200 after a new pet was successfully deleted", () => {
    cy.get('@deleteResponse').should((response) => {
        expect(response.status).to.equal(200);
    })
});

When("I send DELETE request with not existing ID of a pet", () => {
    cy.request({
        method: 'DELETE',
        url: `/pet/${generateRandomNumber()}`,
        failOnStatusCode: false,
    }).then((response) => {
        cy.wrap(response).as('deleteResponse');
    });
});

Then("I get 404 after execution", () => {
    cy.get('@deleteResponse').should((response) => {
        expect(response.status).to.equal(404);
    })
});