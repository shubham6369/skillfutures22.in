import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Example: Protect dashboard routes. 
  // Note: For real Firebase auth, you'd verify a session cookie here, 
  // or use a client-side layout guard if using default Firebase persistence.
  
  const hasSessionCookie = request.cookies.has('session'); // Placeholder for actual cookie name
  
  // Protect all /dashboard routes
  if (pathname.startsWith('/dashboard')) {
    // If not authenticated (mocked via cookie check), redirect to login
    /* 
    if (!hasSessionCookie) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    */
  }

  // Redirect authenticated users away from auth pages
  if (pathname === '/login' || pathname === '/register') {
    /*
    if (hasSessionCookie) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    */
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
    '/register'
  ],
};
