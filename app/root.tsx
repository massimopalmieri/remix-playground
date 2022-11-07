import type {LinksFunction, MetaFunction} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import nProgressStyles from 'nprogress/nprogress.css'
import remixIcon from 'remixicon/fonts/remixicon.css'
import mapboxCss from 'mapbox-gl/dist/mapbox-gl.css'
import styles from './styles/tailwind.css'

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});


export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css'},
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/file-icon-vectors@1.0.0/dist/file-icon-vivid.min.css',
    },
    {rel: 'stylesheet', href: remixIcon},
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css',
    },
    {rel: 'stylesheet', href: nProgressStyles},
    {rel: 'stylesheet', href: mapboxCss},
    {rel: 'stylesheet', href: styles},
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
