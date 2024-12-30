import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Apploader, { ApploaderProps } from './loader';

export default {
  title: 'Components/Apploader',
  component: Apploader,
  argTypes: {
    className: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<ApploaderProps> = (args) => <Apploader {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'custom-loader-class',
};
