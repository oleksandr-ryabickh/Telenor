Feature: I want to get info about Pet

  Background:
    Given Created new Pet

  Scenario: GET request to get info about Pet
    When I send GET request with with existing ID of a pet
    Then I get 200 response code
    Then Verify that name of created Pet is same for retrieved
    Then Delete a pet