import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import EvolutionChainCard, { EvolutionChainCardProps } from './evolutionChainCard';
import '../../../styles/common.scss';
import { samplePokemonData } from '../../../constants/sampleStoriesData';

// Sample data for demonstration
const sampleData = samplePokemonData;
export default {
  title: 'Components/EvolutionChainCard',
  component: EvolutionChainCard,
  argTypes: {
    data: { control: 'object' },
  },
} as Meta;

const Template: StoryFn<EvolutionChainCardProps> = (args) => <EvolutionChainCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: sampleData,
};
