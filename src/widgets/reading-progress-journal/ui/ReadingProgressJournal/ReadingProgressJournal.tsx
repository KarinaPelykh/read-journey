import {
  Diary,
  List,
  VerticalDiv,
  Wrapper,
} from './ReadingProgressJournal.styled';
import { redBookSelector } from '@/redux/books/selectors';
import { useAppSelector } from '@/shared/hooks/hooks';
import { ProgressRecordItem } from '../ProgressRecordItem/ProgressRecordItem';
import { ReadingSessionList } from '../ReadingSessionList/ReadingSessionList';
import { getReadingProgress } from '@/helpers/getReadingProgress';

export const ReadingProgressJournal = () => {
  const readBook = useAppSelector(redBookSelector);

  return (
    <Diary>
      {' '}
      <Wrapper>
        <List>
          {' '}
          <VerticalDiv></VerticalDiv>
          {getReadingProgress({
            progress: readBook.progress,
            totalPage: readBook.totalPages,
          }).map(({ date, readPage, inform }) => (
            <ProgressRecordItem date={date} readPage={readPage}>
              <ReadingSessionList inform={inform} />
            </ProgressRecordItem>
          ))}
          {/* <ReadingSessionList /> */}
        </List>{' '}
      </Wrapper>
    </Diary>
  );
};
