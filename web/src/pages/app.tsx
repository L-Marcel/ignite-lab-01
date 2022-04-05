import { getAccessToken, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps, NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = withPageAuthRequired();

export default Home;