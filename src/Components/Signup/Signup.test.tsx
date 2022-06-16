import { render, screen } from '@testing-library/react';
import React from 'react';
import Signup from './Signup';
test('renders from Signup form', () => {
  render(<Signup/>);
  const headElement = screen.getByText(/Register/i);
  expect(headElement).toBeInTheDocument();
});
test('renders check navigate', () => {

});