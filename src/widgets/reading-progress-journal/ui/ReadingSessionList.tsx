import { Progress } from '@/types/book.type';
import {
  ContainerInfo,
  Div,
  DivInfoRead,
  Minutes,
  ProgressReading,
  Speed,
} from './ReadingProgressJournal.styled';
import timeReadingBook from '@/helpers/timeReadingBook';
import { Icon } from '@/shared/ui/svg/Svg';
import { useDeleteProgressOfReading } from '../api/useDeleteProgressOfReading';

export const ReadingSessionList = ({ inform }: { inform: any }) => {
  const deleteProgress = useDeleteProgressOfReading();

  return (
    <ul>
      {inform?.map(
        ({
          progressReading,
          startReading,
          finishReading,
          speed,
          _id,
        }: Progress) => (
          <li key={String(_id)}>
            <ContainerInfo>
              <DivInfoRead>
                <ProgressReading>{progressReading}%</ProgressReading>
                <Minutes>
                  {timeReadingBook({
                    startReading,
                    finishReading,
                  })}
                </Minutes>
              </DivInfoRead>
              <Div>
                <div>
                  <Icon iconName="icon-block" variant="icon-block" />
                  <Speed>{speed} pages per hours</Speed>
                </div>

                <button onClick={() => deleteProgress(String(_id))}>
                  <Icon iconName="trash-1" variant="trash" />
                </button>
              </Div>
            </ContainerInfo>
          </li>
        )
      )}
    </ul>
  );
};
