# Sound Item List

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Task
The goal of this assessment is to get an indication of your skill and knowledge, and to provide a discussion topic for the next interview round.

The expected deliverables for this assessment are:

- A ZIP file containing your code
- A readme file with instructions on how to run the project. Make sure you also specify the right node version to use.

We expect this assessment to not take more than 3 hours of your time. If the task could not be completed within this timeframe this is not an issue. Please state so in the Readme so we can take this into account.

## The assignment
For this assignment you’re expected to create an interactive item selector with folder structure. Below is a screenshot that illustrates the deliverable. Further down below you will find a Figma design link with the exact design details.

![img.png](img.png)

## Requirements
The requirements are as follows:
- The project is written in Typescript and uses proper types everywhere
- The program is modeled like you would in a large-scale application
- The project follows the design
- The “response.json” file contains the back-end data. Retrieve the data as you would do with an external API according to Angular best practices.
  - Do not directly import it using Javascript imports
- The folders from the response are used to render a list. The folders contain a “parent” field which defines the three-dimensional structure
- Folders and item rows should be sorted alphabetically
- Every row has a hover state
- A folder row should have a toggle button to show and hide its children
- An item row should have a checkbox to toggle between the selected state
  - Selecting some of the items in a folder row should show the indeterminate state on all parent folder rows
    - This can be seen in the Speakers and Audio folders in the Figma file
  - Select all items in a folder row should show the selected state on the direct parent folder
    - This can be seen in the Truss and Rigging folders in the Figma file
- Clicking on a folder row should select toggle all items inside of it
  - If the folder row was in the selected state all items should be deselected
  - If the folder row was unselected, or in the indeterminate, state all items should be selected
- The selected item IDs are outputted on the screen
  - No styling needed for this list
- A “Clear selection” button is present which clears the selection
  - Should be outside of the selector component 

On a day-to-day basis you will use Angular. Using this framework is not a requirement, but it is preferred. If you feel you can show your skills better using a different framework this is allowed.

## Designs
Note: For the checkboxes the systems’ default checkboxes are allowed.

[Figma design link](https://www.figma.com/file/pPvMOOEOgmioZ7ilJVQrZq/Front-end-Assessment?type=design&node-id=0%3A1&t=lEB2Uy4Bo75NbGbN-1)

## Data
This is the response.json file:

[response.json](response.json)
