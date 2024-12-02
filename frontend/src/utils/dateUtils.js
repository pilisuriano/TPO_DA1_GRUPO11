import { formatDistanceToNow } from 'date-fns';
import { enUS, es } from 'date-fns/locale';

export const transformDate = (date, locale) => {
  const locales = { en: enUS, es: es };
  //return format(new Date(date), 'PPPP', { locale: locales[locale] });
  return formatDistanceToNow(new Date(date), { addSuffix: true, locale: locales[locale] });
};