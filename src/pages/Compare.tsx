import React, { FC } from "react";
import { Props } from "./Search";
import Wrapper from "../sections/Wrapper";

const Compare: FC<Props> = ({ styling }) => {
  return <div className={styling}>Compare</div>;
};

export default Wrapper(Compare);
