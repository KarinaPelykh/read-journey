import { Buttons } from "../Button/Button";
import { Overlay, Modal, ButtonClose, ButtonLink } from "./ModalWindow.styled";
import icons from "../../images/sprite.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooksWithRecommended } from "../../redux/books/operations";
import { newBooksSelector } from "../../redux/books/selectors";
import images from "../../images/pngwing.com.png";
export const ModalWindow = ({ children, open, toggle, id, title, variant }) => {
  const bookNew = useSelector(newBooksSelector);

  const dispatch = useDispatch();
  const handelAddBook = () => {
    dispatch(addBooksWithRecommended({ id }));
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
  const isBookAdded = bookNew.some((book) => book.title === title);
  return (
    <Overlay onClick={handelCloseClick}>
      {open && (
        <Modal variant={variant}>
          <ButtonClose onClick={toggle}>
            <svg width="20" height="20">
              <use xlinkHref={icons + "#close"}></use>
            </svg>
          </ButtonClose>
          {isBookAdded ? (
            <div>
              <p>Book added choose another</p>
              <img src={images} />
            </div>
          ) : (
            <>
              {children}

              <ButtonLink to="/library">
                <Buttons
                  prop="Add to library"
                  variant="buttonModal"
                  onClick={handelAddBook}
                />
              </ButtonLink>
            </>
          )}
        </Modal>
      )}
    </Overlay>
  );
};
