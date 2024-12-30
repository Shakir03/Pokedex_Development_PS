import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DetailsHeader, { DetailsHeaderProps } from './detailsHeader';
import '../../../styles/common.scss';
import { samplePokemonData, samplePokemonSpeciesData } from '../../../constants/sampleStoriesData';

// Sample data for demonstration
const sampleData = samplePokemonData;

const sampleSpeciesData = samplePokemonSpeciesData;

export default {
  title: 'Components/DetailsHeader',
  component: DetailsHeader,
  argTypes: {
    data: { control: 'object' },
    speciesData: { control: 'object' },
    backClick: { action: 'back clicked' },
    closeClick: { action: 'close clicked' },
    forwordClick: { action: 'forward clicked' },
  },
} as Meta;

const Template: StoryFn<DetailsHeaderProps> = (args) => <DetailsHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: sampleData,
  speciesData: sampleSpeciesData,
  backClick: () => console.log('Back clicked'),
  closeClick: () => console.log('Close clicked'),
  forwordClick: () => console.log('Forward clicked'),
};
