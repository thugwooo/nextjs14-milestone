import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { localeFileNames, locales } from "@/constants/locale";

// Can be imported from a shared config

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as any)) notFound();

	const imports = localeFileNames.map(
		(file) => import(`/public/locales/${locale}/${file}.json`)
	);
	const messagesModules = await Promise.all(imports);

	// Merge all messages into a single object
	const messages = Object.assign(
		{},
		...messagesModules.map((module) => module.default)
	);

	return {
		messages,
	};
});
