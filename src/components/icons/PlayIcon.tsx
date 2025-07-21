import { Icon, IconProps } from "@chakra-ui/react";

const PlayIcon = ({ ...rest }: IconProps) => (
  <Icon width="50px" height="50px" viewBox="0 0 108 108" fill="none" {...rest}>
    <circle cx="54" cy="54" r="50.5193" stroke="#248AFF" strokeWidth="3" />
    <path
      d="M40.7734 71.5919L67.7734 54.9147L40.7734 38.249V71.5919Z"
      fill="#248AFF"
      stroke="#248AFF"
      strokeWidth="2.55252"
      strokeMiterlimit="10"
    />
  </Icon>
);

export default PlayIcon;
