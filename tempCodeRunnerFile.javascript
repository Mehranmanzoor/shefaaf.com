import React from 'react';
import { FaHeart } from 'lucide-react';

const LoveLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-200 to-pink-400">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">My Dearest Urma Naseem,</h1>
        <div className="space-y-4">
          <p className="text-xl italic">
            "My heart, my soul, my everything, you are the reason I smile each day."
          </p>
          <p className="text-xl italic">
            "Mehran Manzoor, your love has filled my life with endless joy and wonder."
          </p>
          <p className="text-xl italic">
            "Each moment with you is a cherished memory, a thread in the tapestry of our love."
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <FaHeart size={48} color="#ff6b6b" />
          <FaHeart size={48} color="#ff6b6b" />
          <FaHeart size={48} color="#ff6b6b" />
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;