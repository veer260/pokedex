import React, { FC } from "react";
import Wrapper from "../sections/Wrapper";
export type Props = {
  styling: string;
};

const Search: FC<Props> = ({ styling }) => {
  return <div className={styling}>Search</div>;
};

export default Wrapper(Search);
