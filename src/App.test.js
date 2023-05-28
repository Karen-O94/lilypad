import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders full page', () => {
  render(<App />);
  //Tests whether lilypad heading is rendered on the screen
  const headingElement = screen.getByText(/Where would you like to go?/i);
  expect(headingElement).toBeInTheDocument();
});
