import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DetailsHeader, { DetailsHeaderProps } from './detailsHeader';

// Mock the PokemonCard and AppTooltip components
jest.mock('../../pokemonCard/pokemonCard', () => (props: any) => <div data-testid="pokemon-card" {...props} />);
jest.mock('../../../hooks/tooltip/tooltip', () => (props: any) => <div data-testid="app-tooltip" {...props} />);

// Mock the numberFormation and getPokemonDescription functions
jest.mock('../../../services/common.service', () => ({
  numberFormation: (id: number) => `#${id.toString().padStart(3, '0')}`,
}));

jest.mock('../../../constants/pokemon.types', () => ({
  getPokemonDescription: (entries: any[]) => entries.map((entry) => entry.flavor_text).join(' '),
}));

describe('DetailsHeader Component', () => {
  const mockData = {
    id: 1,
    name: 'Bulbasaur',
  };

  const mockSpeciesData = {
    flavor_text_entries: [{ flavor_text: 'A strange seed was planted on its back at birth.' }, { flavor_text: 'The plant sprouts and grows with this Pokémon.' }],
  };

  const mockHandlers = {
    backClick: jest.fn(),
    closeClick: jest.fn(),
    forwordClick: jest.fn(),
  };

  test('renders DetailsHeader with correct data', () => {
    render(<DetailsHeader data={mockData} speciesData={mockSpeciesData} {...mockHandlers} />);

    // Check if PokemonCard is rendered
    expect(screen.getByTestId('pokemon-card')).toBeInTheDocument();

    // Check if the name and formatted ID are rendered correctly
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('#001')).toBeInTheDocument();

    // Check if the description is rendered correctly
    expect(screen.getByText(/A strange seed was planted on its back at birth./)).toBeInTheDocument();
  });

  test('handles icon click events', () => {
    render(<DetailsHeader data={mockData} speciesData={mockSpeciesData} {...mockHandlers} />);

    // Simulate click events on icons
    fireEvent.click(screen.getByAltText('back icon to go backward'));
    fireEvent.click(screen.getByAltText('close icon to go backward'));
    fireEvent.click(screen.getByAltText('forward icon to go backward'));

    // Verify that the click handlers are called
    expect(mockHandlers.backClick).toHaveBeenCalledTimes(1);
    expect(mockHandlers.closeClick).toHaveBeenCalledTimes(1);
    expect(mockHandlers.forwordClick).toHaveBeenCalledTimes(1);
  });
});
