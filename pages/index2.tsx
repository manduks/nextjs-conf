import Head from "next/head";
import dynamic from 'next/dynamic';
import React from "react";
import isMobile from 'lib/isMobile';

const Desktop = dynamic(() => import('composites/landing/Desktop'));
const Mobile = dynamic(() => import('composites/landing/Mobile'));

export default function Home() {
    const isMobileDevice = isMobile();
    console.log(isMobileDevice);

    return (
        <div>
            <Head>
                <title>Responsive Renderding</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {isMobileDevice ? <Mobile /> : <Desktop />}
        </div>
    );
}
