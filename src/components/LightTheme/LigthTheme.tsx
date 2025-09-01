import { useState } from 'react';
import './LightTheme.css';

type LightThemeProp = {
  handleTheme: () => void;
};

export const LightTheme = ({ handleTheme }: LightThemeProp) => {
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
