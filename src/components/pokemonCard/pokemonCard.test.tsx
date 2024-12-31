import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonCard, { PokemonCardProps } from './pokemonCard';

// Mock the getBackground and numberFormation functions
jest.mock('../../constants/pokemon.types', () => ({
  getBackground: (types: any) => {
    const typeColors: { [key: string]: string } = {
      grass: '#78C850',
      fire: '#F08030',
      water: '#6890F0',
    };
    return typeColors[types[0]] || '#A8A878'; // Default color
  },
}));

jest.mock('../../services/common.service', () => ({
  numberFormation: (id: number) => `#${id.toString().padStart(3, '0')}`,
}));

describe('PokemonCard Component', () => {
  const mockData = {
    id: 1,
    name: 'Bulbasaur',
    types: ['grass'],
    sprites: {
      other: {
        dream_world: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        },
      },
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
  };

  const renderComponent = (props: Partial<PokemonCardProps> = {}) => {
    const defaultProps: PokemonCardProps = {
      data: mockData,
      className: 'custom-card',
      onClick: jest.fn(),
    };
    return render(<PokemonCard {...defaultProps} {...props} />);
  };

  test('renders PokemonCard with correct data', () => {
    renderComponent();
    const cardElement = screen.getByRole('presentation');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass('custom-card card');

    const imgElement = screen.getByAltText('Avatar');
    expect(imgElement).toHaveAttribute('src', mockData.sprites.other.dream_world.front_default);

    const nameElement = screen.getByText('Bulbasaur');
    expect(nameElement).toBeInTheDocument();

    const idElement = screen.getByText('#001');
    expect(idElement).toBeInTheDocument();
  });

  test('applies correct background color based on type', () => {
    renderComponent();
    const cardElement = screen.getByRole('presentation');
    expect(cardElement).toHaveStyle('background: #78C850');
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    renderComponent({ onClick: handleClick });

    const cardElement = screen.getByRole('presentation');
    fireEvent.click(cardElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('uses placeholder image if no sprite is available', () => {
    const dataWithoutSprite = {
      ...mockData,
      sprites: { other: { dream_world: { front_default: '' } }, front_default: '' },
    };
    renderComponent({ data: dataWithoutSprite });

    const imgElement = screen.getByAltText('Avatar');
    expect(imgElement).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });
});
