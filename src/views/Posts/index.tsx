import React from "react";
import { Flex, Text, Box, Button } from "rebass";
import { useLocation } from "wouter";

import Header from "components/Header";
import Loading from "components/Loading";

import { useGetAllPosts } from "gql/getAllPosts";

let Posts = () => {
  let { data = { posts: [] }, loading } = useGetAllPosts();
  let [, setLocation] = useLocation();

  return (
    <Flex flexDirection="column">
      <Flex>
        <Header title="Posts" />
        <Button
          css={`
            cursor: pointer;
          `}
          bg="blue"
          ml="auto"
          onClick={() => setLocation("/posts/add")}
        >
          Add new Post
        </Button>
      </Flex>

      {loading ? (
        <Loading />
      ) : (
        data.posts.map(x => (
          <Box key={x.id}>
            <Text as="h4" color={x.published ? "green" : "blue"}>
              {x.title}
            </Text>
            <Text as="p">{(x.author && x.author.name) || "no author"}</Text>
          </Box>
        ))
      )}
    </Flex>
  );
};

export default Posts;
