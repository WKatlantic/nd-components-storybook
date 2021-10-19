import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Carousel, { CarouselProps } from '.';

export default {
  title: 'Components/In Progress/Carousel',
  component: Carousel,
  argTypes: {
    items: {
      control: { type: 'disabled' }
    }
  }
} as Meta;

export const Default: Story<CarouselProps> = (...args) => {
  const items = [
    {
      src: 'https://i.redd.it/rfh766xpjrj21.jpg',
      alt: '1',
      label: 'Label 1'
    },
    {
      src: 'https://i.redd.it/rfh766xpjrj21.jpg',
      alt: '2',
      label: 'Label 2'
    },
    {
      src: 'https://i.redd.it/rfh766xpjrj21.jpg',
      alt: '3',
      label: 'Label 3'
    },
    {
      src: 'https://i.redd.it/rfh766xpjrj21.jpg',
      alt: '4',
      label: 'Label 4'
    },
    {
      src: 'https://i.redd.it/rfh766xpjrj21.jpg',
      alt: '5',
      label: 'Label 5'
    }
  ];

  return <Carousel {...args} items={items} />;
};

Default.args = {};
