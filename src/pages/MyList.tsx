import React, { FC } from "react";
import { Props } from "./Search";
import Wrapper from "../sections/Wrapper";

const MyList: FC<Props> = ({ styling }) => {
  return <div className={styling}>MyList</div>;
};

export default Wrapper(MyList);
