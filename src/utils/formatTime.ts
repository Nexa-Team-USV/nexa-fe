export function formatDateTime(
  locales: string,
  time: string,
  options: Intl.DateTimeFormatOptions,
) {
  return new Intl.DateTimeFormat(locales, options).format(new Date(time));
}
