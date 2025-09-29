import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "@/lib/blog";
import BlogPostLayout from "@/components/layout/BlogPostLayout";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <NotFound />;
  }

  return (
    <BlogPostLayout post={post}>
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </BlogPostLayout>
  );
};

export default BlogPost;
