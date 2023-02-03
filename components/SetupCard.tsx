interface SetupCardProps {
  name: string;
  description?: string;
  imageURL?: string;
  imageAlt?: string;
}

const SetupCard = ({
  name,
  description,
  imageURL,
  imageAlt = "Image",
}: SetupCardProps) => {
  return (
    <>
      <div className="bg-gray-900 hover:bg-gray-800 transition-colors m-2 p-4 rounded-3xl">
        {imageURL && (
          <img src={imageURL} alt={imageAlt} class="w-full rounded-3xl p-2" />
        )}

        <h2 className="text-xl text-white">{name}</h2>

        {description && <pre>{description}</pre>}
      </div>
    </>
  );
};

export default SetupCard;
