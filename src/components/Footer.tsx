import { Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Hridoy Hasan Kabbo. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/KING.KIDDO.MR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/hridoy-hasan-kabbo-5424143b4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
