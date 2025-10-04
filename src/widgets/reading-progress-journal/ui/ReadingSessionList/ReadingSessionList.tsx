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
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {inform?.map(
        ({ readPage, percentReading, startReading, finishReading, _id }: D) => {
          const start = new Date(startReading);

          const stop = new Date(finishReading);

          const diffTime = stop.getTime() - start.getTime();

          const seconds = diffTime / 1000;

          const speedReading = (readPage / seconds) * 3600;

          return (
            <li key={String(_id)} style={{ paddingLeft: '30px' }}>
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

                  <button
                    onClick={() => deleteProgress(String(_id))}
                    style={{ paddingTop: '5px', marginLeft: '8px ' }}
                  >
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
