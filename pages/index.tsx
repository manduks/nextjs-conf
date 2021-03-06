import dynamic from 'next/dynamic';
import React from "react";
import isMobile from 'lib/isMobile';
import isBot from 'lib/isBot';
import SEO from '../components/SEO';
const Desktop = dynamic(() => import('composites/landing/Desktop'));
const Mobile = dynamic(() => import('composites/landing/Mobile'));

export default function Home({ isMobile, isBot }) {
  return (
    <>
       <SEO title="Responsive Renderding SSR"/>
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