export interface SetupCardProps {
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
      <div className="bg-gray-900 m-2 p-8 rounded-3xl">
        {imageURL && (
          <img src={imageURL} alt={imageAlt} class="w-full rounded-3xl p-2" />
        )}

        <h2 className="text-xl text-white">{name}</h2>

        {description && <pre className="font-sans">{description}</pre>}
      </div>
    </>
  );
};

export default SetupCard;
