const formatDate = (date: string) => {
  const d = new Date(date);

  const currentData = new Date(date).toDateString();

  const day = d.getDate().toString().padStart(2, '0');

  const month = (d.getMonth() + 1).toString().padStart(2, '0');

  const year = d.getFullYear();

  return {
    ddMMyyy: `${day}.${month}.${year}`,
    current: currentData,
  };
};
export default formatDate;
