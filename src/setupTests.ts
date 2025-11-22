// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'jest-styled-components';

jest.mock('@aws-amplify/api-graphql', () => ({
  GraphQLAPI: {
    graphql: jest.fn(),
  },
}));
jest.mock('@aws-amplify/api', () => ({
  API: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
  },
}));
jest.mock('@aws-amplify/auth', () => ({
  Auth: {
    currentUserCredentials: jest.fn(),
  },
}));
