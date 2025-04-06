import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // List of routes you want to block
  const blockedRoutes = ['/payment'];

  if (blockedRoutes.includes(pathname)) {
    // Return a 404 response for blocked routes
    return NextResponse.rewrite(new URL('/404', request.url));
  }

  // Allow other routes to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/courses/:path*', '/payment/:path*'], // Only run middleware for these paths
};