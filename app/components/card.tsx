import clsx from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  image?: string;
  href?: string;
  description: string;
  comments?: string;
}

export function Card(props: CardProps) {
  return (
    <div className={clsx(props.className)} {...props}>
      <div>
        {props.image ? <img src={props.image} alt={props.title} /> : null}

        <div>
          <div>
            {props.href ? <a href={props.href}>{props.title}</a> : props.title}
          </div>

          <p>{props.description}</p>

          <div>{props.comments}</div>
        </div>
      </div>
    </div>
  );
}
