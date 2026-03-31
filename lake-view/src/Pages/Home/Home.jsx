import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import GalleryPreview from "./GalleryPreview/GalleryPreview";
import Testimonial from "./Testimonial/Testimonial";
import FinalCTA from "./FinalCTA/FinalCTA";
import ParkGuidelines from "./GuideLines/GuideLines";
export default function Home() {
  return (
    <div className="min-h-full">
      <Hero />
      <About />
      <Services />
      <GalleryPreview />
      <ParkGuidelines />
      <Testimonial />
      <FinalCTA />
    </div>
  );
}
