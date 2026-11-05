import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ThemeToggle from './components/theme-toggle';
import SideBar from './components/side-bar';

beforeEach(() => {
  localStorage.clear();
  Object.defineProperty(window, 'matchMedia', { writable: true, value: jest.fn().mockImplementation(() => ({ matches: false, addEventListener: jest.fn(), removeEventListener: jest.fn() })) });
});
afterEach(cleanup);

test('theme changes update the document and survive remounting', () => {
  const first = render(<ThemeToggle />);
  fireEvent.click(first.getByLabelText('Switch to dark mode'));
  expect(document.documentElement.dataset.theme).toBe('dark');
  expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  first.unmount();
  const second = render(<ThemeToggle />);
  fireEvent.click(second.getByLabelText('Switch to light mode'));
  expect(document.documentElement.dataset.theme).toBe('light');
});

test('defaults to the system theme without a saved preference', () => {
  (window.matchMedia as jest.Mock).mockReturnValue({ matches: true, addEventListener: jest.fn(), removeEventListener: jest.fn() });
  render(<ThemeToggle />);
  expect(document.documentElement.dataset.theme).toBe('dark');
});

test('mobile menu closes after choosing a section', () => {
  const { getByText } = render(<SideBar />);
  fireEvent.click(getByText('Menu'));
  expect(getByText('Close')).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(getByText('Work'));
  expect(getByText('Menu')).toHaveAttribute('aria-expanded', 'false');
});
