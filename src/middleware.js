// import { NextResponse } from 'next/server';

// export function middleware(request) {
//     // 1. Check for the authentication cookie
//     // Update the cookie name below based on your authentication provider.
//     // Examples: 'next-auth.session-token', 'better-auth.session_token', or a custom name.
//     const token = 
//         request.cookies.get('next-auth.session-token')?.value || 
//         request.cookies.get('better-auth.session_token')?.value ||
//         request.cookies.get('session')?.value;

//     // 2. If the user is NOT logged in (no token found), redirect them to the login page
//     if (!token) {
//         return NextResponse.redirect(new URL('/login', request.url));
//     }

//     // 3. If logged in, allow them to visit the requested page
//     return NextResponse.next();
// }

// // Specify exactly which routes the security guard should protect
// export const config = {
//     matcher: [
//         '/my-cart',
//         '/products',
//         '/products/:path*' // This covers dynamic routes like /products/[id]
//     ]
// };


import { NextResponse } from 'next/server';

export function middleware(request) {
    //  (HTTP)
    const devToken = 
        request.cookies.get('next-auth.session-token')?.value || 
        request.cookies.get('better-auth.session_token')?.value ||
        request.cookies.get('session')?.value;

    // ২.(HTTPS) 
    const prodToken = 
        request.cookies.get('__Secure-next-auth.session-token')?.value || 
        request.cookies.get('__Secure-better-auth.session_token')?.value;

    
    const token = devToken || prodToken;

   
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }


    return NextResponse.next();
}

export const config = {
    matcher: [
        '/my-cart',
        '/products',
        '/products/:path*' 
    ]
};