import clsx from "clsx";

import "./card.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  image?: string;
  "image-width"?: number;
  "image-height"?: number;
  "image-color"?: string;
  href?: string;
  description: string;
  comments?: string;
}

export function Card(props: CardProps) {
  return (
    <div className={clsx("card__base", props.className)} {...props}>
      {props.image ? (
        <img
          src={props.image}
          className="card__image"
          width={props["image-width"]}
          height={props["image-height"]}
          alt={props.title}
          style={{
            aspectRatio:
              props["image-width"] != null && props["image-height"] != null
                ? props["image-width"] / props["image-height"]
                : undefined,
            backgroundColor: props["image-color"],
          }}
        />
      ) : null}

      <div>
        <div>
          {props.href ? <a href={props.href}>{props.title}</a> : props.title}
        </div>

        <p className="card__text">{props.description}</p>

        <div className="card__comments">{props.comments}</div>
      </div>
    </div>
  );
}
