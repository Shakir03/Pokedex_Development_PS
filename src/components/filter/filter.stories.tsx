import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AppFilter, { AppFilterProps } from './filter';
import PokemonContext from '../../context/pokemonContext/pokmon.context';
import 'rsuite/dist/rsuite.min.css';

// import 'rsuite/dist/styles/rsuite-default.css'; // Ensure rsuite styles are imported

// Mock context provider data
const mockContextValue = {
  state: {
    allPokemonsList: [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
      { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
    ],
    pokemonsTypes: [
      { label: 'Grass', value: 'https://pokeapi.co/api/v2/type/grass/' },
      { label: 'Fire', value: 'https://pokeapi.co/api/v2/type/fire/' },
    ],
    pokemonGenderList: [
      { label: 'Male', value: 'https://pokeapi.co/api/v2/gender/male/' },
      { label: 'Female', value: 'https://pokeapi.co/api/v2/gender/female/' },
    ],
  },
  getPokemonData: () => {},
  dispatch: () => {},
  setAppLoading: () => {},
  getPokemonDetailsListByUrl: () => {
    return Promise.resolve([{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }]);
  },
};

export default {
  title: 'Components/AppFilter',
  component: AppFilter,
  decorators: [
    (Story) => (
      <PokemonContext.Provider value={mockContextValue}>
        <Story />
      </PokemonContext.Provider>
    ),
  ],
  argTypes: {
    isFilterEnable: { action: 'filter enabled' },
  },
} as Meta;

const Template: StoryFn<AppFilterProps> = (args) => <AppFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  isFilterEnable: (enabled: boolean) => console.log('Filter enabled:', enabled),
};
