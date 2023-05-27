import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders form and handles input and submit', () => {
  render(<App />);

  // Check if the form fields and submit button exist
  expect(screen.getByLabelText(/Currency Code:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Amount:/i)).toBeInTheDocument();
  expect(screen.getByText(/Get Exchange Rate/i)).toBeInTheDocument();
});

