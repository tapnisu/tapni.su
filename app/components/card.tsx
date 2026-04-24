import clsx from "clsx";
import { Button } from "./button";
import { Link } from "react-router";

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

      <div className="card__content">
        {props.href ? <Link to={props.href}>{props.title}</Link> : props.title}
        <p>{props.description}</p>

        <div className="card__comments">{props.comments}</div>

        {props.href ? (
          <Link to={props.href}>
            <Button
              style={{
                width: "100%",
              }}
            >
              Перейти
            </Button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
