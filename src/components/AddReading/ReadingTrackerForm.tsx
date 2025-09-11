import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {
  Description,
  Form,
  InputAddBook,
  Label,
  Span,
  Text,
  Title,
  Wrapper,
} from './ReadingTrackerForm.styled';

import { ModalRead } from '../Modal/ModalRead';
import { Buttons } from '@/shared/ui/btn/Button';
import { useSubmitProgressReading } from './api/useSubmitProgressReading';
import { useToggle } from '@/shared/hooks/useToggle';

export const ReadingTrackerForm = () => {
  const [page, setPage] = useState('');

  const [start, setStart] = useState(false);

  const { isOpen, toggle, open } = useToggle();

  const handleSubmit = useSubmitProgressReading({
    setStart,
    page,
    setPage,
    start,
    open,
  });

  return (
    <>
      <Form onSubmit={handleSubmit}>
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
      </Form>
      {isOpen && (
        <ModalRead open={isOpen} toggle={toggle} variant="min-modal">
          <img width="68" height="70" src="/images/book.png" />
          <Text>The book is read</Text>
          <Description>
            It was an <Span>exciting journey</Span>, where each page revealed
            new horizons, and the characters became inseparable friends.
          </Description>
        </ModalRead>
      )}
    </>
  );
};
