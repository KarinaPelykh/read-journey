import { useState } from 'react';
import './LightTheme.css';
interface Prop {
  handleTheme: () => void;
}
export const LightTheme = ({ handleTheme }: Prop) => {
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
