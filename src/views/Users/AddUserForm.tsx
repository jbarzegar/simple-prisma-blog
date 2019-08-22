import React, { useState } from "react";
import { useLocation } from "wouter";
import { Box, Flex, Button } from "rebass";
// @ts-ignore
import { Label, Input } from "@rebass/forms";

import { useCreateUser } from "gql/createUser";

let AddUserForm = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [, setLocation] = useLocation();

  let [createUser] = useCreateUser();

  return (
    <>
      <Box
        py={3}
        as="form"
        onSubmit={async e => {
          e.preventDefault();

          await createUser({
            variables: {
              data: { name, email }
            }
          });

          setName("");
          setEmail("");
          setLocation("/users");
        }}
      >
        <Flex mx={-2} mb={3}>
          <Box width={1 / 2} px={2}>
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              id="email"
              type="email"
              placeholder="john@doe.com"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
            />
          </Box>
          <Box width={1 / 2} px={2}>
            <Label htmlFor="name">Email</Label>
            <Input
              value={name}
              id="name"
              type="text"
              placeholder="John Doe"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.currentTarget.value)
              }
            />
          </Box>
        </Flex>

        <Button
          css={`
            cursor: pointer;
          `}
          bg="blue"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default AddUserForm;
