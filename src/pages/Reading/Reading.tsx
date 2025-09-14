import { Dashboard } from '@/widgets/dashboard/Dashboard';
import {
  Div,
  WrapperBooks,
  Text,
  TextTime,
  TimeReading,
  Header,
  Button,
} from './Reading.styled';
import { ReadingTrackerForm } from '@/components/AddReading/ReadingTrackerForm';
import { ProgressReading } from '@/widgets/progress-reading/ui/ProgressReading';
import { useAppSelector } from '@/shared/hooks/hooks';
import { redBookSelector } from '@/redux/books/selectors';
import { Card } from '@/entities/card/Card';
import { Icon } from '@/shared/ui/svg/Svg';

export const Reading = () => {
  const readBook = useAppSelector(redBookSelector);

  const { timeLeftToRead, imageUrl, title, author } = readBook;

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
        <Card
          variant="reading"
          title={title}
          author={author}
          image={imageUrl ? imageUrl : '/images/img-book.png'}
        >
          <Button>
            <Icon
              iconName={timeLeftToRead ? 'button-read' : 'button-stop-read'}
              variant="reading-button"
            />
          </Button>
        </Card>
      </WrapperBooks>
    </Div>
  );
};
