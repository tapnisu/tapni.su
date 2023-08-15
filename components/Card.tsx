import Link from "next/link";

export interface CardProps {
  title: string;
  image?: string;
  url?: string;
  theme?: string;
  description: string;
  comments?: string;
}

export default function Card({
  title,
  image,
  url,
  description,
  comments,
  theme,
}: CardProps) {
  return (
    <div
      className={
        "m-4 bg-main-100 dark:bg-main-900 rounded-xl border-2 border-main-100 dark:border-main-900"
      }
      style={{
        backgroundImage: image ? `url(${image})` : "none",
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`${
          theme == undefined
            ? "text-main-950 dark:text-main-100"
            : `bg-gradient-to-b from-transparent ${
                theme == "light"
                  ? "text-main-950 to-main-100 "
                  : "text-main-50 to-main-900"
              }`
        } p-4 rounded-xl`}
      >
        {url ? (
          <Link
            href={url}
            className="text-xl cursor-pointer hover:text-accent-600 dark:hover:text-accent-500 transition-colors underline underline-offset-4"
          >
            {title}
          </Link>
        ) : (
          <h2 className="text-xl">{title}</h2>
        )}

        <p>
          {description}
          <br />
          {comments}
        </p>
      </div>
    </div>
  );
}
