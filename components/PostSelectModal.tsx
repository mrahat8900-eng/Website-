
import React, { useState } from 'react';
import { BlogPost } from '../types.ts';

interface PostSelectModalProps {
  posts: BlogPost[];
  onClose: () => void;
  onSelect: (post: BlogPost) => void;
}

const PostSelectModal: React.FC<PostSelectModalProps> = ({ posts, onClose, onSelect }) => {
  const [query, setQuery] = useState('');
  const filteredPosts = posts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-800 w-full max-w-2xl rounded-2xl border border-slate-700 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Select Post</h2>
        <input value={query} onChange={e => setQuery(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white mb-4" placeholder="Search..." />
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {filteredPosts.map(post => (
            <div key={post.id} onClick={() => onSelect(post)} className="p-2 hover:bg-slate-700 cursor-pointer rounded-lg text-white">
              {post.title}
            </div>
          ))}
        </div>
        <button onClick={onClose} className="mt-4 text-slate-400">Cancel</button>
      </div>
    </div>
  );
};

export default PostSelectModal;
