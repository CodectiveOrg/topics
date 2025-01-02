"use client";

import { ReactElement, useContext } from "react";

import TopicComponent from "@/components/topic/topic.component";

import { TopicsContext } from "@/providers/topics/topics.provider";

import styles from "./groups.module.css";

export default function GroupsComponent(): ReactElement {
  const { groups } = useContext(TopicsContext);

  return (
    <div className={styles.groups}>
      {groups.map((group) => (
        <section key={group.title} className={styles.group}>
          <h2>{group.title}</h2>
          <ul className={styles.topics}>
            {group.topics.map((topic) => (
              <li key={topic.title}>
                <TopicComponent topic={topic} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
