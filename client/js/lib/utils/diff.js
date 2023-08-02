export function diff(start_date) {
  const start_datetime = new Date(start_date);
  const now = new Date();

  const difference = now - start_datetime;

  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const date_difference = now.getDate() - start_datetime.getDate();

  return `${minutes}분 전`;
}

console.log(diff('2023-01-01'));
