
import React, { useState } from 'react';
import { searchYoutube } from './youtubeService';
import { YoutubeSearchResult } from '../types.ts';

interface YoutubeModalProps {
  onClose: () => void;
  onSelect: (id: string) => void;
}

const YoutubeModal: React.FC<YoutubeModalProps> = ({ onClose, onSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<YoutubeSearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    const res = await searchYoutube(query);
    setResults(res);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-800 w-full max-w-2xl rounded-2xl border border-slate-700 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Search YouTube</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">Close</button>
        </div>
        <form onSubmit={handleSearch} className="flex space-x-2 mb-4">
          <input value={query} onChange={e => setQuery(e.target.value)} className="flex-grow bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white" />
          <button type="submit" className="bg-purple-600 px-4 py-2 rounded-xl font-bold text-white">Search</button>
        </form>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {results.map(res => (
            <div key={res.id} onClick={() => onSelect(res.id)} className="p-2 hover:bg-slate-700 cursor-pointer rounded-lg text-white">
              {res.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeModal;
