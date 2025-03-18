import { defaultLocale } from '@/middleware'

export const getDictionary = async (locale: string) => {
  try {
    return (await import(`../../public/locales/${locale}.json`)).default
  } catch (error) {
    console.error(`Error loading dictionary for locale: ${locale}`, error)
    return (await import(`../../public/locales/${defaultLocale}.json`)).default
  }
} 