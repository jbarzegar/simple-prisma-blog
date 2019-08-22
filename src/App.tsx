import React from "react";
import { Flex } from "rebass";
import "styles/typography.css";

import Toolbar from "components/Toolbar";
import Router from "views";

const App: React.FC = () => {
  return (
    <>
      <Toolbar />
      <Flex m={4} flexDirection="column">
        <Router />
      </Flex>
    </>
  );
};

export default App;
