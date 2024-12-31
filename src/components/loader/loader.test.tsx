import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Apploader, { ApploaderProps } from './loader';

// Mock the Loader component from rsuite
jest.mock('rsuite', () => ({
  Loader: (props: any) => <div data-testid="loader" {...props} />,
}));

describe('Apploader Component', () => {
  const renderComponent = (props: Partial<ApploaderProps> = {}) => {
    const defaultProps: ApploaderProps = {
      className: 'custom-loader',
    };
    return render(<Apploader {...defaultProps} {...props} />);
  };

  test('renders Apploader with default class name', () => {
    renderComponent();
    const loaderElement = screen.getByTestId('loader').parentElement;
    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toHaveClass('custom-loader');
  });

  test('renders Loader with correct size and content', () => {
    renderComponent();
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toHaveAttribute('content', 'Loading...');
  });

  test('applies additional class names', () => {
    renderComponent({ className: 'additional-class' });
    const loaderElement = screen.getByTestId('loader').parentElement;
    expect(loaderElement).toHaveClass('additional-class');
  });
});
