import { motion } from "framer-motion";
import {
  PenTool,
  Mic,
  Search,
  TrendingUp,
  BarChart3,
  Headphones,
  ShoppingBag,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Script Writing",
    desc: "Engaging scripts for videos, podcasts, and ads that captivate audiences and drive your narrative forward.",
  },
  {
    icon: Mic,
    title: "Voice Over",
    desc: "Professional, polished voice-over production for commercials, explainers, and multimedia content.",
  },
  {
    icon: Search,
    title: "Content Research",
    desc: "In-depth research and analysis to fuel content strategies with accurate, relevant, and trending insights.",
  },
  {
    icon: TrendingUp,
    title: "Content Marketing",
    desc: "End-to-end content campaigns that build authority, engage your audience, and generate measurable ROI.",
  },
  {
    icon: BarChart3,
    title: "SEO",
    desc: "Data-driven search engine optimization to boost organic visibility, rankings, and qualified traffic.",
  },
  {
    icon: Headphones,
    title: "Digital Support",
    desc: "Reliable digital operations support — from technical troubleshooting to workflow optimization.",
  },
  {
    icon: ShoppingBag,
    title: "Product Marketing",
    desc: "Strategic product positioning, go-to-market planning, and campaigns that convert prospects into customers.",
  },
  {
    icon: ShieldCheck,
    title: "Social Media Security",
    desc: "Comprehensive social media protection — account security audits, risk mitigation, and recovery strategies.",
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
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of digital marketing and content services designed to elevate your brand and accelerate growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:glow-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
