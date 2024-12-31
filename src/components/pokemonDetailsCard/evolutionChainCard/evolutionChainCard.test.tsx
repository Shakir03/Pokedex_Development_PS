import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EvolutionChainCard from './evolutionChainCard';
import rightArrowIcon from '../../../assets/icons/right-arrow.png';

// Mock the PokemonCard component
jest.mock('../../pokemonCard/pokemonCard', () => (props: any) => <div data-testid="pokemon-card" {...props} />);

describe('EvolutionChainCard Component', () => {
  const mockData = {
    id: 1,
    name: 'Bulbasaur',
    // Add other necessary fields that the PokemonCard component expects
  };

  test('renders EvolutionChainCard with correct number of PokemonCards', () => {
    render(<EvolutionChainCard data={mockData} />);

    // Check if the correct number of PokemonCard components are rendered
    const pokemonCards = screen.getAllByTestId('pokemon-card');
    expect(pokemonCards).toHaveLength(3);

    // Check if the right arrow icons are rendered correctly
    const rightArrowIcons = screen.getAllByRole('presentation', { hidden: true });
    expect(rightArrowIcons).toHaveLength(2); // Since there are 3 cards, there should be 2 arrows
  });

  test('renders right arrow icons between PokemonCards', () => {
    render(<EvolutionChainCard data={mockData} />);

    // Verify the presence of right arrow icons
    const rightArrowIcons = screen.getAllByRole('presentation', { hidden: true });
    expect(rightArrowIcons).toHaveLength(2);
    rightArrowIcons.forEach((icon) => {
      expect(icon).toHaveAttribute('src', rightArrowIcon);
      expect(icon).toHaveAttribute('alt', 'right arrow icon');
    });
  });
});
