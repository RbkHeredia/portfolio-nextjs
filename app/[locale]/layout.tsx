import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import NavBar from "./components/navbar/navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { getLocale } from "next-intl/server";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: any;
}

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Portfolio | Rbk",
  description: "Soy Rebeca, diseñadora y desarrolladora web. Creo experiencias digitales únicas utilizando las últimas tecnologías. Mira mis proyectos y hablemos pronto.",
  icons: {
    icon: "/RB.png"
  }
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const locale = await getLocale();

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.log("error");
  }

  return (
    <html lang={locale}>
      <body className={cinzel.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
