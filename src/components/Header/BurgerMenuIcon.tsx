import { Icon, IconProps } from "@chakra-ui/react";

const BurgerMenuIcon = ({ ...rest }: IconProps) => (
  <Icon
    width={{ base: "45px", md: "68px" }}
    height={{ base: "50px", md: "50px" }}
    viewBox="10 10 48 37"
    {...rest}
  >
    <rect
      x="0.5"
      y="23"
      width="50"
      height="3"
      rx="1"
      fill="#C39E6F"
      stroke="#000000ff"
      strokeWidth="0.25"
    />
    <rect
      x="0.5"
      y="30"
      width="50"
      height="3"
      rx="1"
      fill="#C39E6F"
      stroke="#000000ff"
      strokeWidth="0.25"
    />
    <rect
      x="0.5"
      y="37"
      width="50"
      height="3"
      rx="1"
      fill="#C39E6F"
      stroke="#000000ff"
      strokeWidth="0.25"
    />
  </Icon>
);

export default BurgerMenuIcon;
