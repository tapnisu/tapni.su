import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import SetupCard, { SetupCardProps } from "../components/SetupCard.tsx";

export default function Setup() {
  return (
    <>
      <Head>
        <title>Tapnisu - Setup</title>
        <link rel="stylesheet" href="/globals.css" type="text/css" />
      </Head>

      <div className="bg-black text-white min-h-screen flex flex-col justify-between">
        <Navbar />

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center">My setup</h1>
          <div className="grid p-4 grid-cols-1 md:grid-cols-2">
            {[
              {
                name: "PC",
                description:
                  "My PC, standing on a chair\nSpecs:\nIntel Core i9 11900KF\nRAM 64GB (16GB*4)\nRTX 3080 12GB",
              },
              {
                name: "Keyboard",
                description:
                  "Keychron K2 V2\nGateron Red Switches.\nToilet paper modded btw.",
              },
              {
                name: "Phone",
                description: "Samsung m32.",
              },
            ].map((info: SetupCardProps) => (
              <SetupCard name={info.name} description={info.description} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
