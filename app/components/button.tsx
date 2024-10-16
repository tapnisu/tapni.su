import clsx from "clsx";

import "./button.css";

export function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
  return <button className={clsx("button", props.className)} {...props} />;
}
