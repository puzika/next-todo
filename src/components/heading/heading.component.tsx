import styles from "./heading.module.scss";

type HeadingProps = {
  value: string,
  type: "small" | "medium" | "large",
}

export default function Heading({ value, type }: HeadingProps) {
  switch (type) {
    case "small":
      return <h3 className={styles.small}>{value}</h3>
    case "medium":
      return <h2 className={styles.medium}>{value}</h2>
    case "large":
      return <h1 className={styles.large}>{value}</h1>
  }
}