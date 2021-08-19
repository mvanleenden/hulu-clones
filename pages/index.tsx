import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import { Header, Nav, Results } from "../components";
import { MovieResponse } from "../models/MovieResponse";
import requests from "../utils/requests";

type Props = {
  results: MovieResponse[];
};

const Home: NextPage<Props> = ({ results }) => {
  return (
    <div>
      <Head>
        <title>Hulu</title>
      </Head>
      <Header />
      <Nav />
      <Results data={results} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre as string | undefined;

  const url = `https://api.themoviedb.org/3${
    genre ? requests[genre]?.url : requests["fetchTrending"].url
  }`;

  const request = await fetch(url).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
};

export default Home;
