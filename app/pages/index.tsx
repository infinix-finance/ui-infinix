import type { NextPage } from "next";
import { Container, Typography, Box } from "@mui/material";
import Default from "@/components/Templates/Default";
import Head from "next/head";
import { HeadPartytown } from "@/components/Atoms/HeadPartytown";

const Home: NextPage = () => {
  return (
    <Default>
      <Head>
        <HeadPartytown debug={true} forwardArray={["gtag"]} />
      </Head>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to UI Template app
          </Typography>
        </Box>
      </Container>
    </Default>
  );
};

export default Home;
