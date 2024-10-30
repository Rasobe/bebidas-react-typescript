import { z } from "zod";
import {
  CategoriesAPIResponseSchema,
  DrinkAPIResponseSchema,
  DrinksAPIResponseSchema,
  RecipeAPIResponseSchema,
  SearchFiltersSchema,
} from "../utils/recipies-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type Drinks = z.infer<typeof DrinksAPIResponseSchema>;
export type Drink = z.infer<typeof DrinkAPIResponseSchema>;
export type Recipie = z.infer<typeof RecipeAPIResponseSchema>;
export type SearchFilters = z.infer<typeof SearchFiltersSchema>;
