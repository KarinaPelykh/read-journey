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
import { ProgressReading } from '@/widgets/progress-reading/ui/ProgressReading';
import { useAppSelector } from '@/shared/hooks/hooks';
import { redBookSelector } from '@/redux/books/selectors';
import { Card } from '@/entities/card/Card';
import { Icon } from '@/shared/ui/svg/Svg';
import { ReadingTrackerForm } from '@/features/add-reading/ReadingTrackerForm';

export const Reading = () => {
  const readBook = useAppSelector(redBookSelector);

  const { timeLeftToRead, imageUrl, title, author, _id: id } = readBook;

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
            {/* <TextTime>{timeLeftToRead?.hours} hours and</TextTime>
            <TextTime>{timeLeftToRead?.minutes} minutes left</TextTime> */}
          </TimeReading>
        </Header>
        <Card
          id={id}
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
