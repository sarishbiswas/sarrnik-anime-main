import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/op-luffy.png";
import hero2 from "@/assets/nr-itachi.png";
import hero3 from "@/assets/ds-inosuke.png";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: hero1,
    eyebrow: "Sarnik Anime",
    title: "Bring Your Favorite Worlds to Life",
    subtitle: "Discover stunning, high-quality sculpts of the most iconic anime characters. Connect with us today to claim yours.",
  },
  {
    image: hero2,
    eyebrow: "Dark Gallery Mood",
    title: "Handpicked Masterpieces for True Collectors",
    subtitle: "No generic tags, just exceptional pieces. Inquire directly to secure the next crown jewel of your display shelf.",
  },
  {
    image: hero3,
    eyebrow: "Showcase Experience",
    title: "Crafted for the True Otaku",
    subtitle: "Discover a handpicked collection of high-end anime figures. Reach out to secure your next favorite masterpiece today.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.title}
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-contain object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/72 to-background/18" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/88 via-background/36 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_22%,oklch(0.63_0.21_330_/_.18),transparent_22%),radial-gradient(circle_at_78%_65%,oklch(0.75_0.17_230_/_.16),transparent_24%)]" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-2xl animate-fade-in-up" key={index}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-primary/15 text-primary border border-primary/30 mb-5 shadow-[0_0_24px_color-mix(in_oklab,var(--color-primary)_20%,transparent)]">
              {slides[index].eyebrow}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6">
              <span className="text-gradient">{slides[index].title}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              {slides[index].subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() => scrollToId("demon-slayer")}
                className="bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-glow font-bold"
              >
                Explore Collections
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToId("contact")}
                className="border-primary/40 hover:bg-primary/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/40 backdrop-blur-md border border-border hover:bg-primary/20 hover:border-primary transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/40 backdrop-blur-md border border-border hover:bg-primary/20 hover:border-primary transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-10 bg-gradient-hero" : "w-4 bg-muted-foreground/40"}`}
          />
        ))}
      </div>
    </section>
  );
}