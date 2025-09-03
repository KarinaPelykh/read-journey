import { Icon } from '@/shared/ui/svg/Svg';

type ShowPasswordProps = {
  toggle: () => void;
  showPsw: boolean;
};

export const ShowPassword = ({ toggle, showPsw }: ShowPasswordProps) => {
  return (
    <button type="button" onClick={toggle}>
      <Icon iconName={showPsw ? 'eye-off' : 'eye'} variant="display-password" />
    </button>
  );
};
