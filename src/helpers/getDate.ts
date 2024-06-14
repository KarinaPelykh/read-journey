import { Progress } from '../type/Book.type';

interface Prop {
  progress: Progress[];
  totalPage: number;
}

const getDate = ({ progress, totalPage }: Prop) => {
  return progress
    .filter(({ status }) => status === 'inactive')
    .reduce(
      (
        total: { data: string; pagesReadCount: number; inform: any[] }[],
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
        const data = new Date(finishReading).toDateString();
        const entry = total.find(entry => entry.data === data);
        const pagesReadCount =
          status === 'inactive'
            ? Number(finishPage) - Number(startPage) + 1
            : 0;
        const progressReading = ((pagesReadCount / totalPage) * 100).toFixed(2);

        if (entry) {
          entry.pagesReadCount += pagesReadCount;
          entry.inform.push({
            progressReading,
            startReading,
            finishReading,
            speed,
            _id,
          });
        } else {
          total.push({
            data,
            pagesReadCount,
            inform: [
              {
                progressReading,
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
    )
    .sort((a, c) => c.data.localeCompare(a.data));
};

export default getDate;
