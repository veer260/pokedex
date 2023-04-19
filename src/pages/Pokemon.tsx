import React, { FC } from "react";
import { Props } from "./Search";
import Wrapper from "../sections/Wrapper";

const Pokemon: FC<Props> = ({ styling }) => {
  return <div className={styling}>Pokemon</div>;
};

export default Wrapper(Pokemon);
