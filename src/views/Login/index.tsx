import React, { useState, useEffect } from "react";
import { Box, Text, Button } from "rebass";
// @ts-ignore
import { Label, Input } from "@rebass/forms";
import { Redirect } from "wouter";

import Header from "components/Header";
import Loading from "components/Loading";

import { useLogin } from "gql/login";

let Login = () => {
  let [shouldRedirect, setShouldRedirect] = useState(false);
  let [
    login,
    { loading, error, data = { user: { id: undefined } } }
  ] = useLogin();
  let [email, setEmail] = useState("");

  useEffect(() => {
    let userId = localStorage.getItem("userId");

    if (userId) {
      setShouldRedirect(true);
    }
  }, []);

  useEffect(() => {
    if (data.user && data.user.id) {
      localStorage.setItem("userId", data.user.id);
      setShouldRedirect(true);
    }
  }, [data]);

  if (shouldRedirect) {
    return <Redirect to="/" />;
  }

  if (loading) {
    return (
      <Box p={4}>
        <Text>Logging you in...</Text>
        <Loading />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={4}>
        <Text color="red">Error</Text>
        <Text color="red">{error.message}</Text>
      </Box>
    );
  }

  return (
    <>
      <Header title="Login" />
      <Box
        as="form"
        onSubmit={async e => {
          e.preventDefault();

          await login({
            variables: {
              where: { email }
            }
          });
        }}
      >
        <Box my={3}>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
          />
        </Box>

        <Button bg={"green"} type="submit">
          Login
        </Button>
      </Box>
    </>
  );
};

export default Login;
