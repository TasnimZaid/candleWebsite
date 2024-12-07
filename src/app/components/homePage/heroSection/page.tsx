import React from 'react';
import { Play } from 'lucide-react';

const HeroSectio: React.FC = () => {
  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/flower.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Illuminate Your Moments
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Discover handcrafted candles that transform your space and elevate your mood
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex space-x-4">
          <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300 flex items-center">
            Shop Now
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/20 transition duration-300 flex items-center">
            <Play className="mr-2" size={20} />
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSectio;
