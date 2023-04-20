const nameOfDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

const dayOfWeek = (date, days) => {
  const startDay = new Date(date).getDate();
  const newDay = new Date(date).setDate(startDay + days);

  return nameOfDays[new Date(newDay).getDay()];
};
