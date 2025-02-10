/* next-int configuration: implementation of {locale} 
- to get localisation/language info from the browser
- to pick a translation file from /messages
*/

import { notFound } from "next/navigation";
import {getRequestConfig} from "next-intl/server";

const locales = ['en', 'de', 'hu'];

export default getRequestConfig(async ({locale}) => {
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  }
});