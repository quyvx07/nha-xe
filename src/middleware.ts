import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'vi']
export const defaultLocale = 'vi'

function getLocale(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Kiểm tra nếu pathname đã có locale
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return locale
    }
  }
  
  // Kiểm tra cookie trước
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value
  if (localeCookie && locales.includes(localeCookie)) {
    return localeCookie
  }

  // Kiểm tra localStorage (chỉ hoạt động ở client-side)
  // Lưu ý: Middleware chạy ở server-side, vì vậy đây chỉ là một 
  // cách đề phòng và sẽ không hoạt động trong middleware
  if (typeof window !== 'undefined') {
    try {
      const storedData = localStorage.getItem('project-storage')
      if (storedData) {
        const { state } = JSON.parse(storedData)
        if (state?.locale && locales.includes(state.locale)) {
          console.log("Locale from localStorage:", state.locale);
          return state.locale;
        }
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error)
    }
  }
  
  // Lấy locale từ accept-language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const acceptedLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0])
      .find(lang => locales.includes(lang.substring(0, 2)))
    
    if (acceptedLocale) {
      return acceptedLocale.substring(0, 2)
    }
  }
  
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Xử lý trường hợp root đặc biệt
  if (pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = `/${defaultLocale}`
    return NextResponse.redirect(url)
  }
  
  // Bỏ qua các tệp tĩnh
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/public')
  ) {
    return NextResponse.next()
  }
  
  // Kiểm tra nếu pathname đã có locale
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return NextResponse.next()
    }
  }
  
  // Chuyển hướng về locale thích hợp
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  return NextResponse.redirect(request.nextUrl)
}

// Định nghĩa các đường dẫn mà middleware sẽ xử lý
export const matcher = ['/((?!api|_next/static|_next/image|favicon.ico).*)'] 