import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PokemonCard, { PokemonCardProps } from './pokemonCard';
import '../../styles/common.scss';
import { samplePokemonData } from '../../constants/sampleStoriesData';

export default {
  title: 'Components/PokemonCard',
  component: PokemonCard,
  argTypes: {
    data: { control: 'object' },
    onClick: { action: 'clicked' },
    className: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<PokemonCardProps> = (args) => <PokemonCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: samplePokemonData,
  className: 'custom-class',
};
