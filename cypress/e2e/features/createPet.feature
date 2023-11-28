Feature: I want to create new Pet

  Scenario: POST request to create new Pet
    When I send POST request with filled in body
    Then I get 200 after a new pet was successfully created
    Then Delete created pet