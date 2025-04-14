import {useTranslations} from 'next-intl';
import { Link } from '../../i18n/navigation';
import { routing } from '../../i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}