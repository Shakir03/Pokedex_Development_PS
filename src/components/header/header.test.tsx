import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header, { HeaderProps } from './header';

describe('Header Component', () => {
  const renderComponent = (props: Partial<HeaderProps> = {}) => {
    const defaultProps: HeaderProps = {
      children: 'Header Content',
      className: 'custom-header',
    };
    return render(<Header {...defaultProps} {...props} />);
  };

  test('renders Header with correct children', () => {
    renderComponent();
    const headerElement = screen.getByText('Header Content');
    expect(headerElement).toBeInTheDocument();
  });

  test('applies default class name', () => {
    renderComponent();
    const headerElement = screen.getByText('Header Content');
    expect(headerElement).toHaveClass('header');
  });
});
