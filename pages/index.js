import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="text-5xl font-bold text-purple-500">Hello world!</h1>
      </Layout>

      <footer>footer</footer>
    </div>
  );
}
