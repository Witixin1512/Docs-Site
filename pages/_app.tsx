import "../css/index.css";
import "../css/nprogress.css";
import "../css/markdown.css";
import "../css/theme.css";
import 'simplebar/dist/simplebar.min.css';
import React from "react";
import { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
