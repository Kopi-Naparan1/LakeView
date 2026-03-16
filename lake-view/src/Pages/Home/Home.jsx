import Hero from "./Hero/Hero";
import About from "./About/About";
import MenuPreview from "./MenuPreview/MenuPreview";

export default function Home() {
  return (
    <div className="min-h-full">
      <Hero />
      <About />
      <MenuPreview />
    </div>
  );
}
