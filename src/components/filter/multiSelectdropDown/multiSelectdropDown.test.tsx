import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppMultiSelectDropDown, { AppMultiSelectDropDownProps } from './multiSelectdropDown';

// Mock the CheckPicker component from rsuite
jest.mock('rsuite', () => ({
  CheckPicker: (props: any) => (
    <div data-testid="check-picker" {...props}>
      {props.data.map((item: any) => (
        <div key={item.value} onClick={() => props.onChange([item.value], {} as React.SyntheticEvent)}>
          {item.label}
        </div>
      ))}
    </div>
  ),
}));

describe('AppMultiSelectDropDown Component', () => {
  const mockData = [
    { label: 'Bulbasaur', value: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { label: 'Charmander', value: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
  ];

  const renderComponent = (props: Partial<AppMultiSelectDropDownProps> = {}) => {
    const defaultProps: AppMultiSelectDropDownProps = {
      label: 'Select Pokémon',
      onChangeHandler: jest.fn(),
      data: mockData,
      placeholder: 'Choose Pokémon...',
      isOpen: false,
      onCloseHandler: jest.fn(),
      onCleanHandler: jest.fn(),
      onOpenHandler: jest.fn(),
    };
    return render(<AppMultiSelectDropDown {...defaultProps} {...props} />);
  };

  test('renders AppMultiSelectDropDown with correct label and placeholder', () => {
    renderComponent();
    expect(screen.getByText('Select Pokémon')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Choose Pokémon...')).toBeInTheDocument();
  });

  test('handles open and close events', () => {
    const onOpenHandler = jest.fn();
    const onCloseHandler = jest.fn();
    renderComponent({ onOpenHandler, onCloseHandler });

    const checkPickerElement = screen.getByTestId('check-picker');
    fireEvent.click(checkPickerElement);

    expect(onCloseHandler).not.toHaveBeenCalled();
  });

  test('handles selection change', () => {
    const onChangeHandler = jest.fn();
    renderComponent({ onChangeHandler });

    const checkPickerElement = screen.getByTestId('check-picker');
    fireEvent.click(checkPickerElement);

    const optionElement = screen.getByText('Bulbasaur');
    fireEvent.click(optionElement);

    expect(onChangeHandler).toHaveBeenCalledWith(['bulbasaur'], expect.any(Object));
  });

  test('applies open class when isOpen is true', () => {
    renderComponent({ isOpen: true });
    const wrapperElement = screen.getByTestId('check-picker').parentElement;
    expect(wrapperElement).toHaveClass('is-dropdown-open');
  });
});
