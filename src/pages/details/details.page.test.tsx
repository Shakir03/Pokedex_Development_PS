import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DetailPage from './details.page';

// Mock services
jest.mock('../../services/common.service', () => ({
  getPokemonDataById: jest.fn().mockResolvedValue({ id: 1, name: 'Bulbasaur', stats: [] }),
  getPokemonTypesById: jest.fn(() => Promise.resolve({})),
  getSpeciesDataById: jest.fn(() => Promise.resolve({})),
}));

// Mock components
jest.mock('../../components/pokemonDetailsCard/detailsHeader/detailsHeader', () => (props: any) => <div data-testid="details-header" {...props} />);
jest.mock('../../components/pokemonDetailsCard/propertyCard/propertyCard', () => (props: any) => <div data-testid="property-card" {...props} />);
jest.mock('../../components/pokemonDetailsCard/statCard/statCard', () => (props: any) => <div data-testid="stat-card" {...props} />);
jest.mock('../../components/pokemonDetailsCard/evolutionChainCard/evolutionChainCard', () => (props: any) => <div data-testid="evolution-chain-card" {...props} />);

describe('DetailPage Component', () => {
  const defaultProps = {
    isCardSelected: true,
    toggleModal: jest.fn(),
    pokemonId: 1,
    offset: 10,
  };

  const renderComponent = (props = {}) => {
    return render(<DetailPage {...defaultProps} {...props} />);
  };

  test('renders DetailPage with loader initially', async () => {
    renderComponent();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
