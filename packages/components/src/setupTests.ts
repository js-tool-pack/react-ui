// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// learn more: https://create-react-app.dev/docs/running-tests
import '@testing-library/jest-dom';

// 模拟 ResizeObserver，ResizeObserver 不存在于 jsdom 中
const MockObserverInstance: ResizeObserver = {
  disconnect: jest.fn(),
  unobserve: jest.fn(),
  observe: jest.fn(),
};
beforeEach(() => {
  global.ResizeObserver = jest
    .fn()
    .mockImplementation(() => MockObserverInstance);
});
