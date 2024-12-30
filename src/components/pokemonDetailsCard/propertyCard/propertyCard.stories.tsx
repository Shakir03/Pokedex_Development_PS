import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PropertyCard, { PropertyCardProps } from './propertyCard';
import { getCamleCaseString } from '../../../constants/pokemon.types';
import ColorfulTag from '../colorfulTags/colorfulTag';

// Define metadata for the component
export default {
  title: 'Components/PropertyCard',
  component: PropertyCard,
  argTypes: {
    speciesData: { control: 'object' },
    data: { control: 'object' },
    pokemonTypeData: { control: 'object' },
  },
} as Meta;

// Create a template for the component
const Template: StoryFn<PropertyCardProps> = (args) => <PropertyCard {...args} />;

// Define a default story
export const Default = Template.bind({});
Default.args = {
  speciesData: {
    egg_groups: [{ name: 'monster' }, { name: 'dragon' }],
  },
  data: {
    height: 10,
    weight: 200,
    abilities: [{ ability: { name: 'overgrow' } }, { ability: { name: 'chlorophyll' } }],
    types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
  },
  pokemonTypeData: {
    damage_relations: {
      double_damage_from: [{ name: 'fire' }, { name: 'ice' }],
    },
  },
};

// Define additional stories if needed
export const WithSpecialTypes = Template.bind({});
WithSpecialTypes.args = {
  speciesData: {
    egg_groups: [{ name: 'fairy' }],
  },
  data: {
    height: 8,
    weight: 150,
    abilities: [{ ability: { name: 'intimidate' } }],
    types: [{ type: { name: 'electric' } }],
  },
  pokemonTypeData: {
    damage_relations: {
      double_damage_from: [{ name: 'ground' }],
    },
  },
};
