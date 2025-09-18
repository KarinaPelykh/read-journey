import {
  ContainerInfo,
  Div,
  Head,
  Minutes,
  ProgressReading,
  Speed,
} from './ReadingSessionList.style';
import { Icon } from '@/shared/ui/svg/Svg';
import { useDeleteProgressOfReading } from '../../api/useDeleteProgressOfReading';
import { timeReadingBook } from '@/helpers/timeReadingBook';

type D = {
  readPage: number;
  percentReading: string;
  startReading: string;
  finishReading: string;
  _id: string;
};

export const ReadingSessionList = ({ inform }: { inform: any }) => {
  const deleteProgress = useDeleteProgressOfReading();

  return (
    <ul>
      {inform?.map(
        ({ readPage, percentReading, startReading, finishReading, _id }: D) => {
          const start = new Date(startReading);

          const stop = new Date(finishReading);

          const diffTime = stop.getTime() - start.getTime();

          const seconds = diffTime / 1000;

          const speedReading = (readPage / seconds) * 3600;
          return (
            <li key={String(_id)}>
              <ContainerInfo>
                <Head>
                  <ProgressReading>{percentReading}%</ProgressReading>
                  <Minutes>
                    {timeReadingBook({
                      startReading,
                      finishReading,
                    })}
                  </Minutes>
                </Head>
                <Div>
                  <div>
                    <Icon iconName="icon-block" variant="icon-block" />
                    <Speed>{speedReading.toFixed(2)} pages per hours</Speed>
                  </div>

                  <button onClick={() => deleteProgress(String(_id))}>
                    <Icon iconName="trash-1" variant="trash" />
                  </button>
                </Div>
              </ContainerInfo>
            </li>
          );
        }
      )}
    </ul>
  );
};
