import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  image?: string | StaticImport;
  url?: string;
  description: string;
  comments?: string;
}

export default function Card(props: CardProps) {
  return (
    <div {...props}>
      <div className={styles.card}>
        {props.image ? (
          <Image
            src={props.image}
            alt={props.title}
            className={styles.image}
            placeholder="blur"
          />
        ) : null}

        <div className={styles.text}>
          <div>
            {props.url ? (
              <Link href={props.url}>{props.title}</Link>
            ) : (
              props.title
            )}
          </div>

          <p>{props.description}</p>

          <div className={styles.comments}>{props.comments}</div>
        </div>
      </div>
    </div>
  );
}
