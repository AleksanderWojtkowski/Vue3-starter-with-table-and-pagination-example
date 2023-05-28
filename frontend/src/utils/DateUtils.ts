export const dateAndHours = (date: string): string => {
  const dateObj: Date = new Date(date);
  return dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString('pl-PL');
}
