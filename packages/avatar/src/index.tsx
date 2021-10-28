import React from 'react';

import { AvatarStyled } from './styles';

export type AvatarProps = {
  /**
   * Avatar size in pixels.
   * @default "md"
   */
  size: '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  /**
   * Avatar url.
   */
  src?: string;
  /**
   * Avatar description
   */
  alt?: string;
};

/**
 * Avatar component
 *
 * @description is used to represent a character and displays the picture.
 */
export const Avatar = ({ size = 'md', ...props }: AvatarProps) => {
  return <AvatarStyled size={size} {...props} />;
};
