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
          placeholder="blur"
        />
      ) : (
        <></>
      )}

      <div className={styles.text}>
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
