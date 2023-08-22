
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('shows not valid message on empty input', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const inputElement = getByPlaceholderText('Enter your string...');
    fireEvent.change(inputElement, { target: { value: '' } });
    expect(getByText('String is not valid.')).toBeInTheDocument();
  });

  test('shows valid message for valid string', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const inputElement = getByPlaceholderText('Enter your string...');
    fireEvent.change(inputElement, { target: { value: 'Aa1!' } });
    expect(getByText('String is valid.')).toBeInTheDocument();
  });
});
