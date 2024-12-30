import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AppMultiSelectDropDown, { AppMultiSelectDropDownProps } from './multiSelectdropDown';
import 'rsuite/dist/rsuite.min.css';

// Sample data for demonstration
const sampleData = [
  { label: 'Bulbasaur', value: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  { label: 'Charmander', value: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
  { label: 'Squirtle', value: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
];

export default {
  title: 'Components/AppMultiSelectDropDown',
  component: AppMultiSelectDropDown,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    isOpen: { control: 'boolean' },
    onChangeHandler: { action: 'changed' },
    onCloseHandler: { action: 'closed' },
    onCleanHandler: { action: 'cleaned' },
    onOpenHandler: { action: 'opened' },
  },
} as Meta;

const Template: StoryFn<AppMultiSelectDropDownProps> = (args) => <AppMultiSelectDropDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select Pokémon',
  data: sampleData,
  placeholder: 'Choose Pokémon...',
  isOpen: false,
};
