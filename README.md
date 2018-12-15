# Project 4: Feed Reader Testing

# Table of Contents

-   [Description](#description)
-   [Installation](#installation)
-   [Dependencies](#dependencies)
-   [Features](#features)
-   [Contributions](#contributions)
-   [License](#license)

## Description

The goal of this project is to execute a series of tests using Jasmine framework on a web-based application that reads RSS feeds. When the app loads, it displays the feeds along with a Jasmine window containing information about the tests executed. The black items represent "suites" and the green ones "specs". If the application runs successfully it displays 0 failures, otherwise it indicates the number of failures, its origin and cause.

The project follows the guidelines of [Udacity Project Rubric](https://review.udacity.com/#!/rubrics/18/view)

## Installation

-   Either clone the repository locally to your machine or simply download the project as a zip file.
-   Once downloaded, navigate to the directory of the project and load `index.html` in a browser.

## Dependencies

To run the project, the following applications are used:

-   [Project Feed Reader Testing - Starter Code](https://github.com/udacity/frontend-nanodegree-feedreader)
-   [Jasmine](https://jasmine.github.io/)

Test the provided [code](https://github.com/udacity/mws-restaurant-stage-1) for feed reader using Jasmine syntax.

## Tests

The following tests were performed:

-   Tests on RSS Feeds ensures that:
    -	`allFeeds` object is defined and that they are not empty
    -	each feed in `allFeeds` object has a URL defined and that the URL is not empty
    -	each feed in `allFeeds` object has a name defined and that the name is not empty

-   Tests on Menu Element ensures that:
    -	the menu element is hidden by default
    -	the menu changes visibility when the menu icon is clicked
    
-   Tests on asynchronous `loadFeed` function ensures that:
    -   when a feed is loaded there exist at least a single `.entry` element within the `.feed` container, and
    -   when a new feed is loaded the content of the new feed is different from the old feed

## Contributions

I hereby confirm that this submission is my work; there are no other contributors as per Udacity guidelines for this project. Neither did I copied nor pasted any code. I only made use of the React Libraries and the starter code (if any) provided by Udacity.

## License

This project is licensed under the Creative Commons License. Any user is free to:

-   Share - copy and redistribute the material in any medium or format
-   Adapt - remix, transform and build upon the material for any purpose, even commercially.
