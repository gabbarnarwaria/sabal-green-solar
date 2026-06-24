import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Zap, Users, Leaf } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const statsData = [
  { key: 'projects', value: 16, suffix: '+', icon: CheckCircle },
  { key: 'capacity', value: 110, suffix: '+', icon: Zap },
  { key: 'clients', value: 16, suffix: '+', icon: Users },
  { key: 'co2', value: 110, suffix: 'k+', icon: Leaf },
];

const ANIMATION_DURATION = 2500;

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animFrameId = useRef<number>(0);
  const hasAnimated = useRef(false);

  const startAnimation = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    let lastDisplayed = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / ANIMATION_DURATION, 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = Math.round(eased * value);

      // Only trigger re-render when the displayed integer actually changes
      if (current !== lastDisplayed) {
        lastDisplayed = current;
        setDisplay(current);
      }

      if (progress < 1) {
        animFrameId.current = requestAnimationFrame(tick);
      }
    };

    animFrameId.current = requestAnimationFrame(tick);
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect(); // Stop observing immediately
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animFrameId.current);
    };
  }, [startAnimation]);

  return (
    <span ref={ref} className="inline-flex items-center">
      <span>{display.toLocaleString()}</span>
      <span>{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const { t } = useTranslation();
  
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group p-8 rounded-[40px] bg-solar-light hover:bg-solar-green transition-all duration-700 ease-out shadow-sm hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-solar-vibrant/20 transition-colors duration-700" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md">
                  <stat.icon className="w-8 h-8 text-solar-green group-hover:text-solar-dark transition-colors" />
                </div>

                <h3 className="text-5xl font-bold text-solar-dark mb-3 group-hover:text-white transition-colors tracking-tight">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>

                <p className="text-gray-500 font-semibold text-sm uppercase tracking-wider group-hover:text-white/90 transition-colors">
                  {t(`stats.${stat.key}`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
