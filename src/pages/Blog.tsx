import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/lib/blog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cardVariants, sectionVariants } from "@/lib/animations";

type SortOrder = 'newest' | 'oldest' | 'title';

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tags = useMemo(() => {
    const allTags = blogPosts.flatMap((post) => post.tags);
    return ["All", ...Array.from(new Set(allTags))];
  }, []);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;
    if (selectedTag && selectedTag !== "All") {
      posts = posts.filter((post) => post.tags.includes(selectedTag));
    }

    // Sort posts
    const sorted = [...posts].sort((a, b) => {
      switch (sortOrder) {
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'newest':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return sorted;
  }, [selectedTag, sortOrder]);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  // Prepare posts content separately to avoid complex JSX nesting
  const postsContent = filteredPosts.length === 0 ? (
    <motion.div className="col-span-full text-center py-12">
      <p className="text-muted-foreground">No posts found matching your criteria.</p>
    </motion.div>
  ) : (
    filteredPosts.map((post, index) => (
      <motion.div
        key={post.id}
        variants={cardVariants}
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Link to={`/blog/${post.id}`} className="h-full block">
          <Card className="p-6 flex flex-col h-full">
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
      </motion.div>
    ))
  );

  return (
    <div>
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="py-12 bg-gradient-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              Our Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Stay up-to-date with the latest news, insights, and developments
              from Snufi Pharmaceutical.
            </motion.p>
          </div>
        </div>
      </motion.section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="space-y-6 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "secondary"}
                onClick={() => handleTagClick(tag)}
                className="cursor-pointer text-sm px-3 py-1"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
            <Button
              variant={sortOrder === 'newest' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSortOrder('newest')}
            >
              <ArrowUpDown className="h-3 w-3 mr-1" />
              Newest
            </Button>
            <Button
              variant={sortOrder === 'oldest' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSortOrder('oldest')}
            >
              Oldest
            </Button>
            <Button
              variant={sortOrder === 'title' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSortOrder('title')}
            >
              Title (A-Z)
            </Button>
          </div>
        </div>
        <div className="mb-6 text-center text-sm text-muted-foreground">
          Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsContent}
        </div>
      </div>
    </div>
  );
};

export default Blog;