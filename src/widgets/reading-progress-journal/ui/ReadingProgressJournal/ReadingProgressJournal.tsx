import {
  List,
  VerticalDiv,
  Wrapper,
  Block,
} from './ReadingProgressJournal.styled';
import { redBookSelector } from '@/redux/books/selectors';
import { useAppSelector } from '@/shared/hooks/hooks';
import { ProgressRecordItem } from '../ProgressRecordItem/ProgressRecordItem';
import { ReadingSessionList } from '../ReadingSessionList/ReadingSessionList';
import { getReadingProgress } from '@/helpers/getReadingProgress';

export const ReadingProgressJournal = () => {
  const readBook = useAppSelector(redBookSelector);

  return (
    <Block>
      <Wrapper>
        <VerticalDiv />
        <List>
          {getReadingProgress({
            progress: readBook.progress,
            totalPage: readBook.totalPages,
          })
            .sort(
              (a, c) => new Date(c.date).getTime() - new Date(a.date).getTime()
            )
            .map(({ date, readPage, inform }) => (
              <ProgressRecordItem date={date} readPage={readPage}>
                <ReadingSessionList inform={inform} />
              </ProgressRecordItem>
            ))}
        </List>
      </Wrapper>
    </Block>
  );
};
