import { useLazyQuery } from "react-apollo";
import gql from "graphql-tag";

interface Login {
  user: {
    id: string;
  };
}

interface LoginVariables {
  where: {
    email: string;
  };
}

let login = gql`
  query($where: UserWhereUniqueInput!) {
    user(where: $where) {
      id
    }
  }
`;

export let useLogin = () => useLazyQuery<Login, LoginVariables>(login);
