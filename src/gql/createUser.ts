import { useMutation } from "react-apollo";
import gql from "graphql-tag";

interface CreateUser {
  name: string;
  email: string;
}

interface CreateUserMutation {
  data: CreateUser;
}

let createUser = gql`
  mutation createUser($data: UserCreateInput!) {
    createUser(data: $data) {
      id
      email
    }
  }
`;

export let useCreateUser = () =>
  useMutation<CreateUser, CreateUserMutation>(createUser);
