import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

test('check load app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Feed FM Player/i);
  expect(linkElement).toBeInTheDocument();
});

test('check player button', async () => {
  render(<App />);
  // Click button
  fireEvent.click(screen.getByText('Play'))
  // Wait for page to update with query text
  const items = await screen.findAllByText(/Tune In!/i)
  expect(items).toHaveLength(10)

});


