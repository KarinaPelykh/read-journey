import { useState } from 'react';
import icon from '../../../images/sprite.svg';
import { Button } from './ButtonMenu.styled';
import { BurgerMenu } from '../BurgerMenu';
export const ButtonMenu = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const handelOpen = () => {
    setOpen(!open);
    document.body.classList.toggle('modal-open');
  };
  return (
    <>
      <Button onClick={handelOpen}>
        <svg width="28" height="28">
          <use xlinkHref={icon + '#icon-menu'}></use>
        </svg>
      </Button>
      <BurgerMenu open={open} toggle={handelOpen} />
    </>
  );
};
