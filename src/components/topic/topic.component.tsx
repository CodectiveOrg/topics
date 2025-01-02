import { ReactElement } from "react";

import { TopicType } from "@/types/topic.type";

import styles from "./topic.module.css";

type Props = {
  topic: TopicType;
};

export default function TopicComponent({ topic }: Props): ReactElement {
  return <div className={styles.topic}>{topic.title}</div>;
}
