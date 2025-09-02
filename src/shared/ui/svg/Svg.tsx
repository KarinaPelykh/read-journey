import icon from '/images/sprite.svg';
import { Svg } from './Svg.styled';

type IconProps = {
  iconName: string;
  variant?: string;
};

export const Icon = ({ iconName, variant }: IconProps) => {
  return (
    <Svg $variant={variant}>
      <use xlinkHref={icon + `#${iconName}`}></use>
    </Svg>
  );
};
