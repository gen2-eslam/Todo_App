export const convertDateToUTC = ({ date, time }: { date?: Date; time?: Date }): string => {
  if (!date) return '';

  const combined = new Date(date);

  if (time) {
    combined.setHours(time.getHours());
    combined.setMinutes(time.getMinutes());
    combined.setSeconds(time.getSeconds());
    combined.setMilliseconds(time.getMilliseconds());
  }

  return combined.toISOString();
};
