import { useQuery } from "react-apollo";
import gql from "graphql-tag";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface GetAllUsersData {
  users: User[];
}

export let getAllUsers = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

export let useGetAllUsers = () => useQuery<GetAllUsersData>(getAllUsers);
