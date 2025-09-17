type TimeReadingBookProp = {
  startReading: string;
  finishReading: string;
};

export const timeReadingBook = ({
  startReading,
  finishReading,
}: TimeReadingBookProp) => {
  const start = new Date(startReading);

  const stop = new Date(finishReading);

  const diffTime = stop.getTime() - start.getTime();

  const totalSeconds = Math.floor(diffTime / 1000);

  const hours = Math.floor(totalSeconds / 3600);

  const minutes = Math.floor((totalSeconds % 3600) / 60);

  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${hours} hours, ${minutes} minutes`;
  } else if (minutes > 0) {
    return `${minutes} minutes`;
  }
  return `${seconds} seconds`;
};
