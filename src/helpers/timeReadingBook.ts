type TimeReadingBookProp = {
  startReading: string;
  finishReading: string;
};

const timeReadingBook = ({
  startReading,
  finishReading,
}: TimeReadingBookProp) => {
  const start = new Date(startReading);
  const stop = new Date(finishReading);
  const time = stop.getTime() - start.getTime();

  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  return hours !== '' ? `${minutes}minutes` : `${hours}hours,${minutes}minutes`;
};
export default timeReadingBook;
