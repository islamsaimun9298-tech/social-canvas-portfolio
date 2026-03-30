import { motion } from "framer-motion";
import {
  Monitor,
  PenTool,
  TrendingUp,
  Palette,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "System Analysis & IT Consulting",
    desc: "Cybersecurity assessments, UX Research, and Application Development to optimize digital infrastructure and user experiences.",
    tags: ["Cybersecurity", "UX Research", "App Dev"],
  },
  {
    icon: PenTool,
    title: "Professional Writing",
    desc: "Script Writing, Ghostwriting, Journalism, and UX Writing — compelling content that connects, persuades, and drives action.",
    tags: ["Script Writing", "Ghostwriting", "Journalism", "UX Writing"],
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy",
    desc: "End-to-end SEO optimization, Content Marketing campaigns, and Product Marketing strategies that generate measurable ROI.",
    tags: ["SEO", "Content Marketing", "Product Marketing"],
  },
  {
    icon: Palette,
    title: "Web Design",
    desc: "Premium WordPress Design and UI/UX Design that delivers intuitive, visually striking digital experiences.",
    tags: ["WordPress", "UI/UX Design"],
  },
  {
    icon: ShieldCheck,
    title: "Social Media Support",
    desc: "Comprehensive social media Security audits, risk mitigation, and account Recovery strategies to protect your digital presence.",
    tags: ["Security", "Recovery"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            What I Offer
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Services & Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of system analysis, professional writing, and digital strategy services designed to elevate your brand and optimize your digital systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-xl p-7 hover:border-primary/40 transition-all duration-300 hover:glow-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
