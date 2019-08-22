import React from "react";
import { Flex, Box, Link as ReLink } from "rebass";
import { Link as WLink } from "wouter";

type LinkProps = {
  href?: string;
  children?: any;
};
let Link = ({ href, children, ...props }: LinkProps) => (
  <ReLink
    mx={2}
    color="white"
    children={children}
    href={href}
    as={WLink}
    {...props}
  />
);

let Toolbar = () => {
  return (
    <Flex p={2} color="white" bg="black" alignItems="center">
      <Link href="/">Prisma CMS</Link>
      <Box mx="auto" />

      <Link href="/users">Users</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/profile">Profile</Link>
    </Flex>
  );
};

export default Toolbar;
