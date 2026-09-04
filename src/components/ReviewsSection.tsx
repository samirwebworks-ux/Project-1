import React, { useState } from 'react';
import { REVIEWS_DATA, RESORT_INFO } from '../data/resortData';
import { Review } from '../types';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle, PenLine, X, Sparkles } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_DATA);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [writeReviewOpen, setWriteReviewOpen] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // Form State
  const [formName, setFormName] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formRoom, setFormRoom] = useState('Ocean View Room');
  const [formText, setFormText] = useState('');

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: formName,
      location: formCity,
      rating: formRating,
      date: 'Just now',
      stayType: 'Verified Guest',
      content: formText,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      roomStayed: formRoom,
      verified: true
    };
    setReviews([newRev, ...reviews]);
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setWriteReviewOpen(false);
      setFormName('');
      setFormCity('');
      setFormText('');
    }, 2400);
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header matching reference image */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.24em] text-[#6b7c77] uppercase mb-2">
            WHAT OUR GUESTS SAY
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1b2826] font-normal tracking-tight">
            Memories That Last a Lifetime
          </h2>

          {/* Flourish Divider */}
          <div className="flex items-center justify-center gap-3 mt-4 text-[#c5a072]">
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
            <span className="text-sm">✦ ❦ ✦</span>
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-[#6b7c77]">
            <span>Google Rating</span>
            <div className="flex text-[#c5a072]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#c5a072]" />
              ))}
            </div>
            <span className="font-bold text-[#1b2826]">4.9 / 5.0</span>
            <span>({RESORT_INFO.reviewCount} Verified Reviews)</span>
          </div>
        </div>

        {/* 3 Testimonial Cards Grid - Exactly matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.slice(0, 3).map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="bg-white rounded-lg p-6 sm:p-7 border border-[#e8e2d8] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Large Quote Mark */}
                <div className="text-[#c5a072] mb-3">
                  <span className="font-serif text-3xl font-bold leading-none text-[#c5a072]">“</span>
                </div>

                <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed italic mb-6">
                  {review.content}
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center justify-between pt-4 border-t border-[#f1ede6]">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover border border-[#e8e2d8]"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#1b2826] font-sans">
                      {review.author}
                    </h4>
                    <p className="text-[11px] text-[#6b7c77]">
                      {review.location}
                    </p>
                  </div>
                </div>

                {/* 5 Golden Stars */}
                <div className="flex text-[#c5a072]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#c5a072]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots matching reference image */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="w-2.5 h-2.5 rounded-full bg-[#1b2826]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#dfc19c]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#e8e2d8]" />
        </div>

        {/* Write a Review Button */}
        <div className="mt-8 text-center">
          <button
            id="btn-open-write-review"
            onClick={() => setWriteReviewOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#d3cbbe] bg-white hover:bg-[#1b2826] hover:text-[#dfc19c] text-xs font-bold tracking-wider text-[#1b2826] transition-all shadow-sm"
          >
            <PenLine className="w-3.5 h-3.5" />
            <span>Share Your Ocean Haven Experience</span>
          </button>
        </div>
      </div>

      {/* Write a Review Modal */}
      {writeReviewOpen && (
        <div
          id="modal-write-review-overlay"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setWriteReviewOpen(false)}
        >
          <div
            id="modal-write-review-content"
            className="bg-[#faf8f5] rounded-xl max-w-lg w-full p-6 sm:p-8 border border-[#e8e2d8] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="btn-close-review-modal"
              onClick={() => setWriteReviewOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#6b7c77] hover:text-[#1b2826]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center pb-4 border-b border-[#e8e2d8]">
              <span className="text-[10px] font-bold tracking-widest text-[#c5a072] uppercase">Guest Feedback</span>
              <h3 className="font-serif text-2xl font-bold text-[#1b2826] mt-1">Review Your Stay</h3>
              <p className="text-xs text-[#6b7c77]">We cherish your feedback and memories</p>
            </div>

            {reviewSubmitted ? (
              <div className="py-8 text-center space-y-2 animate-fade-in">
                <CheckCircle className="w-10 h-10 text-green-600 mx-auto" />
                <h4 className="font-serif text-xl font-bold text-[#1b2826]">Thank You for Your Review!</h4>
                <p className="text-xs text-[#6b7c77]">Your feedback has been published to our guest board.</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="mt-4 space-y-4">
                <div className="flex items-center justify-center gap-2 py-2">
                  <span className="text-xs font-semibold text-[#1b2826] mr-2">Your Rating:</span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormRating(star)}
                      className="p-1 focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= formRating ? 'fill-[#c5a072] text-[#c5a072]' : 'text-[#d3cbbe]'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">City / State</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Boston, MA"
                      value={formCity}
                      onChange={(e) => setFormCity(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">Accommodation Stayed</label>
                  <select
                    value={formRoom}
                    onChange={(e) => setFormRoom(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                  >
                    <option value="Ocean View Room">Ocean View Room</option>
                    <option value="Poolside Suite">Poolside Suite</option>
                    <option value="Oceanfront Villa">Oceanfront Villa</option>
                    <option value="Royal Sunset Penthouse">Royal Sunset Penthouse</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">Your Review</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell future guests about your stay, views, service, and dining..."
                    value={formText}
                    onChange={(e) => setFormText(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#1b2826] hover:bg-[#253935] text-[#dfc19c] font-bold text-xs tracking-wider uppercase rounded shadow-sm"
                >
                  Submit Verified Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
