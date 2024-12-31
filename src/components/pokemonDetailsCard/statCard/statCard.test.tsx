import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatCard, { StatCardProps } from './statCard';

// Mock the getCamleCaseString function
jest.mock('../../../constants/pokemon.types', () => ({
  getCamleCaseString: (str: string) => str.charAt(0).toUpperCase() + str.slice(1),
}));

describe('StatCard Component', () => {
  const mockStats: StatCardProps['stats'] = [
    {
      base_stat: 45,
      effort: 0,
      stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
    },
    {
      base_stat: 60,
      effort: 1,
      stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
    },
    {
      base_stat: 50,
      effort: 0,
      stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
    },
  ];

  test('renders StatCard with correct headings and stats', () => {
    const { container } = render(<StatCard stats={mockStats} />);

    // Check if the main header is present
    expect(screen.getByText('Stats')).toBeInTheDocument();

    // Check if each stat heading and value is rendered correctly
    expect(screen.getByText('HP')).toBeInTheDocument();
    const statElements = container.querySelectorAll('.stat-data');
    expect(statElements).toHaveLength(mockStats.length);

    expect(screen.getByText('Attack')).toBeInTheDocument();

    expect(screen.getByText('Sp. Defense')).toBeInTheDocument();

    // Check if progress elements are rendered
    const progressElements = screen.getAllByRole('progressbar');
    expect(progressElements).toHaveLength(3);
  });

  test('renders progress bars with correct values', () => {
    render(<StatCard stats={mockStats} />);

    const progressElements = screen.getAllByRole('progressbar');
    expect(progressElements[0]).toHaveAttribute('value', '45');
    expect(progressElements[1]).toHaveAttribute('value', '60');
    expect(progressElements[2]).toHaveAttribute('value', '50');
  });
});
