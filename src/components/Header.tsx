import React from "react";
import { Text } from "rebass";

let Header = ({ title = "" }: { title: string }) => (
  <Text as="h2" fontSize={5} mb={3} children={title} />
);

export default Header;
