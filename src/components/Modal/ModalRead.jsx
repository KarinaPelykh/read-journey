import { Buttons } from "../Button/Button";
import { Overlay, Modal, ButtonClose, ButtonLink } from "./ModalWindow.styled";
import icons from "../../images/sprite.svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addReadBook } from "../../redux/books/operations";
export const ModalRead = ({ open, toggle, children, id }) => {
  const dispatch = useDispatch();
  const handelAddBookRead = () => {
    dispatch(addReadBook({ id }));
  };
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

          <>
            {children}

            <ButtonLink onClick={handelAddBookRead} to="/reading">
              <Buttons prop="Start reading" variant="buttonModal" />
            </ButtonLink>
          </>
        </Modal>
      )}
    </Overlay>
  );
};
