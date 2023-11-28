import {PET} from '../../testData';
import {When, Then} from "@badeball/cypress-cucumber-preprocessor";

When("I send POST request with filled in body", () => {
    cy.request('POST', '/pet', PET).then((response) => {
        cy.wrap(response).as('postResponse');
    });
});

Then("I get 200 after a new pet was successfully created", () => {
    cy.get('@postResponse').should((response) => {
        expect(response.status).to.equal(200);
    })
});

Then("Delete created pet", () => {
    cy.deletePet(PET.id);
});