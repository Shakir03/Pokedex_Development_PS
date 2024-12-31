import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchFilter, { SearchFilterProps } from './search.filter';

// Mock the SearchIcon component
jest.mock('@rsuite/icons/Search', () => () => <div data-testid="search-icon" />);

describe('SearchFilter Component', () => {
  const renderComponent = (props: Partial<SearchFilterProps> = {}) => {
    const defaultProps: SearchFilterProps = {
      placeholder: 'Search...',
      inputClass: 'custom-input-class',
      onChangeHandler: jest.fn(),
      label: 'Search',
    };
    return render(<SearchFilter {...defaultProps} {...props} />);
  };

  test('renders SearchFilter with correct placeholder and label', () => {
    renderComponent();
    const inputElement = screen.getByPlaceholderText('Search...');
    expect(inputElement).toBeInTheDocument();

    const labelElement = screen.getByText('Search');
    expect(labelElement).toBeInTheDocument();
  });

  test('applies custom input class', () => {
    renderComponent();
    const inputElement = screen.getByPlaceholderText('Search...');
    expect(inputElement).toHaveClass('custom-input-class');
  });

  test('handles input change events', () => {
    const handleChange = jest.fn();
    renderComponent({ onChangeHandler: handleChange });

    const inputElement = screen.getByPlaceholderText('Search...');
    fireEvent.change(inputElement, { target: { value: 'Pikachu' } });

    expect(handleChange).toHaveBeenCalledWith('Pikachu', expect.any(Object));
  });

  test('renders search icon', () => {
    renderComponent();
    const iconElement = screen.getByTestId('search-icon');
    expect(iconElement).toBeInTheDocument();
  });
});
