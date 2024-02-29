import { DateTime } from 'luxon';

export const formatRelative = (
  date: Date | string,
  { locale }: { locale?: string } = {},
) => {
  return DateTime.fromJSDate(new Date(date))
    .setLocale(locale ?? 'en')
    .toRelative();
};
