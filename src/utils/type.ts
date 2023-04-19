export interface AppTypeInitialState {}
export interface PokemonTypeInitialState {
  allPokemon: undefined | GenericPokemonType[];
}

export interface GenericPokemonType {
  name: string;
  url: string;
}
