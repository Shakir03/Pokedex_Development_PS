import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColorfulTag, { ColorfulTagProps } from './colorfulTag';

// Mock the getPokcolor function
jest.mock('../../../constants/pokemon.types', () => ({
  getPokcolor: (type: string) => {
    const colors: { [key: string]: string } = {
      fire: '#F08030',
      water: '#6890F0',
      grass: '#78C850',
    };
    return colors[type] || '#A8A878'; // Default color
  },
}));

describe('ColorfulTag Component', () => {
  const renderComponent = (props: Partial<ColorfulTagProps> = {}) => {
    const defaultProps: ColorfulTagProps = {
      text: 'Sample Text',
      className: 'custom-class',
      type: 'fire',
    };
    return render(<ColorfulTag {...defaultProps} {...props} />);
  };

  test('renders ColorfulTag with correct text', () => {
    renderComponent();
    const tagElement = screen.getByText('Sample Text');
    expect(tagElement).toBeInTheDocument();
  });

  test('applies correct background color based on type', () => {
    renderComponent({ type: 'water' });
    const tagElement = screen.getByText('Sample Text');
    expect(tagElement).toHaveStyle('background: #6890F0');
  });

  test('applies custom class name', () => {
    renderComponent();
    const containerElement = screen.getByText('Sample Text').parentElement;
    expect(containerElement).toHaveClass('custom-class');
  });

  test('uses default color for unknown type', () => {
    renderComponent({ type: 'unknown' });
    const tagElement = screen.getByText('Sample Text');
    expect(tagElement).toHaveStyle('background: #A8A878');
  });
});
