/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
        createPet(pet): Chainable<null>;

        deletePet(petId): Chainable<null>;
    }
}