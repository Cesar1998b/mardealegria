import React from 'react';
import { useRouter } from "next/router";

import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children, ...customMeta }) => {

  const router = useRouter();
  const meta = {
    title: "Mar de Alegria - Fabrica de Sorpresas",
    description: `Nos encargamos de transformar tus regalos en sonrisas.`,
    image: "/favicon.ico",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Mar de Alegria" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
      </main>
    </div>
  );
};
export default Layout;
