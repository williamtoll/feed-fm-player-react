import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

const PlayerComponent = React.lazy(() => import('./Player'))

test('check load app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Feed FM Player/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders Player component', async () => {
  // this is how you test a component that needs a suspense component
  // just render it with your own suspense!
  render(
    <React.Suspense fallback="test loading">
      <PlayerComponent />
    </React.Suspense>,
  )
  const lazyElement = await screen.findByText(/Feed FM Player/i)
  expect(lazyElement).toBeInTheDocument()
})
