import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hulu</title>
      </Head>
      <Header />
      <Nav />
      {/* NavBar */}
      {/* Results */}
    </div>
  );
};

export default Home;
