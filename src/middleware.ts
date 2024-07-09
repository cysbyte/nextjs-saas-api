import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    if (request.nextUrl.pathname === "/job") {
        return NextResponse.rewrite(new URL("/jobs", request.url));
      }

    const themePreference = request.cookies.get('theme')
    if (!themePreference) {
        response.cookies.set('theme', 'dark')
    }
    response.headers.set('api-name','saas-api')
    return response
}

// export const config = {
//     matcher: '/profile'
// }