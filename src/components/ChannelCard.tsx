import React from 'react';
import { Link } from 'react-router-dom';
import { Volume2, Mic2, Headphones, Paintbrush, Coffee, Moon, Sparkles } from 'lucide-react';
import { ASMRChannel } from '../types';

interface ChannelCardProps {
  channel: ASMRChannel;
}

export const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Triggers": return <Volume2 className="w-5 h-5" />;
    case "Roleplay": return <Mic2 className="w-5 h-5" />;
    case "Traditional": return <Headphones className="w-5 h-5" />;
    case "Creative": return <Paintbrush className="w-5 h-5" />;
    case "Food": return <Coffee className="w-5 h-5" />;
    case "Spiritual": return <Moon className="w-5 h-5" />;
    default: return <Sparkles className="w-5 h-5" />;
  }
};

export function ChannelCard({ channel }: ChannelCardProps) {
  return (
    <Link
      to={`/channel/${encodeURIComponent(channel.name)}`}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        src={channel.thumbnail}
        alt={channel.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{channel.name}</h3>
          <span className="text-sm text-purple-600 font-medium">{channel.subscribers} subscribers</span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          {getCategoryIcon(channel.category)}
          <span className="text-sm text-gray-600">{channel.category}</span>
        </div>
        <p className="text-gray-600">{channel.description}</p>
      </div>
    </Link>
  );
}