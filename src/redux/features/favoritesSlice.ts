import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const loadFavorites = (): number[] => {
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const initialState: number[] = loadFavorites();

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      if (!state.includes(action.payload)) state.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state));
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      const updateState = state.filter((id) => id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(updateState));
      return updateState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
