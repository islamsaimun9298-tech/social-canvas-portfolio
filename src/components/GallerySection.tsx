import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import photoSunset from "@/assets/photo-sunset.jpg";
import photoSteps from "@/assets/photo-steps.jpg";
import photoCasual from "@/assets/photo-casual.jpg";
import photoLights from "@/assets/photo-lights.jpg";
import photoStreet from "@/assets/photo-street.jpg";
import photoHeic1 from "@/assets/photo-heic1.jpg";
import photoHeic2 from "@/assets/photo-heic2.jpg";
import photoHeic3 from "@/assets/photo-heic3.jpg";

const photos = [
  { src: photoLights, alt: "Hridoy Hasan Kabbo - Portrait with lights" },
  { src: photoSunset, alt: "Hridoy Hasan Kabbo - Sunset portrait" },
  { src: photoStreet, alt: "Hridoy Hasan Kabbo - Street style" },
  { src: photoHeic1, alt: "Hridoy Hasan Kabbo - Portrait" },
  { src: photoSteps, alt: "Hridoy Hasan Kabbo - Casual portrait" },
  { src: photoHeic2, alt: "Hridoy Hasan Kabbo - Portrait" },
  { src: photoCasual, alt: "Hridoy Hasan Kabbo - Relaxed portrait" },
  { src: photoHeic3, alt: "Hridoy Hasan Kabbo - Portrait" },
];

const GallerySection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  emblaApi?.on("select", () => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  });

  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Gallery
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Behind the <span className="text-gradient">Scenes</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex gap-4">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_35%] min-w-0"
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden group">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-all z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-all z-10"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
