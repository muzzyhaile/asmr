import React, { useEffect } from 'react';

export function ContactForm() {
  useEffect(() => {
    // Load Tally.so widget script
    const loadTallyWidget = () => {
      if ((window as any).Tally) {
        (window as any).Tally.loadEmbeds();
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e: any) => {
          e.src = e.dataset.tallySrc;
        });
      }
    };

    // Check if Tally script is already loaded
    if (!(window as any).Tally) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = loadTallyWidget;
      script.onerror = loadTallyWidget;
      document.body.appendChild(script);
    } else {
      loadTallyWidget();
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Submit Your ASMR Channel</h2>
      <p className="text-gray-600 mb-8 text-center">
        Want to add your ASMR channel to our directory? Fill out the form below and we'll review your submission.
      </p>
      <div className="bg-white rounded-lg shadow-md p-6">
        <iframe 
          data-tally-src="https://tally.so/embed/w4p6zB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
          loading="lazy" 
          width="100%" 
          height="500" 
          frameBorder="0" 
          title="Contact form asmr.channels">
        </iframe>
      </div>
    </div>
  );
}
