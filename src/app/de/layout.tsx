import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import {unstable_setRequestLocale} from 'next-intl/server';
const locales = ['en', 'de', 'hu'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
    children,
    params: {locale}
  }: {
    children: React.ReactNode;
    params: {locale: string};
  }) {
    unstable_setRequestLocale(locale);
    const messages = await getMessages();
   
    
    return (
      <html lang={locale}>
        <body>
          <NextIntlClientProvider messages = {messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    )
  }