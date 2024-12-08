import { useChangeLanguage } from "remix-i18next/react";
import { useTranslation } from "react-i18next";
import i18next from "~/i18next.server";
import clsx from "clsx";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
  useRouteLoaderData,
} from "@remix-run/react";
import {
  LinksFunction,
  LoaderFunctionArgs,
  SerializeFrom,
} from "@remix-run/node";
import { themeSessionResolver } from "./sessions.server";
import {
  PreventFlashOnWrongTheme,
  Theme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import stylesheet from "~/global.css?url";
import { HTMLAttributes } from "react";
import { Button } from "./components/button";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&family=JetBrains+Mono&display=swap",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  const locale = await i18next.getLocale(request);

  return {
    theme: getTheme(),
    locale,
  };
}

export const handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common",
};

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <LayoutElement data={data}>
        <Outlet />
      </LayoutElement>
    </ThemeProvider>
  );
}

export function App() {
  const data = useLoaderData<typeof loader>();

  return (
    <LayoutElement data={data}>
      <Outlet />
    </LayoutElement>
  );
}

interface Error {
  status?: number;
  statusText?: string;
}

export function ErrorBoundary() {
  const data = useRouteLoaderData<typeof loader>("root");
  const error = useRouteError() as Error;

  const dataFallback = data
    ? data
    : {
        locale: "en",
        theme: Theme.DARK,
      };

  const { t } = useTranslation();

  return (
    <ThemeProvider
      specifiedTheme={dataFallback.theme}
      themeAction="/action/set-theme"
    >
      <LayoutElement data={dataFallback}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ textAlign: "center" }}>
            {error.status && error.statusText
              ? `${error.status} ${error.statusText}`
              : "Unknown error"}
          </h1>
          <a href="/">
            <Button
              style={{
                textTransform: "capitalize",
              }}
            >
              {t("back")}
            </Button>
          </a>
        </div>
      </LayoutElement>
    </ThemeProvider>
  );
}

interface LayoutProps extends HTMLAttributes<HTMLElement> {
  data: SerializeFrom<typeof loader>;
}

function LayoutElement({ data, children }: LayoutProps) {
  const { i18n } = useTranslation();

  useChangeLanguage(data.locale);

  const [theme] = useTheme();

  return (
    <html lang={data.locale} className={clsx(theme)} dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#688ce2" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="og:image" content="https://tapni.su/og.png" />
        <meta name="og:url" content="https://tapni.su/" />
        <meta name="twitter:image" content="https://tapni.su/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tapnisu" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        <div className="root__content">
          <Navbar style={{ marginTop: "var(--gap-half)" }} />
          <main>{children}</main>
          <Footer style={{ marginBottom: "var(--gap-half)" }} />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
