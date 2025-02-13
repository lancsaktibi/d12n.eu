// add a language prefix to the page requests

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'de', 'hu'],
   
    // Used when no locale matches
    defaultLocale: 'en'
  });
   
  export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(de|en|hu)/:path*']
  };