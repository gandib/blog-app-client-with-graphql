import React from "react";
import PostCard from "./PostCard";
import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
  query allPosts {
    posts {
      author {
        name
      }
      id
      title
      published
      content
      createdAt
    }
  }
`;

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return (
    <div>
      <h1 className="text-center font-bold text-5xl my-4 pb-4">Posts</h1>
      <hr />
      <div className="flex flex-wrap">
        {data?.posts?.map((post) => (
          <PostCard post={post} key={post.id}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Posts;
