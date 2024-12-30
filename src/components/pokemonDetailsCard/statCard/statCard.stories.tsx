import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StatCard, { StatCardProps } from './statCard';

// Define metadata for the component
export default {
  title: 'Components/StatCard',
  component: StatCard,
  argTypes: {
    stats: { control: 'object' },
  },
} as Meta;

// Create a template for the component
const Template: StoryFn<StatCardProps> = (args) => <StatCard {...args} />;

// Define a default story
export const Default = Template.bind({});
Default.args = {
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
    },
    {
      base_stat: 65,
      effort: 1,
      stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' },
    },
  ],
};

// Define additional stories if needed
export const SpecialStat = Template.bind({});
SpecialStat.args = {
  stats: [
    {
      base_stat: 60,
      effort: 0,
      stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' },
    },
    {
      base_stat: 80,
      effort: 0,
      stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
    },
  ],
};
