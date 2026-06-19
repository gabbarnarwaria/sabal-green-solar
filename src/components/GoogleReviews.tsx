import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const googleReviews = [
  {
    name: 'Priya Verma',
    rating: 5,
    date: 'May 2026',
    content: 'Excellent service from Sabal Green Solar! They installed a rooftop solar system at our home and the team was very professional. The quality of work is top-notch and we are already seeing significant savings on our electricity bills.',
    avatar: 'https://ui-avatars.com/api/?name=Priya+Verma&background=2D6A4F&color=fff'
  },
  {
    name: 'Amit Singh',
    rating: 5,
    date: 'April 2026',
    content: 'Highly recommend Sabal Green Solar for commercial solar installations. They handled our factory project with great expertise and delivered on time. The team is knowledgeable and the after-sales support is excellent.',
    avatar: 'https://ui-avatars.com/api/?name=Amit+Singh&background=2D6A4F&color=fff'
  },
  {
    name: 'Neha Gupta',
    rating: 5,
    date: 'March 2026',
    content: 'Outstanding experience with Sabal Green Solar. From the initial consultation to the final installation, everything was smooth and professional. Their solar calculator helped us understand the savings we could achieve.',
    avatar: 'https://ui-avatars.com/api/?name=Neha+Gupta&background=2D6A4F&color=fff'
  },
  {
    name: 'Vikram Sharma',
    rating: 5,
    date: 'February 2026',
    content: 'Best solar company in Gwalior! The team at Sabal Green Solar is very responsive and dedicated. They completed our residential solar installation efficiently and the system is performing excellently.',
    avatar: 'https://ui-avatars.com/api/?name=Vikram+Sharma&background=2D6A4F&color=fff'
  },
  {
    name: 'Sunita Patel',
    rating: 5,
    date: 'January 2026',
    content: 'Very satisfied with the solar installation by Sabal Green Solar. The pricing was transparent, the quality of equipment is great, and the team was very professional throughout the project.',
    avatar: 'https://ui-avatars.com/api/?name=Sunita+Patel&background=2D6A4F&color=fff'
  }
];

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=sabal+green+solar&sca_esv=ec2bff8bd1e2ef21&hl=en-IN&gl=in&sxsrf=ANbL-n69Rwb-EJm9e6C-UwV99wCn7nPimg%3A1781587461538&ei=Bd4waq2nIOLKwPAPw5LR2Q4&biw=1536&bih=758&gs_ssp=eJzj4tVP1zc0rDKuNKkoMDIyYLRSNagwtjQ3SzY0MDAyTjIzM0tOsjKoSElKM081sLQwtbCwSE5MNPESLE5MSsxRSC9KTc1TKM7PSSwCAOHNFWk&oq=Sabal+green+solar&gs_lp=Egxnd3Mtd2l6LXNlcnAiEVNhYmFsIGdyZWVuIHNvbGFyKgIIADIQEC4YgAQYigUYxwEYrwEYJzIKEAAYgAQYFBiHAjICECYyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzIFEAAY7wUyCBAAGIAEGKIEMgUQABjvBTIFEAAY7wUyBRAAGO8FMh0QLhiABBiKBRjHARivARiXBRjcBBjeBBjgBNgBAUjuNlAAWK0fcAB4AJABAJgB3QKgAbccqgEHMC44LjguMbgBAcgBAPgBAZgCEqAC3CzCAgQQIxgnwgITEC4YgAQYigUYxwEYrwEYjgUYJ8ICChAuGIAEGIoFGCfCAgoQLhiABBiKBRhDwgIKEAAYgAQYigUYQ8ICCxAAGIAEGIoFGJECwgIHECMY8AUYJ8ICChAjGIAEGIoFGCfCAhQQLhivARjHARiRAhiABBiKBRiOBcICEBAAGIAEGIoFGEMYsQMYgwHCAhcQLhiABBiKBRiXBRjcBBjeBBjgBNgBAcICEBAuGIAEGIoFGEMYxwEYrwHCAg0QLhiABBiKBRhDGLEDwgIIEC4YgAQYsQPCAg0QABiABBiKBRhDGLEDwgIFEAAYgATCAhAQLhiABBiKBRhDGLEDGIMBwgIFEC4YgATCAg0QLhhDGLEDGIAEGIoFwgITEC4YgAQYigUYQxixAxjHARivAcICChAuGEMYgAQYigXCAg8QABiABBgKGAsYsQMYgwHCAgoQABiABBgCGMsBwgIHEC4YgAQYCsICBxAAGIAEGArCAgYQABgWGB7CAggQABgWGB4YCpgDALoGBggBEAEYFJIHCzAuNy45LjEuNy0xoAejnwKyBwcwLjcuOS4xuAe3HcIHCjAuMi4xNS4wLjHIB2qACAE&sclient=gws-wiz-serp';

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // How many reviews to show at once based on screen size
  const reviewsPerView = 3;

  const nextReview = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % googleReviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);
  };

  const getVisibleReviews = () => {
    const reviews = [];
    for (let i = 0; i < reviewsPerView; i++) {
      reviews.push(googleReviews[(currentIndex + i) % googleReviews.length]);
    }
    return reviews;
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-solar-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-solar-green font-bold tracking-widest uppercase text-sm">
            Google Reviews
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">
            Trusted by <span className="text-solar-green">Our Customers</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See what our customers are saying about their experience with Sabal Green Solar
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-solar-green hover:bg-solar-green hover:text-white transition-all"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextReview}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-solar-green hover:bg-solar-green hover:text-white transition-all"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-8">
            <AnimatePresence mode="wait">
              {getVisibleReviews().map((review, i) => (
                <motion.div
                  key={`${currentIndex}-${i}`}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-bold text-solar-dark">{review.name}</h4>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-4">{renderStars(review.rating)}</div>

                  {/* Review Content */}
                  <p className="text-gray-600 leading-relaxed">{review.content}</p>

                  {/* Google Icon */}
                  <div className="mt-6 flex items-center gap-2 text-gray-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-sm">Posted on Google</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* View All Reviews Button */}
        <div className="text-center mt-12">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-solar-green text-white px-8 py-4 rounded-full font-bold hover:bg-solar-dark transition-all shadow-lg hover:shadow-xl"
          >
            View All Reviews on Google
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Review Stats */}
        <div className="mt-12 flex justify-center items-center gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-solar-green">5.0</div>
            <div className="flex gap-1 mt-2 justify-center">
              {renderStars(5)}
            </div>
            <p className="text-gray-600 mt-2">Average Rating</p>
          </div>
          <div className="w-px h-16 bg-gray-300"></div>
          <div>
            <div className="text-4xl font-bold text-solar-green">{googleReviews.length}+</div>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
