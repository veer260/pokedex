import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PokemonsRoute } from "../../utils/Constants";

export const getInitialPokemonData = createAsyncThunk(
  "pokemon/initialData",
  async () => {
    try {
      const response = await axios.get(PokemonsRoute);
      console.log("response:", response.data.results);
    } catch (error) {
      console.log(error);
    }
  }
);
