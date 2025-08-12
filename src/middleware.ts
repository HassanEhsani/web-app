import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "fa", "ru", "tg"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // رد کردن مسیرهای سیستمی و فایل‌ها
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  // اگر مسیر با یکی از زبان‌ها شروع شود، کاری نکن
  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return;
  }

  // پیش‌فرض: ریدایرکت به /ru
  const url = req.nextUrl.clone();
  url.pathname = `/ru${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
