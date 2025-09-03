import { Icon } from '@/shared/ui/svg/Svg';

type ValidationRegisterProps = {
  errors?: string;
  touched?: boolean;
};

export const ValidationRegister = ({
  errors,
  touched,
}: ValidationRegisterProps) => {
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
