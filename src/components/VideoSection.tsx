import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Play, ExternalLink } from 'lucide-react';

const videos = [
  {
    // Replace with your actual video IDs from your channel
    // You can get the video ID from the YouTube URL: https://www.youtube.com/watch?v=VIDEO_ID
    videoId: '56iFn_L80Vc', // Replace this with your actual video ID
    titleKey: 'videos.video1Title'
  },
  {
    videoId: '56iFn_L80Vc', // Replace this with your actual video ID
    titleKey: 'videos.video2Title'
  },
  {
    videoId: 'PZ3_WBVMX7M', // Replace this with your actual video ID
    titleKey: 'videos.video3Title'
  }
];

const CHANNEL_URL = 'https://www.youtube.com/@SabalGreenSolarPvtLtd';

export default function VideoSection() {
  const { t } = useTranslation();

  return (
    <section id="videos" className="py-24 px-6 bg-solar-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-solar-green font-bold tracking-widest uppercase text-sm">
            {t('videos.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 text-solar-dark">
            {t('videos.title')} <span className="text-solar-green">{t('videos.titleHighlight')}</span>
          </h2>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
            {t('videos.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={t(video.titleKey)}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-solar-dark">
                  {t(video.titleKey)}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-solar-green text-white px-8 py-4 rounded-full font-semibold hover:bg-solar-green/90 transition-colors shadow-lg hover:shadow-xl"
          >
            <Play className="w-5 h-5" />
            {t('videos.viewMore')}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
