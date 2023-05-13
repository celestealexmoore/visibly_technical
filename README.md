# Visibly Vision Test Exercise

This is a pretty standard [Create React App](https://github.com/facebook/create-react-app) project, with React Router already installed.

The main goal of this exercise is to add on to a simulated web-based vision test user experience. Keep in mind that we want to approach this in a somewhat realistic manner, so code quality is important!

Also, it's totally fine to look up documentation or other resources, just keep us informed about what you're trying to accomplish.

## Here's what we want to do

We want to implement a simple web-based vision test experience that an end-user can complete. It will work sort of like an eye chart, like [this one](https://upload.wikimedia.org/wikipedia/commons/b/bb/ETDRS_Chart_R.svg) for example, where a user looks at characters on the screen and enters what they see.

## Here's what's already present

There are a couples routes available:

- A home page at `/` that serves as a starting point.
- A page at `/vision_test` that serves the actual end-user experience and is the main focus.

## These are the features we want to add in user story format

### As a user, I want to see a randomized optotype character in the center of the vision test page.

The vision test experience will involve showing one "optotype" character at a time at a constant size. The optotype should be picked randomly. There are five possible optotypes: H, V, Z, D, and S. The optotype should appear centered on the screen to leave as much empty space around it as possible.

### As a user, I want to be able to select which optotype that I see by clicking the corresponding button on the vision test page.

The user needs to be able to select which optotype they think they see on the screen. They will do this by clicking the corresponding button for that optotype. As such, a button for each of the possible optotypes needs to be rendered on the screen. The buttons should be placed along one edge of the screen so that they interfere as little as possible with the user's view of the optotype.

### As a user, I want to be able to complete a vision test by making the full set of selections on the vision test page.

The user should be required to make selections for ten randomized optotypes. After the full set of selections is made the test is completed and the final result can be calculated. Their final result should be the number of selections that were correct, meaning the button corresponding to the optotype rendered on the screen at the time was clicked. Once the vision test is completed, the result should be displayed for the user.