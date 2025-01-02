import { ReactElement } from "react";

import TopicComponent from "@/components/topic/topic.component";

import { topics } from "@/data/topics.data";

import styles from "./topics.module.css";

export default function TopicsComponent(): ReactElement {
  return (
    <ul className={styles.topics}>
      {topics.map((topic) => (
        <li key={topic.title}>
          <TopicComponent topic={topic} />
        </li>
      ))}
    </ul>
  );
}
