import { Dashboard } from '@/widgets/dashboard/Dashboard';
import {
  Div,
  WrapperBooks,
  Text,
  TextTime,
  TimeReading,
  Header,
} from './Reading.styled';
import { ReadingTrackerForm } from '@/components/AddReading/ReadingTrackerForm';
import { ProgressReading } from '@/widgets/progress-reading/ui/ProgressReading';
import { MyBook } from '@/components/MyBook/MyBook';
import { useAppSelector } from '@/shared/hooks/hooks';
import { redBookSelector } from '@/redux/books/selectors';

export const Reading = () => {
  const readBook = useAppSelector(redBookSelector);

  const { timeLeftToRead } = readBook;

  return (
    <Div>
      <Dashboard>
        <ReadingTrackerForm />
        <ProgressReading />
      </Dashboard>
      <WrapperBooks>
        <Header>
          <Text>My reading</Text>
          <TimeReading>
            <TextTime>{timeLeftToRead?.hours} hours and</TextTime>
            <TextTime>{timeLeftToRead?.minutes} minutes left</TextTime>
          </TimeReading>
        </Header>
        <MyBook />
      </WrapperBooks>
    </Div>
  );
};
