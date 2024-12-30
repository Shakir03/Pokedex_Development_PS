import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ColorfulTag, { ColorfulTagProps } from './colorfulTag';
import { getPokcolor } from '../../../constants/pokemon.types';
import '../../../styles/common.scss';

export default {
  title: 'Components/ColorfulTag',
  component: ColorfulTag,
  argTypes: {
    text: { control: 'text' },
    className: { control: 'text' },
    type: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<ColorfulTagProps> = (args) => <ColorfulTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Fire Type',
  className: 'custom-class',
  type: 'fire',
};

export const Grass = Template.bind({});
Grass.args = {
  text: 'Grass Type',
  className: 'custom-class',
  type: 'grass',
};

export const Water = Template.bind({});
Water.args = {
  text: 'Water Type',
  className: 'custom-class',
  type: 'water',
};

export const Poison = Template.bind({});
Poison.args = {
  text: 'Poison Type',
  className: 'custom-class',
  type: 'poison',
};
