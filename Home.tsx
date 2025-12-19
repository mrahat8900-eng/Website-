
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBlogPosts } from './blogService';

const Home: React.FC = () => {
  const { posts } = useBlogPosts();

  useEffect(() => {
    document.title = "AI Hub - Future of AI";
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="text-center py-20">
        <h1 className="text-6xl font-black text-white mb-6">Explore the <span className="text-purple-400">Future</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Latest insights on Artificial Intelligence and Machine Learning.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map(post => (
          <Link key={post.id} to={`/post/${post.id}`} className="group bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all">
            <img src={post.imageUrl} alt={post.imageAlt} className="aspect-video w-full object-cover group-hover:scale-105 transition-transform" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400">{post.title}</h3>
              <p className="text-slate-400 text-sm line-clamp-2">{post.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
