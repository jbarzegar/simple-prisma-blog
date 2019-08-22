import { useMutation } from "react-apollo";
import gql from "graphql-tag";

let createPost = gql`
  mutation($data: PostCreateInput!) {
    createPost(data: $data) {
      id
    }
  }
`;

interface CreatePost {
  title: string;
  content: string;
}

interface CreatePostMutationVariables {
  data: CreatePost;
}

export let useCreatePost = () =>
  useMutation<CreatePost, CreatePostMutationVariables>(createPost);
