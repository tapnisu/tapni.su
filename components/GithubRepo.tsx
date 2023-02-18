interface GithubRepoProps {
  name: string;
  url: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  issues: number;
}

const GithubRepo = ({
  name,
  url,
  description,
  language,
  stars,
  forks,
  issues,
}: GithubRepoProps) => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 m-2 p-8 rounded-3xl border-2 border-gray-200 dark:border-gray-800">
        <a href={url}>
          <h2 className="text-xl cursor-pointer text-black hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400 transition-colors">
            {name}
          </h2>
        </a>

        {description}

        <div>
          {language} {stars} ★ {forks} ⸙ {issues} ⚠
        </div>
      </div>
    </>
  );
};

export default GithubRepo;
