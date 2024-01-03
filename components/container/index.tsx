import styles from "./container.module.css";

export default function Container(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${styles.container} ${props.className}`} {...props}></div>
  );
}
