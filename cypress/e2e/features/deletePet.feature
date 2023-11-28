Feature: I want to delete a Pet

  Background:
    Given Created Pet

  Scenario: Successful DELETE request to delete a Pet
    When I send DELETE request with existing ID of a pet
    Then I get 200 after a new pet was successfully deleted

  Scenario: Unsuccessful DELETE request to delete a Pet
    When I send DELETE request with not existing ID of a pet
    Then I get 404 after execution