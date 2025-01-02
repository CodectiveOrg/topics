import GroupsComponent from "@/components/groups/groups.component";

import styles from "./page.module.css";
import TopicsProvider from "@/providers/topics/topics.provider";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello, friend!</h1>
      <TopicsProvider>
        <GroupsComponent />
      </TopicsProvider>
    </div>
  );
}
