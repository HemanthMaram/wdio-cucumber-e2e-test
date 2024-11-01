Feature: Learn wdio

    Feature Description

    @demo
    Scenario Outline: Launch and run demo feature and perform assertion
        Given Lauch the Google webpage
        When enter the <keyWord>
        Then click on search button
        # Then Url should match <expectedURL>

        Examples:
            | keyWord | expectedURL           |
            | WDIO    | https://webdriver.io/ |

