import React from 'react';
import { ContactForm } from '../components/ContactForm';

export function SubmitChannelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Submit Your ASMR Channel</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Join our curated collection of top ASMR creators and reach more listeners
          </p>
        </header>
        
        <ContactForm />
      </div>
    </div>
  );
}
