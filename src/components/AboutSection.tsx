import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

const stats = [
  { label: "Sectors Served", value: "4+" },
  { label: "Services Offered", value: "10+" },
  { label: "Client Satisfaction", value: "100%" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Bridging <span className="text-gradient">Technology & Communication</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm <span className="text-foreground font-semibold">Hridoy Hasan Kabbo</span> — a System Analyst and Professional Writer based in Dhaka, Bangladesh.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As a <span className="text-highlight">System Analyst</span>, I dive into the heart of digital systems, websites, and mobile applications to uncover crucial improvements and refine user flows for intuitive experiences. My writing allows me to connect and persuade—crafting insightful pieces on <span className="text-highlight">AI</span>, <span className="text-highlight">Cybersecurity</span>, and <span className="text-highlight">Technical Reports</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I blend <span className="text-highlight">analytical rigor</span> with <span className="text-highlight">narrative flair</span> to create documentation and content that inspires action. My expertise spans across <span className="text-primary font-semibold">Government</span>, <span className="text-primary font-semibold">Banking</span>, <span className="text-primary font-semibold">E-commerce</span>, and <span className="text-primary font-semibold">Healthcare</span> sectors.
            </p>

            {/* Info card */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 glass rounded-lg px-5 py-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span className="text-sm text-secondary-foreground">Dhaka, Bangladesh</span>
              </div>
            </div>
          </motion.div>

          {/* Stats & highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-xl p-5 text-center">
                  <p className="text-2xl md:text-3xl font-heading font-bold text-gradient mb-1">
                    {s.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Highlight card */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Star size={18} className="text-primary" />
                <h3 className="font-heading font-semibold">Core Strengths</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "System analysis & IT consulting for enterprise platforms",
                  "Professional writing — scripts, ghostwriting & journalism",
                  "SEO-driven content marketing & digital strategy",
                  "UX research & UI/UX design for web & mobile",
                  "Social media security & account recovery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
