import { notFound } from "next/navigation";
import {getRequestConfig} from "next-intl/server";

const locales = ['en', 'de', 'hu'];

export default getRequestConfig(async ({locale}) => {
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  }
});