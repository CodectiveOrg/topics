import { CategoryEnum } from "@/enums/category.enum";

import { CategoryType } from "@/types/category.type";

export const categories: Record<CategoryEnum, CategoryType> = {
  [CategoryEnum.REFRONT]: {
    title: "Refront",
  },
  [CategoryEnum.TELL_ME_HOW]: {
    title: "Tell Me How",
  },
  [CategoryEnum.HOW_TO_GET_A_JOB]: {
    title: "How to Get a Job",
  },
  [CategoryEnum.CLEAN_CODE]: {
    title: "Clean Code",
  },
  [CategoryEnum.WHATS_UP]: {
    title: "What's Up",
  },
  [CategoryEnum.A_GOOD_BEGINNING]: {
    title: "A Good Beginning",
  },
  [CategoryEnum.ADVANCED_TOPICS]: {
    title: "Advanced Topics",
  },
  [CategoryEnum.ZERO_TO_HERO]: {
    title: "Zero to Hero",
  },
  [CategoryEnum.MAKE_IT_BOUNCE]: {
    title: "Make it Bounce",
  },
  [CategoryEnum.CONCEALED]: {
    title: "Concealed",
  },
};