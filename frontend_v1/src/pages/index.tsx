import HeaderSimple from "@/components/HeaderSimple";
import LoginAndRegister from "@/components/LoginAndRegister";
import Head from "next/head";




export default function Home() {
  return (
    <div>
      <Head>
        <title>DTAP V2</title>
        <meta name="description" content="login/register" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSimple />
      <main>
        <div className="flex justify-center self-center mt-24">
          <LoginAndRegister />
        </div>
      </main>
    </div>
  );
}

