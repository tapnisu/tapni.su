import Link from "next/link";
import styles from "./card.module.css";

export interface CardProps {
  title: string;
  image?: string;
  url?: string;
  description: string;
  comments?: string;
}

export default function Card({
  title,
  image,
  url,
  description,
  comments,
}: CardProps) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: image ? `url(${image})` : "none",
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.gradient}>
        <p>{url ? <Link href={url}>{title}</Link> : <>{title}</>}</p>

        <p>
          {description}
          <br />
          {comments}
        </p>
      </div>
    </div>
  );
}
