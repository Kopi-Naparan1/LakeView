import TrustStrip from "./TrustTrip/TrustTrip";
import CafeHero from "./CafeHero/CafeHero";
import AboutCafe from "./AboutCafe/AboutCafe";
import CafeMenu from "./MenuPreview/CafeMenu";
import CafeGallery from "./CafeGallery/CafeGallery";
import FinalCafeCTA from "./FinalCafeCTA/FinalCafeCTA";
import { useRef } from "react";
export default function Cafe() {
  const CafeMenuSectionRef = useRef(null);
  return (
    <>
      <CafeHero CafeMenuSectionRef={CafeMenuSectionRef} />
      <TrustStrip />
      <AboutCafe />
      <CafeMenu CafeMenuSectionRef={CafeMenuSectionRef} />
      <CafeGallery />
      <FinalCafeCTA />
    </>
  );
}
