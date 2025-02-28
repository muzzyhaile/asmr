import React, { useState } from 'react';
import { Search, Music } from 'lucide-react';
import { channels, categories } from '../data/channels';
import { ChannelCard } from '../components/ChannelCard';

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredChannels = channels.filter(channel => {
    const matchesSearch = channel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         channel.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || channel.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupChannelsByPlatform = (channels: typeof filteredChannels) => {
    const grouped: { [key: string]: typeof filteredChannels } = {};
    channels.forEach(channel => {
      for (const platform in channel.socialLinks) {
        if (!grouped[platform]) {
          grouped[platform] = [];
        }
        grouped[platform].push(channel);
      }
    });
    return grouped;
  };

  const groupedChannels = groupChannelsByPlatform(filteredChannels);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Music className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-800">ASMR Channel Directory</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover your perfect ASMR experience from our curated collection of top creators
          </p>
        </header>

        <div className="mb-8">
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search channels..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map(category => (
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

        {/* Platform Navigation Links */}
        <div className="flex flex-wrap gap-4 justify-center mb-8 bg-white p-4 rounded-lg shadow-sm">
          <h3 className="w-full text-center text-lg font-semibold mb-2">Jump to Platform:</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.keys(groupedChannels).map(platform => (
              <a
                key={platform}
                href={`#${platform}`}
                className="px-6 py-2 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200 transition-all font-medium flex items-center gap-2"
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(groupedChannels).map(([platform, channels]) => (
          <div id={platform} key={platform} className="border-2 border-gray-300 p-4 rounded-lg mb-8 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-4 capitalize">{platform}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {channels.map(channel => (
                <ChannelCard key={channel.name} channel={channel} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
