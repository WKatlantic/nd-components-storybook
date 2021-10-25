import styled from '@nd-ui/system';

import Text, { TextProps } from '@nd-ui/text';

export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & TextProps;

const Heading = styled(Text).attrs<HeadingProps>(({ level = 2 }) => ({
  as: `h${level}`
}))<HeadingProps>({});

export default Heading;