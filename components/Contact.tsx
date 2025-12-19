
import React, { useEffect } from 'react';
import { useSiteSettings } from '../services/blogService';

const Contact: React.FC = () => {
  const { settings } = useSiteSettings();

  useEffect(() => {
    document.title = "Contact Us - AI Hub";
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-extrabold text-white mb-6">Get in Touch</h1>
      <p className="text-lg text-slate-400 mb-8">Email us at: <span className="text-purple-400 font-bold">{settings.email}</span></p>
    </div>
  );
};

export default Contact;
