
import { useState, useEffect } from 'react';
import { BlogPost, ContactSettings } from '../types';

const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "Top 3 AI Image Generators to Try in 2024",
    summary: "Discover the most powerful AI image generators available today and how they are changing creative workflows.",
    content: "<p>Artificial intelligence has revolutionized how we create visual art. From photorealistic landscapes to abstract digital designs, the tools available in 2024 are nothing short of magical.</p>",
    author: "AI Expert",
    date: "2024-05-20",
    imageUrl: "https://picsum.photos/seed/ai-image/800/450",
    imageAlt: "AI generated abstract art",
    type: 'listicle',
    toolUrl: 'https://gemini.google.com/',
    items: [
      { id: 'item-1', title: 'Midjourney v6', content: 'Unmatched artistic quality and texture.', imageUrl: 'https://picsum.photos/seed/mj/400/300' },
      { id: 'item-2', title: 'DALL-E 3', content: 'Incredible instruction following and logic.', imageUrl: 'https://picsum.photos/seed/dalle/400/300' },
      { id: 'item-3', title: 'Stable Diffusion XL', content: 'Open-source flexibility and control.', imageUrl: 'https://picsum.photos/seed/sd/400/300' },
    ]
  },
  {
    id: '2',
    title: "Getting Started with the Gemini API",
    summary: "A comprehensive guide for developers to integrate Google's most capable AI models into their applications.",
    content: "<p>The Gemini API provides a simple yet powerful interface for interacting with multimodal models. In this guide, we'll walk through setting up your environment and making your first request.</p><strong>Key Takeaways:</strong><ul><li>Authentication basics</li><li>Prompt design patterns</li><li>Handling multimodal inputs</li></ul>",
    author: "Dev Rel",
    date: "2024-05-15",
    imageUrl: "https://picsum.photos/seed/gemini/800/450",
    imageAlt: "Digital code on screen with AI logo",
    type: 'standard',
    youtubeId: 'dQw4w9WgXcQ',
    toolUrl: 'https://ai.google.dev/'
  },
  {
    id: '3',
    title: "Advanced Prompt Engineering Techniques",
    summary: "Master the art of prompting to get precise and high-quality outputs from large language models.",
    content: "<p>Prompting is as much an art as it is a science. By understanding few-shot prompting and chain-of-thought reasoning, you can significantly improve model performance.</p>",
    author: "Prompt Master",
    date: "2024-05-10",
    imageUrl: "https://picsum.photos/seed/prompts/800/450",
    imageAlt: "Abstract representation of neural connections",
    type: 'standard',
    toolUrl: 'https://chatgpt.com/'
  },
  {
    id: '4',
    title: "How AI is Revolutionizing Web Development",
    summary: "From Copilot to automated UI generation, see how AI is accelerating the development lifecycle.",
    content: "<p>Modern web development is increasingly collaborative—not just between humans, but with AI assistants. We're seeing tools that can generate entire boilerplate structures in seconds.</p>",
    author: "Full Stack Gal",
    date: "2024-05-05",
    imageUrl: "https://picsum.photos/seed/webdev/800/450",
    imageAlt: "A developer working with an AI assistant",
    type: 'standard'
  }
];

const DEFAULT_SETTINGS: ContactSettings = {
  email: 'contact@aihub.com',
  youtubeChannels: [
    { id: '1', name: 'Google Developers', url: 'https://www.youtube.com/@GoogleDevelopers' }
  ]
};

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const stored = localStorage.getItem('ai_hub_posts');
    return stored ? JSON.parse(stored) : INITIAL_POSTS;
  });

  const savePosts = (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem('ai_hub_posts', JSON.stringify(newPosts));
  };

  const addPost = (post: BlogPost) => {
    savePosts([post, ...posts]);
  };

  const updatePost = (post: BlogPost) => {
    savePosts(posts.map(p => p.id === post.id ? post : p));
  };

  return { posts, addPost, updatePost };
};

export const useSiteSettings = () => {
  const [settings, setSettings] = useState<ContactSettings>(() => {
    const stored = localStorage.getItem('ai_hub_settings');
    return stored ? JSON.parse(stored) : DEFAULT_SETTINGS;
  });

  const saveSettings = (newSettings: ContactSettings) => {
    setSettings(newSettings);
    localStorage.setItem('ai_hub_settings', JSON.stringify(newSettings));
  };

  return { settings, saveSettings };
};
