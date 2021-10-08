import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Pagination, { PaginationProps } from '.';

export default {
  title: 'Components/Pagination',
  component: Pagination
} as Meta;

export const Default: Story<PaginationProps> = args => <Pagination {...args} />;
Default.args = {
  canNext: true,
  canPrevious: false,
  totalCount: 335,
  currentPage: 1,
  pageSize: 10
};
