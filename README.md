# React Native Testing Course

## Overview

Testing is an essential part of the development process. It ensures that your app works as expected and that new features don’t break existing functionality. In this course, you’ll learn how to test your React Native apps with Jest, React Testing Library, and also Maestro for E2E (end-to-end) tests.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Setting Up the Environment](#setting-up-the-environment)
4. [Unit Testing with Jest](#unit-testing-with-jest)
5. [Component Testing with React Testing Library](#component-testing-with-react-testing-library)
6. [End-to-End Testing with Maestro](#end-to-end-testing-with-maestro)
7. [Best Practices](#best-practices)
8. [Conclusion](#conclusion)
9. [Resources](#resources)

## Introduction

This course will guide you through the process of testing your React Native applications, focusing on three main tools:

- **Jest**: A delightful JavaScript testing framework with a focus on simplicity.
- **React Testing Library**: A library for testing React components by mimicking user behavior.
- **Maestro**: A framework for E2E testing that allows you to simulate user interactions and validate the overall app behavior.

## Prerequisites

Before starting this course, you should have a basic understanding of:

- React Native development
- JavaScript/TypeScript
- Node.js and npm/yarn

## Setting Up the Environment

To get started with testing your React Native app, you'll need to set up your development environment with the necessary tools and libraries.

1. **Install Jest**:
   ```bash
   npm install --save-dev jest
   ```

2. **Install React Testing Library**:
   ```bash
   npm install --save-dev @testing-library/react-native
   ```

3. **Install Maestro**:
   Follow the [official Maestro installation guide](https://maestro.mobile.dev/docs/installing).

## Unit Testing with Jest

Jest is a popular testing framework for JavaScript applications. It provides a robust API for writing tests, mocking modules, and more.

### Example Test

Create a `sum.js` file:
```javascript
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

Create a `sum.test.js` file:
```javascript
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Run the test:
```bash
npx jest
```

## Component Testing with React Testing Library

React Testing Library helps you test React components by focusing on user interactions.

### Example Test

Create a `Button.js` component:
```javascript
import React from 'react';
import { Button } from 'react-native';

const MyButton = ({ onPress, title }) => (
  <Button onPress={onPress} title={title} />
);

export default MyButton;
```

Create a `Button.test.js` file:
```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyButton from './Button';

test('calls onPress when button is pressed', () => {
  const onPressMock = jest.fn();
  const { getByText } = render(<MyButton onPress={onPressMock} title="Press me" />);

  fireEvent.press(getByText('Press me'));
  expect(onPressMock).toHaveBeenCalledTimes(1);
});
```

Run the test:
```bash
npx jest
```

## End-to-End Testing with Maestro

Maestro allows you to write E2E tests, ensuring that your app behaves correctly from the user's perspective.

### Example Test

1. **Create a Maestro test file**:
   ```bash
   touch maestro/e2e_test.yaml
   ```

2. **Write a test scenario** in `e2e_test.yaml`:
   ```yaml
   - launchApp
   - tapOn: "Login"
   - inputText: 
       id: "username"
       text: "user@example.com"
   - inputText:
       id: "password"
       text: "password123"
   - tapOn: "Submit"
   ```

3. **Run the test**:
   ```bash
   maestro test maestro/e2e_test.yaml
   ```

## Best Practices

- Write tests for critical parts of your application first.
- Use descriptive names for your test cases.
- Keep your tests isolated; avoid dependencies between tests.
- Mock external services to ensure consistent test results.
- Regularly run your tests to catch issues early.

## Conclusion

By integrating Jest, React Testing Library, and Maestro into your development workflow, you can ensure that your React Native applications are robust, reliable, and user-friendly.

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Maestro Documentation](https://maestro.mobile.dev/docs)

Happy Testing!
