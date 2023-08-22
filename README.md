# UC10

## Project Overview

The React RegExp Validator is a `create-react-app` project designed to validate input strings based on a specific set of criteria using regular expressions. The aim is to ensure that strings adhere to certain rules for security or data integrity purposes.

## Regular Expression Criteria

1. **String Length**: Validates a maximum string length of 10 characters.
2. **Character Types**:
    - At least one uppercase letter.
    - At least one lowercase letter.
    - At least one digit.
    - At least one special character from the list: `!"#$%&'()*+,-./:

;<=>?@[\]^_`{|}~`
3. **No Whitespace**: Validates that the string does not contain any whitespace characters (spaces, tabs, or newlines).
4. **Optimization**: The regex should be optimized for execution speed and simplicity while still fulfilling all the aforementioned criteria.

## Implementation

- The regular expression is implemented as a utility function, making it reusable for various input validation scenarios.
- The React UI features a text input field, and upon entry or change, it runs the validation against the input value.
- The UI will provide visual feedback (success or error) based on the validation result.

## Testing

The regular expression is tested on a variety of sample inputs and edge cases to ensure it functions properly.

## Caveats & Limitations

- This regex is tailored to the requirements as specified. If the criteria change, modifications will be needed.
- While optimized, very long strings might still introduce a performance overhead when being checked.
- The predefined list of special characters might not cater to all possible use cases. Adjust as necessary.

## UI

The React application provides an intuitive interface for users to input their string. Real-time feedback is provided on whether the string meets the criteria or not. A clear error message highlights which criteria is not being met, enhancing user experience.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
