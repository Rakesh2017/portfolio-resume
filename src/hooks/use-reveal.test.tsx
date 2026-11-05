import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import useReveal from './use-reveal';

function Example() { useReveal(); return <div className="about-grid"><button>Reach content</button></div>; }
afterEach(() => { cleanup(); jest.restoreAllMocks(); });

test('reduced motion leaves all content visible', () => {
  Object.defineProperty(window, 'matchMedia', { writable: true, value: () => ({ matches: true, addEventListener: jest.fn(), removeEventListener: jest.fn() }) });
  const observe = jest.fn();
  Object.defineProperty(window, 'IntersectionObserver', { writable: true, value: jest.fn(() => ({ observe, disconnect: jest.fn(), unobserve: jest.fn() })) });
  const { container } = render(<Example />);
  expect(container.querySelector('.reveal-pending')).toBeNull();
  expect(observe).not.toHaveBeenCalled();
});

test('keyboard focus reveals offscreen content and cleanup disconnects observers', () => {
  Object.defineProperty(window, 'matchMedia', { writable: true, value: () => ({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() }) });
  const disconnect = jest.fn();
  Object.defineProperty(window, 'IntersectionObserver', { writable: true, value: jest.fn(() => ({ observe: jest.fn(), disconnect, unobserve: jest.fn() })) });
  jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({ top: 2000, bottom: 2100, left: 0, right: 100, width: 100, height: 100, x: 0, y: 2000, toJSON: () => ({}) });
  const { container, getByText, unmount } = render(<Example />);
  expect(container.querySelector('.reveal-pending')).not.toBeNull();
  fireEvent.focusIn(getByText('Reach content'));
  expect(container.querySelector('.reveal-pending')).toBeNull();
  unmount();
  expect(disconnect).toHaveBeenCalled();
});
