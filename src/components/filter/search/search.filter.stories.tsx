import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchFilter, { SearchFilterProps } from './search.filter';
import 'rsuite/dist/rsuite.min.css'; // Import rsuite styles

export default {
  title: 'Components/SearchFilter',
  component: SearchFilter,
  argTypes: {
    placeholder: { control: 'text' },
    inputClass: { control: 'text' },
    label: { control: 'text' },
    onChangeHandler: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn<SearchFilterProps> = (args) => <SearchFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
  inputClass: 'custom-input-class',
  label: 'Search',
  onChangeHandler: (value: string, event: React.SyntheticEvent) => {
    console.log('Search value:', value);
  },
};
