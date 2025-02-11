import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import {unstable_setRequestLocale} from 'next-intl/server';
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
const locales = ['en', 'de', 'hu'];

// Load the Inter font with the 'swap' display strategy
const inter = Inter({ subsets: ["latin"], display: "swap" });

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
        <body className={`${inter.className} max-w-full`}>
          <NextIntlClientProvider messages = {messages}>
            <div className="flex flex-col overflow-x-clip">
              <Navbar />
              <main className="flex flex-grow flex-col">{children}</main>
            </div>
          </NextIntlClientProvider>
        </body>
      </html>
    )
  }