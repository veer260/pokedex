import React, { FC } from "react";
import Wrapper from "../sections/Wrapper";
import { Props } from "./Search";

const About: FC<Props> = ({ styling }) => {
  return <div className={styling}>About</div>;
};

export default Wrapper(About);
