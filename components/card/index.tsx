import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

export interface CardProps {
  title: string;
  image?: string | StaticImport;
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
    <div className={styles.card}>
      {image ? (
        <Image
          src={image}
          alt={title}
          className={styles.image}
          width={768}
          placeholder="blur"
        />
      ) : (
        <></>
      )}

      <div className={styles.text}>
        <div>{url ? <Link href={url}>{title}</Link> : <>{title}</>}</div>

        <p>{description}</p>

        <div className={styles.comments}>{comments}</div>
      </div>
    </div>
  );
}
