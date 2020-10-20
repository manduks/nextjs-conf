import Head from "next/head";
import dynamic from 'next/dynamic';
import React from "react";
import isMobile from 'lib/isMobile';
import isBot from 'lib/isBot';

const Desktop = dynamic(() => import('composites/landing/Desktop'));
const Mobile = dynamic(() => import('composites/landing/Mobile'));

const title = 'Responsive rendering - Next.js Conf';
const description = 'In this talk we are going to talk on ways to optimize your assets load time by separating your components in a clear way, mobile, tablet and desktop or even views that are only useful for bots.';
const url = 'www.armando.mx';

export default function Home({ isMobile, isBot }) {
  return (
    <>
      <Head>
        <title>Responsive Renderding</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="Next.js conf 2020" />
        <meta
          property="og:image"
          content="/seo-card.jpg"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta name="twitter:site" content="@manduks" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="/seo-card.jpg"
        />
        <meta name="twitter:url" content={url} />
      </Head>
      {!isBot ? (isMobile ? <Mobile /> : <Desktop />) : null}
    </>
  );
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      isMobile: isMobile(req),
      isBot: isBot(req), // dont render extra data if is a bot
    },
  }
}