"use client";

import { createContext, PropsWithChildren, ReactElement, useMemo } from "react";
import { GroupType } from "@/types/group.type";
import { topics } from "@/data/topics.data";
import { categories } from "@/data/categories.data";

type ContextValue = {
  groups: GroupType[];
};

export const TopicsContext = createContext<ContextValue>({
  groups: [],
});

type Props = PropsWithChildren;

export default function TopicsProvider({ children }: Props): ReactElement {
  const groups = useMemo(() => {
    return categories
      .entries()
      .toArray()
      .map(([key, category]) => ({
        title: category.title,
        topics: topics
          .filter((topic) => topic.category === key)
          .sort((a, b) => a.title.localeCompare(b.title)),
      }))
      .filter((x) => x.topics.length !== 0)
      .sort((a, b) => a.title.localeCompare(b.title));
  }, []);

  return (
    <TopicsContext.Provider value={{ groups }}>
      {children}
    </TopicsContext.Provider>
  );
}
