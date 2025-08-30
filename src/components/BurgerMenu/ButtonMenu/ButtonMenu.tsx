import { useState } from 'react';
import icon from '/images/sprite.svg';
import { Button, Svg } from './ButtonMenu.styled';
import { BurgerMenu } from '../BurgerMenu';
export const ButtonMenu = () => {
  const [open, setOpen] = useState(false);

  const handelOpen = () => {
    setOpen(!open);
    document.body.classList.toggle('modal-open');
  };
  return (
    <>
      <Button onClick={handelOpen}>
        <Svg>
          <use xlinkHref={icon + '#icon-menu'}></use>
        </Svg>
      </Button>
      <BurgerMenu open={open} toggle={handelOpen} />
    </>
  );
};
