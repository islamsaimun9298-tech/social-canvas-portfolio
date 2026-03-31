import { motion } from "framer-motion";
import { ArrowDown, Facebook, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              System Analyst & Professional Writer
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Hridoy Hasan Kabbo</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg mb-8">
              I thrive at the intersection of technology and communication, bringing a dual passion for System Analysis and Professional Writing to every project. Specialist in making digital systems work better for people across Government, Banking, E-commerce, and Healthcare sectors.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-sm"
              >
                Get in Touch
              </a>
              <a
                href="#services"
                className="px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                View Services
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/KING.KIDDO.MR"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/hridoy-hasan-kabbo-5424143b4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-primary/30 glow-md animate-float">
                <img
                  src={profilePhoto}
                  alt="Hridoy Hasan Kabbo - System Analyst & Professional Writer"
                  className="w-full h-full object-cover"
                  width={768}
                  height={960}
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/10 pointer-events-none" />
              <div className="absolute -inset-8 rounded-full border border-primary/5 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden lg:flex justify-center mt-12"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
