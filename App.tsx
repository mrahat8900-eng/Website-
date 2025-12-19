
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import BlogPostView from './BlogPostView';
import Admin from './Admin';
import Contact from './Contact';

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path ? 'text-purple-400' : 'text-slate-300 hover:text-purple-400';

  return (
    <header className="sticky top-0 z-50 bg-slate-800/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-purple-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-purple-600/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">AI Hub</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link to="/" className={`text-sm font-bold tracking-wide transition-colors ${isActive('/')}`}>Home</Link>
          <Link to="/contact" className={`text-sm font-bold tracking-wide transition-colors ${isActive('/contact')}`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-slate-800/50 border-t border-slate-700/50 pt-16 pb-8 mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-sm text-slate-400 leading-relaxed">
        &copy; {new Date().getFullYear()} AI Hub. Exploring the boundaries of Artificial Intelligence.
      </p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col selection:bg-purple-500/30">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<BlogPostView />} />
            <Route path="/post/:id/:itemId" element={<BlogPostView />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
