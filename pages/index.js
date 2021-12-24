import Head from "next/head";
import LeftSection from "./../components/left-section/index";
import MiddleSection from "./../components/middle-section/index";
import RightSection from "./../components/right-section/index";

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>S N A P</title>
        <link rel="shortcut icon" href="/ui/logo.png" type="image/x-icon" />
      </Head>

      <main className="flex justify-center w-full">
        <div className="grid grid-cols-5 w-full md:mx-12 my-2 rounded-md">
          <div className="hidden lg:inline">
            <LeftSection />
          </div>
          <div className="col-span-5 lg:col-span-3">
            <MiddleSection />
          </div>
          <div className="hidden lg:inline">
            <RightSection />
          </div>
        </div>
      </main>
    </div>
  );
}
