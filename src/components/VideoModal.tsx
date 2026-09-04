import React from 'react';
import { X, Play, Volume2, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="video-tour-modal-overlay"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="video-tour-content"
        className="bg-[#152220] rounded-2xl max-w-4xl w-full overflow-hidden border border-[#2a3f3a] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="btn-close-video-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Header */}
        <div className="p-4 sm:p-5 border-b border-[#253935] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#dfc19c]">
              4K CINEMATIC TOUR • OCEAN HAVEN RESORT
            </span>
          </div>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video w-full bg-black">
          <video
            autoPlay
            controls
            loop
            playsInline
            className="w-full h-full object-cover"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            poster="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80"
          >
            Your browser does not support HTML5 video.
          </video>
        </div>

        {/* Video Footer Info */}
        <div className="p-4 sm:p-6 bg-[#1b2826] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div>
            <h4 className="font-serif text-base font-bold text-[#dfc19c]">Experience Secluded Key West Luxury</h4>
            <p className="text-white/70 text-[11px] mt-0.5">Filmed in 4K UHD across our private beach, oceanfront villas, and Azure Horizon restaurant.</p>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded bg-[#dfc19c] hover:bg-[#ebd2b3] text-[#152220] font-bold text-xs uppercase tracking-wider whitespace-nowrap"
          >
            Explore Accommodations
          </button>
        </div>
      </div>
    </div>
  );
};
