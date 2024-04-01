const getDate = ({ progress, totalPage }) => {
  return progress
    .filter(({ status }) => status === 'inactive')
    .reduce(
      (
        total,
        {
          startReading,
          finishReading,
          finishPage,
          startPage,
          status,
          speed,
          _id,
        }
      ) => {
        const data = new Date(finishReading).toDateString();
        const entry = total.find(entry => entry.data === data);
        const pagesReadCount =
          status === 'inactive' ? finishPage - startPage + 1 : 0;
        const progressReading = parseInt(
          (pagesReadCount / totalPage) * 100
        ).toFixed(2);

        if (entry) {
          entry.readTotalPage = (entry.readTotalPage || 0) + pagesReadCount;

          entry.inform = entry.inform || [];

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
        console.log('total', total);
        return total;
      },
      []
    )
    .sort((a, c) => c.data.localeCompare(a.data));
};
export default getDate;
