import { Post } from "@/lib/blog";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all articles
        </Link>
      </div>
      <article>
        <header className="mb-8 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {post.title}
          </h1>
          <div className="flex justify-center items-center space-x-4 text-muted-foreground text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
          </div>
        </header>
        <div className="prose dark:prose-invert max-w-none">{children}</div>
      </article>
    </div>
  );
};

export default BlogPostLayout;
