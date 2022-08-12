import type { NextPage } from "next";
import Head from "next/head";

import { HeadPartytown } from "@/components";
import { MainPage } from "@/features";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <HeadPartytown debug={true} forwardArray={["gtag"]} />
      </Head>
      <MainPage />
    </>
  );
};

export default Home;
