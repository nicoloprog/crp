import { Icon, IconProps } from '@chakra-ui/react';

const XIcon = ({ ...rest }: IconProps) => (
  <Icon height="24px" viewBox="0 -960 960 960" width="24px" {...rest}>
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
  </Icon>
);

export default XIcon;
