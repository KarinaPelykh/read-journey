import { Icon } from '@/shared/ui/svg/Svg';

type ValidationAuthProps = {
  errors?: string;
  touched?: boolean;
};

export const ValidationAuth = ({ errors, touched }: ValidationAuthProps) => {
  return (
    <>
      {touched && (
        <Icon
          iconName={errors ? 'error' : 'icon-check-psw'}
          variant="validation"
        />
      )}
    </>
  );
};
