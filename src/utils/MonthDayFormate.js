import dayjs from 'dayjs';

export default function MonthDayFormate( date, formate) {
  return dayjs(date).format(formate)
}