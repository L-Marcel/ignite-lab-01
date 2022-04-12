import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { ssrGetProducts, useMe } from "../../graphql/generated/page";
import { withApollo } from "../../lib/withApollo";

function Home(props: any) {
  const { data: me } = useMe();

  return (
    <div className="text-violet-500">
      <pre>
        {JSON.stringify(me, null, 2)}
      </pre>
      <Link href="/api/auth/logout">Logout</Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async(ctx) => {
    //getServerPageGetProducts({}, ctx);

    return {
      props: {}
    };
  } 
});

export default withApollo(
  ssrGetProducts.withPage()(Home)
);