import { useQuery } from "react-apollo";
import gql from "graphql-tag";

interface Post {
  id: string;
  title: string;
  published: boolean;
  author: {
    name: string;
  };
}

interface AllPostsData {
  posts: Post[];
}

let getAllPosts = gql`
  query {
    posts {
      id
      title
      published
      author {
        name
      }
    }
  }
`;

export let useGetAllPosts = () => useQuery<AllPostsData>(getAllPosts);
