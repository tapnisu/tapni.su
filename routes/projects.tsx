import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import GithubRepo from "../components/GithubRepo.tsx";
import Navbar from "../components/Navbar.tsx";

type Repo = {
  id: number;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks: number;
  open_issues_count: number;
};

export const handler: Handlers<Repo[]> = {
  async GET(_, ctx) {
    const request = await fetch(`https://api.github.com/users/tapnisu/repos`);
    const repos: Repo[] = (await request.json()).filter((repo: Repo) =>
      [
        "tapnisu/tapciify",
        "tapnisu/website",
        "tapnisu/forwarding-discord-telegram",
        "tapnisu/ytscc",
        "tapnisu/shimarin",
        "tapnisu/tsukinose",
      ].includes(repo.full_name)
    );

    return ctx.render(repos);
  },
};

export default function Projects({ data }: PageProps<Repo[]>) {
  return (
    <>
      <Head>
        <title>Tapnisu - Projects</title>
        <meta name="description" content="Projects made by tapnisu (me)" />
        <link rel="stylesheet" href="/globals.css" type="text/css" />
      </Head>

      <div className="bg-black text-white min-h-screen flex flex-col justify-between">
        <Navbar />

        <div className="flex flex-col justify-center items-center flex flex-col justify-between">
          <h1 className="text-3xl text-center">My projects</h1>
          <div className="grid p-4 grid-cols-1 md:grid-cols-2">
            {data?.map((repo: Repo) => (
              <GithubRepo
                name={repo.full_name}
                url={repo.html_url}
                description={repo.description}
                language={repo.language}
                stars={repo.stargazers_count}
                forks={repo.forks}
                issues={repo.open_issues_count}
                key={repo.id}
              />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
