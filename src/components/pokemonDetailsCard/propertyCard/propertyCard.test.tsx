import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PropertyCard, { PropertyCardProps } from './propertyCard';
import { render } from '../../../utils/test-utils';

// Mock the getCamleCaseString function
jest.mock('../../../constants/pokemon.types', () => ({
  getCamleCaseString: (str: string) => str.charAt(0).toUpperCase() + str.slice(1),
  getPokcolor: jest.fn(),
}));

describe('PropertyCard Component', () => {
  const mockProps: PropertyCardProps = {
    speciesData: {
      egg_groups: [{ name: 'monster' }, { name: 'dragon' }],
    },
    data: {
      height: 10,
      weight: 200,
      abilities: [{ ability: { name: 'overgrow' } }, { ability: { name: 'chlorophyll' } }],
      types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
    },
    pokemonTypeData: {
      damage_relations: {
        double_damage_from: [{ name: 'fire' }, { name: 'ice' }],
      },
    },
  };

  test('renders PropertyCard with correct data', () => {
    render(<PropertyCard {...mockProps} />);

    // Check if height and weight are rendered correctly
    expect(screen.getByText('Height')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('Weight')).toBeInTheDocument();
    expect(screen.getByText('20 Kg')).toBeInTheDocument();

    // Check if abilities are rendered correctly
    expect(screen.getByText('Abilities')).toBeInTheDocument();
    expect(screen.getByText('Overgrow')).toBeInTheDocument();
    expect(screen.getByText('Chlorophyll')).toBeInTheDocument();

    // Check if types are rendered correctly
    expect(screen.getByText('Types')).toBeInTheDocument();
    expect(screen.getByText('Grass')).toBeInTheDocument();
    expect(screen.getByText('Poison')).toBeInTheDocument();

    // Check if egg groups are rendered correctly
    expect(screen.getByText('Egg Groups')).toBeInTheDocument();
    expect(screen.getByText('Monster')).toBeInTheDocument();
    expect(screen.getByText('Dragon')).toBeInTheDocument();

    // Check if weak against types are rendered correctly
    expect(screen.getByText('Weak Against')).toBeInTheDocument();
    expect(screen.getByText('Fire')).toBeInTheDocument();
    expect(screen.getByText('Ice')).toBeInTheDocument();
  });
});
