import React from "react";
import Loader, { LoadingProps } from "react-loading";

export default (props: LoadingProps) => (
  <Loader type={"bubbles"} color={"#3498db"} {...props} />
);
