import { DateTime } from 'luxon';

export const sortDate = (
  date1: Date | string,
  date2: Date | string,
  order: 'asc' | 'desc' = 'asc',
) => {
  date1 = new Date(date1);
  date2 = new Date(date2);

  return order === 'asc'
    ? date1.getTime() - date2.getTime()
    : date2.getTime() - date1.getTime();
};

const defaultLocale = 'en';

export const formatDate = (
  date: Date | string,
  format: 'relative' | 'yyyy-MM-dd' = 'yyyy-MM-dd',
  locale = defaultLocale,
) => {
  const dateTime = DateTime.fromJSDate(new Date(date));

  return format === 'relative'
    ? dateTime.setLocale(locale).toRelative()
    : dateTime.setLocale(locale).toFormat(format);
};
