import {
  Diary,
  List,
  VerticalDiv,
  Wrapper,
} from './ReadingProgressJournal.styled';
import { redBookSelector } from '@/redux/books/selectors';
import getDate from '@/helpers/getDate';
import { useAppSelector } from '@/shared/hooks/hooks';
import { ProgressRecordItem } from '../ProgressRecordItem/ProgressRecordItem';
import { ReadingSessionList } from '../ReadingSessionList/ReadingSessionList';

export const ReadingProgressJournal = () => {
  const redBook = useAppSelector(redBookSelector);

  return (
    <Diary>
      <Wrapper>
        <List>
          <VerticalDiv></VerticalDiv>
          {getDate({
            progress: redBook.progress,
            totalPage: redBook.totalPages,
          })?.map(({ data, pagesReadCount, inform }) => (
            <ProgressRecordItem data={data} pagesReadCount={pagesReadCount}>
              <ReadingSessionList inform={inform} />
            </ProgressRecordItem>
          ))}
        </List>
      </Wrapper>
    </Diary>
  );
};
