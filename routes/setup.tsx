import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import SetupCard from "../components/SetupCard.tsx";

export default function Setup() {
  return (
    <>
      <Head>
        <title>Tapnisu - Setup</title>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="bg-black text-white min-h-screen flex flex-col justify-between">
        <Navbar />

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center">My setup</h1>
          <div className="grid p-4 grid-cols-1 md:grid-cols-2">
            <SetupCard
              name="PC"
              description={
                "My PC, standing on a chair\nSpecs:\nIntel Core i9 11900KF\nRAM 64GB (16GB*4)\nRTX 3080 12GB"
              }
            />
            <SetupCard
              name="Keyboard: Keychron K2"
              description={"Gateron Red Switches.\nThats all."}
            />
            <SetupCard
              name="Visual Studio Code setup"
              description={"163 extensions.\nUses 1.793GB memory right now."}
              imageURL="/vscode.png"
              imageAlt="Visual Studio Code screenshot"
            />
            <SetupCard
              name="Windows 11"
              description={"Bloated."}
              imageURL="/windows11.png"
              imageAlt="Just Windows 11 screenshot"
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
