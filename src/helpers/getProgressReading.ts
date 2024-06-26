import { Progress } from '../type/Book.type';
type Prop = {
  progress: Progress[];
  totalPage: number;
};

const getProsesReading = ({ progress, totalPage }: Prop) => {
  const result = progress
    .filter(({ status }) => status === 'inactive')
    .reduce(
      (acc, { finishPage, startPage, status, speed }) => {
        const pagesReadCount =
          status === 'inactive' ? finishPage - startPage : 0;
        const pagesRead = parseInt(
          ((pagesReadCount / totalPage) * 100).toFixed(2)
        );
        if (pagesReadCount) {
          return { ...acc, pagesRead, speed };
        }
        return acc;
      },
      { pagesRead: 0, speed: 0 }
    );

  return result;
};
export default getProsesReading;
