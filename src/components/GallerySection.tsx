import { motion } from "framer-motion";
import photoSunset from "@/assets/photo-sunset.jpg";
import photoSteps from "@/assets/photo-steps.jpg";
import photoCasual from "@/assets/photo-casual.jpg";
import photoLights from "@/assets/photo-lights.jpg";
import photoStreet from "@/assets/photo-street.jpg";
import photoHeic1 from "@/assets/photo-heic1.jpg";
import photoHeic2 from "@/assets/photo-heic2.jpg";
import photoHeic3 from "@/assets/photo-heic3.jpg";

const photos = [
  { src: photoLights, alt: "Hridoy Hasan Kabbo - Portrait with lights", span: "md:col-span-2 md:row-span-2" },
  { src: photoSunset, alt: "Hridoy Hasan Kabbo - Sunset portrait", span: "" },
  { src: photoStreet, alt: "Hridoy Hasan Kabbo - Street style", span: "" },
  { src: photoHeic1, alt: "Hridoy Hasan Kabbo - Portrait 1", span: "" },
  { src: photoSteps, alt: "Hridoy Hasan Kabbo - Casual portrait", span: "md:col-span-2" },
  { src: photoHeic2, alt: "Hridoy Hasan Kabbo - Portrait 2", span: "" },
  { src: photoCasual, alt: "Hridoy Hasan Kabbo - Relaxed portrait", span: "" },
  { src: photoHeic3, alt: "Hridoy Hasan Kabbo - Portrait 3", span: "md:col-span-2" },
];

const GallerySection = () => {
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-xl overflow-hidden group ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
