import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Youtube, Instagram, Twitter, Globe, Coffee } from 'lucide-react';
import { channels } from '../data/channels';
import { getCategoryIcon } from '../components/ChannelCard';

export function ChannelPage() {
  const { name } = useParams();
  const channel = channels.find(c => c.name === decodeURIComponent(name || ''));

  if (!channel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-red-600">Channel not found</h1>
          <Link to="/" className="text-purple-600 hover:underline flex items-center gap-2 mt-4">
            <ArrowLeft className="w-4 h-4" /> Back to directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto p-8">
        <Link to="/" className="text-purple-600 hover:underline flex items-center gap-2 mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to directory
        </Link>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="h-64 overflow-hidden">
            <img
              src={channel.thumbnail}
              alt={channel.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-3xl font-bold text-gray-800">{channel.name}</h1>
              <div className="flex items-center gap-2">
                {getCategoryIcon(channel.category)}
                <span className="text-gray-600">{channel.category}</span>
              </div>
            </div>
            <div className="flex items-center gap-6 mb-6">
              <span className="text-purple-600 font-semibold">{channel.subscribers} subscribers</span>
              <span className="text-gray-600">{channel.totalViews} total views</span>
              <span className="text-gray-600">Joined {channel.joinedDate}</span>
            </div>
            <p className="text-gray-700 mb-6">{channel.about || channel.description}</p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {channel.socialLinks?.youtube && (
                <a href={channel.socialLinks.youtube} target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-red-600">
                  <Youtube className="w-6 h-6" />
                </a>
              )}
              {channel.socialLinks?.instagram && (
                <a href={channel.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-pink-600">
                  <Instagram className="w-6 h-6" />
                </a>
              )}
              {channel.socialLinks?.twitter && (
                <a href={channel.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-blue-400">
                  <Twitter className="w-6 h-6" />
                </a>
              )}
              {channel.socialLinks?.website && (
                <a href={channel.socialLinks.website} target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-purple-600">
                  <Globe className="w-6 h-6" />
                </a>
              )}
              {channel.socialLinks?.patreon && (
                <a href={channel.socialLinks.patreon} target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-orange-500">
                  <Coffee className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Channel Info */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Channel Information</h2>
            <div className="space-y-3">
              {channel.location && (
                <div>
                  <span className="font-medium">Location:</span> {channel.location}
                </div>
              )}
              {channel.languages && (
                <div>
                  <span className="font-medium">Languages:</span> {channel.languages.join(', ')}
                </div>
              )}
              {channel.uploadSchedule && (
                <div>
                  <span className="font-medium">Upload Schedule:</span> {channel.uploadSchedule}
                </div>
              )}
            </div>
          </div>

          {/* Equipment */}
          {channel.equipment && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Equipment</h2>
              <ul className="list-disc list-inside space-y-2">
                {channel.equipment.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Popular Videos */}
        {channel.popularVideos && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Popular Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {channel.popularVideos.map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
                        {video.title}
                      </h3>
                      <span className="text-sm text-gray-600">{video.views} views</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}