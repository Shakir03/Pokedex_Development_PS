import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders Pokedex', async () => {
  render(<App />);
  await new Promise((resolve) => setTimeout(resolve, 3000)); //3 sec delay
  await waitFor(() => {
    const pokedex = screen.getByText(/Pokédex/i);
    expect(pokedex).toBeInTheDocument();
  });
});
