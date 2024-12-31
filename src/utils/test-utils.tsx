import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { PokemonProvider } from '../context/pokemonContext/pokemon.provider';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Suspense } from 'react';

const AllProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </BrowserRouter>
    </PokemonProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
