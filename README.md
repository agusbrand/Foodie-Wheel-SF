# Foodie Wheel SF

Spin a wheel to discover a random Food Truck in San Francisco! 🌉
Check out what they're offering, find their active locations, and get directions.
Don’t like it? Just spin the wheel again!

**Table of Contents**

- [Foodie Wheel SF](#foodie-wheel-sf)
  - [Project Description](#project-description)
  - [Tech Stack](#tech-stack)
  - [How To Run](#how-to-run)
  - [Project Structure](#project-structure)
  - [Features](#features)
  - [Future Improvements](#future-improvements)

## Project Description

Foodie Wheel SF is a web application that uses the latest [San Francisco Data API](https://dev.socrata.com/foundry/data.sfgov.org/rqzj-sfat) to get the list of active Food Trucks in San Francisco.

The app is mobile-friendly, with a responsive design and a modern look and feel.

**🚀 Deployed to Vercel: [Foodie Wheel SF](https://agustin-brandoni-food-truck-roulette.vercel.app/)**

## Tech Stack

- NextJS 14
- React 18
- Material UI 5
- Cypress 13
- TypeScript 5

## How To Run

- Ensure you have NodeJS v16.8.0 or newer installed.
- Clone the repository.
- Run `npm install`

**Development Mode**

1. Run `npm dev`
2. Access the app at `http://localhost:3000`

**Production Mode**

1. Run `npm build`
2. Run `npm start`
3. Access the app at `http://localhost:3000`

**Linting and Tests**

- Run `npm lint`
- Run `npm cypress:open` to open the Cypress test runner.
- Run `npm cypress:run` to execute Cypress tests in the terminal.

## Project Structure

- `public`: Static Assets
- `src/app`: Application routes (NextJS Pages)
- `src/components`: Shared React Components
- `src/context`: Shared React Context
- `src/services`: Service modules
- `src/styles`: Material UI theme configuration
- `src/tests/e2e`: End-to-End tests using Cypress
- `src/types`: Shared TypeScript types
- `src/utils`: Utility functions

## Features

- **Enhanced for Performance:**
  - Taken advantage of NextJS client and server components: The Food Truck API request is handled server-side, and cached. The list of food trucks (the table) is rendered as a server component as well. This helps reducing the amount of javascript needed on the client and speeds-up load times. The Roulette is a client only component.
  - The roulette library is heavy, that's why it was Lazy Loaded to the enhance user experience.
  - Reduced unnecessary operations by using the Socrata filter API to get only the active food trucks and data needed.
- **Fully Responsive:** Built with Material UI for a great experience across all devices. It comes with responsive font sizes, grid system, containers, CSS in JS, color palette, among other features.
- **Modern Tech Stack:** Chose Next.js, React, and Material UI for their robust ecosystem, flexibility, and community support. It's using the React Hook Context API to share state across components. Compared to other state management libraries such as Redux, React Context was chosen due to its simplicity since it's already built into react and the narrow scope of the app.
- **Type Checking with Typescript:** Using TypeScript for better code quality and maintainability as it helps it detect issues at development time.
- **Linting and Formating:** Enforced with ESLint and Prettier to enhance code quality and follow industry standards.
- **Accessibility:** Implemented ARIA attributes and semantic HTML to help with accessibility.
- **Reusable React Components:** Components under `/components` can be easily reused.
- **End To End tested:** The main use case (Spinning the wheel) was tested with Cypress.

## Future Improvements

With more time, we could:

- **Add Error Monitoring and Logging:** Implement tools for better error tracking and logging, for example, to log errors when request the open dataset, we could use tools such as Sentry or Grafana.
- **Refactor Large React Components:** Break down large components, such as `Roulette.tsx`, we could move its logic to a custom hook so that we can separate component behavior from code that is related to the view only.
- **Enhace Automated testing:** Add unit tests. Test the service that makes the Open Dataset request (`foodTruckService.tsx`). Test shared React components, and the ones with more interactivity, for example, the Wheel and components under the `/components` folder. We could use Jest, and React Testing Library.
- **Add a Food Truck Filter:** Add an ability to filter the initial list of food trucks by food type. We can have one select component for food that we want to include and another for food we want to exclude. Since the food comes as unstructured text data, we should consider using tokenization to split the food string into an array of strings, and consider using techniques such as Fuzzy Search or NLP to match with food types.
- **Add CI/CD Deployment Pipeline:** Set up a continuous integration and deployment pipeline with GitHub Actions or Vercel to automate the deployment process.
- **Enhance Security:** Regularly audit dependencies (Dependabot), use HTTPS, add CORS headers appropriately, and add a Content Security Policy. If the app needs to be used by authenticated users, we should consider adding authentication/authorization mechanisms such as Oauth and JWT tokens.
