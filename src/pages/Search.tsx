import React, { FC, useEffect } from "react";
import Wrapper from "../sections/Wrapper";
import { useDispatch } from "react-redux";
import { getInitialPokemonData } from "../app/reducers/getInitialPokemonData";
export type Props = {
  styling: string;
};

const Search: FC<Props> = ({ styling }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);
  return <div className={styling}>Search</div>;
};

export default Wrapper(Search);
