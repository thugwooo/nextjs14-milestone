import { useTranslations } from "next-intl";

export default function Home() {
	const t = useTranslations("IndexPage");
	const hi = useTranslations("greeting");

	return (
		<div>
			<h1 className="text-4xl mb-4 font-semibold">{t("title")}</h1>
			<p>{t("description")}</p>
			<p>{hi("hi")}</p>
		</div>
	);
}
