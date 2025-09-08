import {
  DivDiary,
  List,
  VerticalDiv,
  Wrapper,
} from './ReadingProgressJournal.styled';
import { redBookSelector } from '@/redux/books/selectors';
import getDate from '@/helpers/getDate';
import { useAppSelector } from '@/shared/hooks/hooks';
import { ProgressRecordItem } from './ProgressRecordItem';
import { ReadingSessionList } from './ReadingSessionList';

export const ReadingProgressJournal = () => {
  const redBook = useAppSelector(redBookSelector);

  return (
    <DivDiary>
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
    </DivDiary>
  );
};
