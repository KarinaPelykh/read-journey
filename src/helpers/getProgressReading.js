const getProsesReading = ({ progress, totalPage }) => {
  const result = progress
    .filter(({ status }) => status === "inactive")
    .reduce((acc, { finishPage, startPage, status, speed }) => {
      const pagesReadCount =
        status === "inactive" ? finishPage - startPage : "0";
      const pagesRead = parseInt((pagesReadCount / totalPage) * 100).toFixed(2);
      if (pagesReadCount) {
        return { pagesRead, speed };
      }
      return acc;
    }, 0);
  return result;
};
export default getProsesReading;
