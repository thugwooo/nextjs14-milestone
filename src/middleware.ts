import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	// A list of all locales that are supported
	locales: ["en", "ko", "vn"],

	// Used when no locale matches
	defaultLocale: "en",
});

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(ko|vn|en)/:path*"],
};
