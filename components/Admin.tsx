
import React, { useState } from 'react';
import { useBlogPosts, useSiteSettings } from '../services/blogService';
import { BlogPost, PostType } from '../types.ts';
import { generateSummary, generateContent } from '../services/geminiService';
import YoutubeModal from './YoutubeModal';
import PostSelectModal from './PostSelectModal';

const Admin: React.FC = () => {
  const { posts, addPost } = useBlogPosts();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('https://picsum.photos/seed/new/800/450');

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title,
      summary,
      content,
      imageUrl,
      imageAlt: title,
      type: 'standard',
      author: 'Admin',
      date: new Date().toISOString().split('T')[0],
    };
    addPost(newPost);
    alert("Post Published!");
    setTitle('');
    setSummary('');
    setContent('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
      <form onSubmit={handleSubmitPost} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 space-y-6">
        <input 
          required 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white" 
          placeholder="Post Title" 
        />
        <textarea 
          required 
          value={summary} 
          onChange={e => setSummary(e.target.value)} 
          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white" 
          placeholder="Summary" 
        />
        <textarea 
          required 
          value={content} 
          onChange={e => setContent(e.target.value)} 
          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white h-40" 
          placeholder="HTML Content" 
        />
        <button type="submit" className="w-full bg-purple-600 py-4 rounded-xl font-bold text-white hover:bg-purple-700 transition-colors">
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default Admin;
