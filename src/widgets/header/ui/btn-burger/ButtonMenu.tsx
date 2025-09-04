import { Button } from './ButtonMenu.styled';
import { Icon } from '@/shared/ui/svg/Svg';

type ButtonMenuProps = { handelOpen: () => void };

export const ButtonMenu = ({ handelOpen }: ButtonMenuProps) => {
  return (
    <Button onClick={handelOpen}>
      <Icon iconName="icon-menu" />
    </Button>
  );
};
