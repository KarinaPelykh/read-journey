import { useState } from 'react';
import './ThemeSwitcher.css';

type ThemeSwitcherProp = {
  handleTheme: () => void;
};

export const ThemeSwitcher = ({ handleTheme }: ThemeSwitcherProp) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    handleTheme();
  };
  return (
    <label className="toggle-switch">
      <input type="checkbox" onChange={handleToggle} />
      <span className="switch"></span>
    </label>
  );
};
