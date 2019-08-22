import React, { useState, useEffect } from "react";
import Mde from "react-mde";
import { Box, Button } from "rebass";
import Markdown from "react-markdown";
import "react-mde/lib/styles/css/react-mde-all.css";

let AddPost = () => {
  let [isPreviewing, setIsPreviewing] = useState(false);
  let [markdown, setMarkdown] = useState("");
  let [value, setValue] = useState("");
  let [selectedTab, setSelectedTab] = useState<"write" | "preview" | undefined>(
    "write"
  );

  useEffect(() => {
    setIsPreviewing(selectedTab === "preview");
  }, [selectedTab]);

  return (
    <Box>
      <Box>
        <Mde
          value={value}
          onChange={setValue}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          generateMarkdownPreview={async html => {
            setMarkdown(html);
            setIsPreviewing(true);
            return null;
          }}
        />
        <Button bg="green" mr={4} my={3}>
          Save
        </Button>
        <Button onClick={() => setValue("")} bg="black" mt={2}>
          Reset
        </Button>
      </Box>

      {isPreviewing && <Markdown escapeHtml source={markdown} />}
    </Box>
  );
};

export default AddPost;
