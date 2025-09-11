import { OPTIONS } from '../constants/options.constants';
import { Selectors } from './CustomSelect.styled';

type SelectorOption = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  setStatus: (arg: SelectorOption) => void;
  statusValue: SelectorOption;
};

export const CustomSelect = ({ setStatus, statusValue }: CustomSelectProps) => {
  const handleStatusChange = (option: SelectorOption | any) => {
    if (option) {
      setStatus({
        value: option.value,
        label: option.label,
      });
    }
  };
  console.log(statusValue.value.toLowerCase());

  return (
    <Selectors
      onChange={handleStatusChange}
      defaultValue={statusValue}
      options={OPTIONS}
      classNamePrefix="react-select"
    />
  );
};
