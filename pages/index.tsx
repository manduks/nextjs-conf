import Head from "next/head";
import dynamic from 'next/dynamic';
import React from "react";
import isMobile from 'lib/isMobile';

const Desktop = dynamic(() => import('composites/landing/Desktop'));
const Mobile = dynamic(() => import('composites/landing/Mobile'));

export default function Home({ isMobile }) {
  console.log(isMobile);

  return (
    <div>
      <Head>
        <title>Responsive Renderding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      isMobile: isMobile(req),
    },
  }
}