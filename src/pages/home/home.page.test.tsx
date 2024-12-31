import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './home.page';
import PokemonContext from '../../context/pokemonContext/pokmon.context';

// Mock components
jest.mock('../../components/header/header', () => (props: any) => <div data-testid="header" {...props} />);
jest.mock('../../components/pokemonCard/pokemonCard', () => (props: any) => <div data-testid="pokemon-card" {...props} />);
jest.mock('../../components/loader/loader', () => (props: any) => <div data-testid="loader" {...props} />);
jest.mock('../../components/filter/filter', () => (props: any) => <div data-testid="filter" {...props} />);
jest.mock('../details/details.page', () => (props: any) => <div data-testid="detail-page" {...props} />);

describe('HomePage Component', () => {
  const mockContextValue = {
    state: {
      pokemonsList: [{ id: 1, name: 'Bulbasaur' }],
      isLoading: false,
      isLoadMoreInprogress: false,
    },
    getPokemonData: jest.fn(),
  };

  const renderComponent = () => {
    return render(
      <PokemonContext.Provider value={mockContextValue}>
        <HomePage />
      </PokemonContext.Provider>
    );
  };

  test('renders HomePage with header and filter components', () => {
    renderComponent();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('filter')).toBeInTheDocument();
  });

  test('renders PokemonCard components when pokemonsList is not empty', () => {
    renderComponent();
    expect(screen.getByTestId('pokemon-card')).toBeInTheDocument();
  });

  test('shows loader when isLoading is true', () => {
    mockContextValue.state.isLoading = true;
    renderComponent();
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('handles Load More button click', () => {
    renderComponent();
    const loadMoreButton = screen.getByText('Load more');
    fireEvent.click(loadMoreButton);
    expect(mockContextValue.getPokemonData).toHaveBeenCalled();
  });

  test('renders DetailPage when a card is selected', () => {
    renderComponent();
    const pokemonCard = screen.getByTestId('pokemon-card');
    fireEvent.click(pokemonCard);
    expect(screen.getByTestId('detail-page')).toBeInTheDocument();
  });

  test('displays no data message when pokemonsList is empty', () => {
    mockContextValue.state.pokemonsList = [];
    renderComponent();
    expect(screen.getByText('No data found')).toBeInTheDocument();
  });
});
