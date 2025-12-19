
import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogPosts } from '../services/blogService.ts';

const BlogPostView: React.FC = () => {
  const { id } = useParams();
  const { posts } = useBlogPosts();

  const post = useMemo(() => posts.find(p => p.id === id), [posts, id]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - AI Hub`;
    }
  }, [post]);

  if (!post) return <div className="text-center py-20 text-white">Post not found.</div>;

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 animate-fade-in">
      <h1 className="text-4xl font-black text-white mb-6">{post.title}</h1>
      <img src={post.imageUrl} alt={post.imageAlt} className="w-full rounded-2xl mb-8 border border-slate-700" />
      <div className="prose prose-invert max-w-none text-slate-300" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
};

export default BlogPostView;
