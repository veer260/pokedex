import { createSlice } from "@reduxjs/toolkit";
import { PokemonTypeInitialState } from "../../utils/type";

const initialState: PokemonTypeInitialState = {
  allPokemon: undefined,
};

const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
});

export const {} = PokemonSlice.actions;

export default PokemonSlice;
