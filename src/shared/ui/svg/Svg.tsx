import icon from '/images/sprite.svg';
import { Svg } from './Svg.styled';

type Style = {
  stroke: string;
};

type IconProps = {
  iconName: string;
  variant?: string;
  style?: Style;
};

export const Icon = ({ iconName, variant, style }: IconProps) => {
  return (
    <Svg $variant={variant} style={style}>
      <use xlinkHref={icon + `#${iconName}`}></use>
    </Svg>
  );
};
