import { Buttons } from "../Button/Button";
import { Overlay, Modal, ButtonClose } from "./ModalWindow.styled";
import icons from "../../images/sprite.svg";
import { useEffect } from "react";

export const ModalWindow = ({ children, open, toggle }) => {
  useEffect(() => {
    const handelKeyEscape = (e) => {
      if (e.code === "Escape") {
        toggle();
      }
    };
    document.addEventListener("keydown", handelKeyEscape);
    return () => {
      document.removeEventListener("keydown", handelKeyEscape);
    };
  }, [toggle]);

  const handelCloseClick = (e) => {
    if (e.target === e.currentTarget) {
      toggle();
    }
  };

  return (
    <Overlay onClick={handelCloseClick}>
      {open && (
        <Modal>
          <ButtonClose onClick={toggle}>
            <svg width="20" height="20">
              <use xlinkHref={icons + "#close"}></use>
            </svg>
          </ButtonClose>
          {children}
          <Buttons prop="Add to library" variant="buttonModal" />
        </Modal>
      )}
    </Overlay>
  );
};
