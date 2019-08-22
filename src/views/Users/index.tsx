import React from "react";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";
import { Flex, Box, Text, Button } from "rebass";
import { useLocation } from "wouter";
import Loading from "components/Loading";
import Header from "components/Header";
import { useGetAllUsers } from "gql/getAllUsers";

let DELETE_USER = gql`
  mutation($where: UserWhereUniqueInput!) {
    deleteUser(where: $where) {
      id
    }
  }
`;
interface DeleteUser {
  id: string;
}

interface DeleteUserVariables {
  where: DeleteUser;
}

let Users: React.FC = () => {
  let { data = { users: [] }, loading, refetch } = useGetAllUsers();
  let [deleteUser] = useMutation<DeleteUser, DeleteUserVariables>(DELETE_USER);
  let [, setLocation] = useLocation();

  return (
    <Flex flexDirection="column">
      <Flex>
        <Header title="Users" />
        <Box ml="auto">
          <Button
            bg="blue"
            variant="primary"
            css={`
              cursor: pointer;
            `}
            onClick={() => setLocation("/users/add")}
          >
            Create new User
          </Button>
        </Box>
      </Flex>
      {loading ? (
        <Loading />
      ) : !!data.users.length ? (
        data.users.map(x => (
          <Flex key={x.id}>
            <Text as="p" fontWeight="bold">
              {x.name} {x.email || "<No Email>"}
            </Text>
            <Box ml="auto">
              <Text
                onClick={async () => {
                  await deleteUser({
                    variables: {
                      where: { id: x.id }
                    }
                  });

                  refetch();
                }}
              >
                🗑
              </Text>
            </Box>
          </Flex>
        ))
      ) : (
        <Text>No users</Text>
      )}
    </Flex>
  );
};

export default Users;
