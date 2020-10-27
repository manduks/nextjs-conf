import Head from "next/head";
import dynamic from "next/dynamic";
import React from "react";
import isMobile from "lib/isMobile";
import SEO from "../components/SEO";
import isBot from "lib/isBot";

const Desktop = dynamic(() => import("composites/landing/Desktop"));
const Mobile = dynamic(() => import("composites/landing/Mobile"));

export default function Home() {
  const isMobileDevice = isMobile();
  const isBotDevice = isBot(); // dont render extra data if is a bot
  return (
    <>
      <SEO title="Responsive Renderding SGR"/>
      {!isBotDevice ? isMobileDevice ? <Mobile /> : <Desktop /> : null}
    </>
  );
}
