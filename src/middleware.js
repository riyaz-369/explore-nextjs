import { NextResponse } from "next/server";

export const middleware = (request) => {
  // redirect and  rewrite
  // return NextResponse.redirect(new URL("/about/history", request.url));
  return NextResponse.rewrite(new URL("/contact", request.url));
};

// export const config = {
//   matcher: "/about",
// };

export const config = {
  matcher: ["/about", "/services"],
};
