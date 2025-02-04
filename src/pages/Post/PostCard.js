import React from "react";
import "./PostCard.css";

const PostCard = ({ post }) => {
  return (
    <div className="border w-96 m-4 p-4 rounded-md border-black-400">
      <h3 className="text-lg font-bold">{post.title}</h3>
      <div className="text-state-500 text-sm text-gray-700 flex justify-between py-2">
        <p>Author Name:{post.author.name}</p>
        <p>Date: {post.createdAt}</p>
      </div>
      <p className="text-sm">{post.content}</p>
    </div>
  );
};

export default PostCard;
