import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Header, { HeaderProps } from './header';
import './header.scss'; // Ensure your component styles are imported

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Welcome to the Header',
  className: 'custom-header-class',
};
