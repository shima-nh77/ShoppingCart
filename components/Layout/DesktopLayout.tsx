import React, { ReactNode } from "react";

import Head from "next/head";
import DesktopHeader from "../Shared/Header/DesktopHeader";

type Props = {
  children?: ReactNode;
  title?: string;
};

const DesktopLayout = ({
  children,
  title = "This is the default title",
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      {/* <DesktopHeader /> */}
    </header>
    {children}
    <footer></footer>
  </div>
);

export default DesktopLayout;
