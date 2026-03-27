import { render, screen } from '@testing-library/react';
import App from './App';
import { SITE_TEXT } from './config';

test('renders Innocypher brand and hero heading', () => {
  render(<App />);
  expect(screen.getAllByText(SITE_TEXT.brandName).length).toBeGreaterThan(0);
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: new RegExp(SITE_TEXT.hero.heading, 'i'),
    })
  ).toBeInTheDocument();
});
