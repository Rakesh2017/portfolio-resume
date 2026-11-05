import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MobileStudio from './mobile-studio';

test('completes and resets the sample task and announces progress', () => {
  const { getByLabelText, getByRole } = render(<MobileStudio />);
  expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '2');
  fireEvent.click(getByLabelText('Complete Make something meaningful'));
  expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '3');
  expect(getByRole('status')).toHaveTextContent('A little win');
  fireEvent.click(getByLabelText('Mark Make something meaningful incomplete'));
  expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '2');
});

test('changing platform updates the preview and resets its interaction', () => {
  const { getByLabelText, getByText, getByRole } = render(<MobileStudio />);
  fireEvent.click(getByLabelText('Complete Make something meaningful'));
  fireEvent.click(getByText('Flutter'));
  expect(getByText('Flutter')).toHaveAttribute('aria-pressed', 'true');
  expect(getByText('Android')).toHaveAttribute('aria-pressed', 'false');
  expect(getByLabelText('Flutter inspired app preview')).toBeInTheDocument();
  expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '2');
});
