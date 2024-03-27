import { useDispatch, useSelector } from 'react-redux';
import { Buttons } from '../Button/Button';
import { InputAddBook, Label, Title, Wrapper } from './AddReading.styled';
import { redBookSelector } from '../../redux/books/selectors';
import { finishedReading, startReading } from '../../redux/books/operations';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddReading = () => {
  const readBook = useSelector(redBookSelector);
  const [page, setPage] = useState('');
  const [start, setStart] = useState(false);
  const id = readBook._id;
  const dispatch = useDispatch();
  const handelSubmit = e => {
    e.preventDefault();
    if (!start) {
      dispatch(startReading({ id, page }))
        .unwrap()
        .then(() => {
          toast.success('You start read', {
            position: 'top-right',
            hideProgressBar: true,
            theme: 'dark',
          });
          if (readBook?.totalPages === parseInt(page)) {
            toast.success('You already finished  read', {
              position: 'top-right',
              hideProgressBar: true,
              theme: 'dark',
            });
          }
        })
        .catch(error => toast.error(error));
      setStart(!start);
    } else if (start) {
      dispatch(finishedReading({ id, page }))
        .unwrap()
        .then(() => {
          toast.success('You finished read', {
            position: 'top-right',
            hideProgressBar: true,
            theme: 'dark',
          });
        })
        .catch(error => toast.error(error));

      setStart(!start);
    }
    setPage('');
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <Title>Start page:</Title>
        <Wrapper>
          <Label>Page number:</Label>
          <InputAddBook
            type="page"
            value={page}
            onChange={e => setPage(e.currentTarget.value)}
            name="page"
            required
            pattern="^[0-9]+$"
            placeholder="0"
          />
        </Wrapper>
        <Buttons prop={start ? 'To stop' : 'To start'} variant="buttonBase" />
      </form>
    </>
  );
};
