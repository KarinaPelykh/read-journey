import { Progress } from '@/types/book.type';

type GetReadingProgressProp = {
  progress: Progress[];
  totalPage: number;
};

type Total = {
  date: string;
  readPage: number;
  inform: any[];
};

export const getReadingProgress = ({
  progress,
  totalPage,
}: GetReadingProgressProp) => {
  return progress
    .filter(({ status }) => status === 'inactive')
    .reduce(
      (
        total: Total[],
        {
          startReading,
          finishReading,
          finishPage,
          startPage,
          status,
          speed,
          _id,
        }: Progress
      ) => {
        //data
        const date = new Date(finishReading).toDateString();
        // get amount of read pages
        const readPage = status === 'inactive' ? finishPage - startPage + 1 : 0;
        // percent of general amount pages of book
        const percentReading = ((readPage / totalPage) * 100).toFixed(2);

        const entry = total.find(entry => entry.date === date);

        if (entry) {
          entry.readPage += readPage;
          entry.inform.push({
            readPage,
            percentReading,
            startReading,
            finishReading,
            speed,
            _id,
          });
        } else {
          total.push({
            date,
            readPage,
            inform: [
              {
                readPage,
                percentReading,
                startReading,
                finishReading,
                speed,
                _id,
              },
            ],
          });
        }
        return total;
      },
      []
    );
};
