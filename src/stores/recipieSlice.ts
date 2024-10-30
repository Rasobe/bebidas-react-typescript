import { StateCreator } from "zustand";
import {
  getCategories,
  getFullCocktailDetailsById,
  getRecipies,
} from "../services/RecipieService";
import { Categories, Drinks, Recipie, SearchFilters } from "../types";

export type RecipieSliceType = {
  categories: Categories;
  drinks: Drinks;
  recipie: Recipie;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipies: (searchFilters: SearchFilters) => Promise<void>;
  selectRecipie: (id: string) => Promise<void>;
  closeModal: () => void;
};

export const createRecipieSlice: StateCreator<RecipieSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  recipie: {} as Recipie,
  modal: false,
  fetchCategories: async () => {
    const categories = await getCategories();
    set({ categories });
  },
  searchRecipies: async (filters) => {
    console.log(filters);
    const recipies = await getRecipies(filters);
    set({ drinks: recipies });
  },
  selectRecipie: async (id) => {
    const recipie = await getFullCocktailDetailsById(id);
    set({ recipie, modal: true });
  },
  closeModal: () => set({ recipie: {} as Recipie, modal: false }),
});
