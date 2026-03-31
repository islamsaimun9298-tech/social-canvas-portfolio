import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, Users, Award, Coffee } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 300, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 200, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 4, suffix: "+", label: "Sectors Served" },
  { icon: Coffee, value: 10, suffix: "+", label: "Services Offered" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-3xl md:text-5xl font-heading font-bold text-gradient">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center glass rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <s.icon size={22} className="text-primary" />
              </div>
              <AnimatedCounter target={s.value} suffix={s.suffix} />
              <p className="text-muted-foreground text-xs md:text-sm mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
