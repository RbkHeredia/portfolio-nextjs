import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'es',
  localePrefix: {
    mode: 'always',
    prefixes: {
      'en': '/us',
      'es': '/ar'
    }
  },
  pathnames: {
    '/': '/',
    
  }
});