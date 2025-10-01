import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/lib/blog";
import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Our Blog
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Stay up-to-date with the latest news, insights, and developments from
          Snufi Pharmaceutical.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <Card className="p-6 hover-lift flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
              <h2 className="text-xl font-bold text-foreground mb-3 leading-tight">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-4 flex items-center text-xs text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
