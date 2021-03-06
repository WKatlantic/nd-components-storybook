import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps } from '.';

export default {
  title: 'Components/Forms/Input',
  component: Input,
} as Meta;

export const Default: Story<InputProps> = (args) => (
  <Input placeholder="Optional placeholder" {...args} />
);

Default.args = {
  label: 'Label',
  hint: 'Input hints',
  color: 'default',
  disabled: false,
  error: '',
};
