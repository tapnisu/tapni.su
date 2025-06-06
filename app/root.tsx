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
  LinksFunction,
  LoaderFunctionArgs,
} from "react-router";

import { themeSessionResolver } from "./sessions.server";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import stylesheet from "~/global.css?url";
import errorStylesheet from "~/error.css?url";

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
      <App />
    </ThemeProvider>
  );
}

export function App() {
  const data = useLoaderData<typeof loader>();
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
        <meta name="og:image" content="https://tapni.su/og.jpg" />
        <meta name="og:url" content="https://tapni.su/" />
        <meta name="twitter:image" content="https://tapni.su/og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tapnisu" />
        <link rel="me" href="https://mastodon.social/@tapnisu" />
        <meta name="fediverse:creator" content="@tapnisu@mastodon.social" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        <div className="root__content">
          <Navbar style={{ marginTop: "var(--gap-half)" }} />
          <main>
            <Outlet />
          </main>
          <Footer style={{ marginBottom: "var(--gap-half)" }} />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

interface Error {
  status: number;
  statusText: string;
}

export function ErrorBoundary() {
  const error = useRouteError() as Error;

  const credits = [
    ["Tapnisu - creating this awful website", "https://tapni.su/"],
    ["Remix Run - creating react-router", "https://reactrouter.com/"],
  ];

  if (Math.round(error.status / 100) === 4)
    credits.push(["And You - causing this error", "http://192.168.0.1/"]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#688ce2" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="og:image" content="https://tapni.su/og.jpg" />
        <meta name="og:url" content="https://tapni.su/" />
        <meta name="twitter:image" content="https://tapni.su/og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tapnisu" />
        <link rel="me" href="https://mastodon.social/@tapnisu" />
        <meta name="fediverse:creator" content="@tapnisu@mastodon.social" />
        <link rel="stylesheet" href={errorStylesheet} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>
          <div className="card">
            <h3 className="ending">ENDING</h3>
            <h1 className="game-over">GAME OVER</h1>
            <h2 className="reason">
              {error.status && error.statusText
                ? `${error.status} ${error.statusText}`
                : "Unknown error"}
            </h2>

            <p className="staff">
              Main Staff:
              {credits.map(([title, url]) => (
                <a href={url} className="credits-link" key={title}>
                  <br />
                  {title}
                </a>
              ))}
            </p>

            <div className="return">
              <a href="/">Return</a>
            </div>
          </div>
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
