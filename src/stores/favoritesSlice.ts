import { StateCreator } from "zustand";
import { Recipie } from "../types";

export type FavoritesSliceType = {
  favorites: Recipie[];
  handleClickFavorite: (recipie: Recipie) => void;
  favoriteExists: (id: Recipie["idDrink"]) => boolean;
  loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (
  set,
  get
) => ({
  favorites: [],
  handleClickFavorite: (recipie) => {
    if (get().favoriteExists(recipie.idDrink)) {
      set((state) => ({
        favorites: [
          ...state.favorites.filter(
            (favorite) => favorite.idDrink !== recipie.idDrink
          ),
        ],
      }));
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipie],
      }));
    }
    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },
  favoriteExists: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },
  loadFromStorage: () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      set({
        favorites: JSON.parse(storedFavorites),
      });
    }
  },
});
