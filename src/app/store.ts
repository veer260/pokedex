import { configureStore } from "@reduxjs/toolkit";
import { AppSlice } from "./slices/AppSlice";
import PokemonSlice from "./slices/Pokemonslice";

const store = configureStore({
  reducer: {
    app: AppSlice.reducer,
    pokemon: PokemonSlice.reducer,
  },
});

export default store;
