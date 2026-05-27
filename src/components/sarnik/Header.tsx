import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInterest } from "@/context/InterestContext";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "demon-slayer", label: "Demon Slayer" },
  { id: "one-piece", label: "One Piece" },
  { id: "naruto", label: "Naruto" },
  { id: "misc", label: "Misc" },
  { id: "cards-posters", label: "Cards / Posters" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const { count, setOpen } = useInterest();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobile(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group">
          <span className="h-9 w-9 rounded-lg bg-gradient-hero shadow-glow flex items-center justify-center font-black text-primary-foreground">
            S
          </span>
          <span className="text-lg md:text-xl font-black tracking-tight">
            <span className="text-gradient">Sarnik</span>{" "}
            <span className="text-foreground">Anime</span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/50"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpen(true)}
            className="relative border-primary/40 hover:border-primary hover:bg-primary/10"
          >
            <Heart className="h-4 w-4" />
            <span className="hidden sm:inline ml-2">Interested</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 h-5 min-w-5 px-1 rounded-full bg-gradient-hero text-primary-foreground text-[10px] font-bold flex items-center justify-center shadow-glow">
                {count}
              </span>
            )}
          </Button>
          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setMobile((m) => !m)}
            aria-label="Toggle menu"
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <nav className="px-4 py-3 flex flex-col">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-left px-3 py-3 text-sm font-medium rounded-md hover:bg-secondary text-foreground/80 hover:text-foreground"
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}