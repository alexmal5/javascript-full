const formatter = new Intl.DateTimeFormat('en', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'UTC',
  hour12: false,
});

export const getGreenwichTime = (date) => formatter.format(date);

console.log(getGreenwichTime(new Date()));
