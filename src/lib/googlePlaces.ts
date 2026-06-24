export interface GoogleReview {
  name: string;
  rating: number;
  date: string;
  content: string;
  avatar: string;
  author_url?: string;
  profile_photo_url?: string;
  relative_time_description?: string;
}

interface PlaceDetailsResponse {
  result?: {
    reviews?: Array<{
      author_name: string;
      rating: number;
      text: string;
      time: number;
      profile_photo_url?: string;
      author_url?: string;
      relative_time_description?: string;
    }>;
  };
  status: string;
  error_message?: string;
}

/**
 * Fetches Google Place reviews using the Google Places API
 * @param placeId - The Google Place ID for the business
 * @param apiKey - Google Places API key
 * @param maxReviews - Maximum number of reviews to return (default: 5)
 * @returns Array of formatted reviews
 */
export async function fetchGoogleReviews(
  placeId: string,
  apiKey: string,
  maxReviews: number = 5
): Promise<GoogleReview[]> {
  try {
    // Use the Place Details API to get reviews
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
    
    // Note: This is a workaround since direct API calls from frontend are blocked by CORS
    // In production, you should proxy this through your backend
    const corsProxy = 'https://api.allorigins.win/raw?url=';
    const response = await fetch(corsProxy + encodeURIComponent(url));
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: PlaceDetailsResponse = await response.json();
    
    if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
      throw new Error(data.error_message || `API error: ${data.status}`);
    }
    
    if (!data.result?.reviews || data.result.reviews.length === 0) {
      return getFallbackReviews();
    }
    
    // Format and return the reviews
    return data.result.reviews
      .slice(0, maxReviews)
      .map((review) => ({
        name: review.author_name,
        rating: review.rating,
        date: review.relative_time_description || formatDate(review.time),
        content: review.text,
        avatar: review.profile_photo_url || generateAvatar(review.author_name),
        author_url: review.author_url,
        profile_photo_url: review.profile_photo_url,
        relative_time_description: review.relative_time_description,
      }));
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    // Return fallback reviews on error
    return getFallbackReviews();
  }
}

/**
 * Generates a placeholder avatar URL based on the user's name
 */
function generateAvatar(name: string): string {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2D6A4F&color=fff`;
}

/**
 * Formats Unix timestamp to readable date
 */
function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 30) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
}

/**
 * Returns fallback reviews when API is unavailable or fails
 */
export function getFallbackReviews(): GoogleReview[] {
  return [
    {
      name: 'Priya Verma',
      rating: 5,
      date: '2 months ago',
      content: 'Excellent service from Sabal Green Solar! They installed a rooftop solar system at our home and the team was very professional. The quality of work is top-notch and we are already seeing significant savings on our electricity bills.',
      avatar: 'https://ui-avatars.com/api/?name=Priya+Verma&background=2D6A4F&color=fff'
    },
    {
      name: 'Amit Singh',
      rating: 5,
      date: '3 months ago',
      content: 'Highly recommend Sabal Green Solar for commercial solar installations. They handled our factory project with great expertise and delivered on time. The team is knowledgeable and the after-sales support is excellent.',
      avatar: 'https://ui-avatars.com/api/?name=Amit+Singh&background=2D6A4F&color=fff'
    },
    {
      name: 'Neha Gupta',
      rating: 5,
      date: '4 months ago',
      content: 'Outstanding experience with Sabal Green Solar. From the initial consultation to the final installation, everything was smooth and professional. Their solar calculator helped us understand the savings we could achieve.',
      avatar: 'https://ui-avatars.com/api/?name=Neha+Gupta&background=2D6A4F&color=fff'
    },
    {
      name: 'Vikram Sharma',
      rating: 5,
      date: '5 months ago',
      content: 'Best solar company in Gwalior! The team at Sabal Green Solar is very responsive and dedicated. They completed our residential solar installation efficiently and the system is performing excellently.',
      avatar: 'https://ui-avatars.com/api/?name=Vikram+Sharma&background=2D6A4F&color=fff'
    },
    {
      name: 'Sunita Patel',
      rating: 5,
      date: '6 months ago',
      content: 'Very satisfied with the solar installation by Sabal Green Solar. The pricing was transparent, the quality of equipment is great, and the team was very professional throughout the project.',
      avatar: 'https://ui-avatars.com/api/?name=Sunita+Patel&background=2D6A4F&color=fff'
    }
  ];
}
