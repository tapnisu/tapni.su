interface AccountCardProps {
  website: string;
  username: string;
  url: string;
}

const GithubRepo = ({ username, url, website }: AccountCardProps) => {
  return (
    <>
      <div className="cursor-pointer bg-gray-900 hover:bg-gray-800 transition-colors m-2 p-8 rounded-3xl">
        <a href={url}>
          <h2 className="text-xl cursor-pointer text-white">
            {website}: {username}
          </h2>
        </a>
      </div>
    </>
  );
};

export default GithubRepo;
