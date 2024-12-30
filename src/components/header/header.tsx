import React, { ReactNode } from 'react';
import './header.scss';

// Define an interface for the component props
export interface HeaderProps {
  children: ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header className="header">{children}</header>;
};

export default Header;
