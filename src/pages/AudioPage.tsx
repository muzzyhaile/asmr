import React, { useState } from 'react';
import { Search, Music, Clock, User } from 'lucide-react';
import { audioPosts, audioCategories } from '../data/audio-posts';
import { Helmet } from 'react-helmet';

export function AudioPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = audioPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Helmet>
        <title>ASMR Audio Collection | Relaxing Sounds for Sleep and Relaxation</title>
        <meta name="description" content="Discover high-quality ASMR audio: Whispers, Nature sounds, Triggers, Ambient tracks, Sleep aids, and Meditation. Find your perfect relaxation soundtrack." />
        <meta name="keywords" content="ASMR, audio, relaxation, sleep, sounds, triggers, nature sounds, ambient, meditation, whispers" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Music className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-800">ASMR Audio Collection</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in our curated collection of high-quality ASMR audio experiences
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-sm">
            Explore our diverse library featuring soothing <strong>Whispers</strong>, calming <strong>Nature</strong> sounds, satisfying <strong>Triggers</strong>, relaxing <strong>Ambient</strong> tracks, and guided <strong>Meditation</strong> sessions perfect for <strong>Sleep</strong> and deep relaxation.
          </p>
        </header>

        <div className="mb-8">
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search audio..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Browse by Category</h2>
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {audioCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-purple-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={16} />
                    {post.creator}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <audio 
                  controls 
                  className="w-full"
                  src={post.audioUrl}
                >
                  Your browser does not support the audio element.
                </audio>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
