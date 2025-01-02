import { CategoryEnum } from "@/enums/category.enum";

export type TopicType = {
  title: string;
  category: CategoryEnum;
  descriptions?: string[];
  links?: string[];
};
