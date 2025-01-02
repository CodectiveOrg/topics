import TopicsComponent from "@/components/topics/topics.component";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello, friend!</h1>
      <TopicsComponent />
    </div>
  );
}
