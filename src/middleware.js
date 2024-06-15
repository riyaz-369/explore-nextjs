import { NextResponse } from "next/server";

export const middleware = (request) => {
  // redirect and  rewrite
  // when a user hit on "/user-profile" then the user redirect to "/about" page
  // return NextResponse.redirect(new URL("/about", request.url));
  // return NextResponse.redirect(new URL("/about/history", request.url));
  // return NextResponse.rewrite(new URL("/contact", request.url));

  // conditionally (use matcher or conditional)
  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.redirect(new URL("/contact", request.url));
  }

  const user = true;

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // using cookies
  const cookie = request.cookies.get("token");
  if (!cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
};

// export const config = {
//   matcher: "/user-profile",
// };

// export const config = {
//   matcher: "/about",
// };

// export const config = {
//   matcher: ["/about", "/services"],
// };

export const config = {
  matcher: ["/dashboard", "/services"],
};
