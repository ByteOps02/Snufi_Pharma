import React from "react";
import { Post } from "@/lib/blog";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostLayoutProps {
  post: Post;
  children: React.ReactNode;
}

const BlogPostLayout = ({ post, children }: BlogPostLayoutProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to Blog
        </Link>
      </div>
      <article>
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-muted-foreground text-sm">
            <div className="flex items-center">
              <Calendar className="mr-2" size={16} />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2" size={16} />
              <span>{post.readTime}</span>
            </div>
            <div>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {post.category}
              </span>
            </div>
          </div>
        </header>
        <div className="prose dark:prose-invert max-w-none">{children}</div>
      </article>
    </div>
  );
};

export default BlogPostLayout;
