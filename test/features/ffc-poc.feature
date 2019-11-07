Feature: Demo app end-to-end example

    As a householder with a house that has fallen into a mine
    I want to start a claim
    So that I can be compensated 

    Scenario: House falls into gold mine

        Given I am on the start page
        When I start a new claim
        When I select home as the property type
        When I save and continue
        When I confirm the property is still accessible
        When I enter 01 01 1970 as the subsidence start date
        When I select gold mine
        When I enter my email address
        Then I am told the service is unavailable


        


