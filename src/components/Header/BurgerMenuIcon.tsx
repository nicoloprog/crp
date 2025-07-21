import { Icon, IconProps } from "@chakra-ui/react";

const BurgerMenuIcon = ({ ...rest }: IconProps) => (
  <Icon
    width={{ base: "55px", md: "68px" }}
    height={{ base: "50px", md: "50px" }}
    viewBox="10 10 48 37"
    {...rest}
  >
    <rect x="0.5" y="23" width="47" height="3" rx="1" fill="#C39E6F" />
    <rect x="0.5" y="29" width="47" height="3" rx="1" fill="#C39E6F" />
    <rect x="0.5" y="35" width="47" height="3" rx="1" fill="#C39E6F" />
  </Icon>
);

export default BurgerMenuIcon;
