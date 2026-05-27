import { Package, Star } from "lucide-react";

const features = [
  { icon: Package, title: "Collector Interest", desc: "Shortlist favorites fast and send a single clean interest request." },
  { icon: Star, title: "Iconic Characters", desc: "One Piece, Naruto, Demon Slayer, and standout crossover pieces." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-accent/15 text-accent border border-accent/30">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Sarnik Anime:{" "}
            <span className="text-gradient">Where Passion Meets the Palette</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to <span className="text-foreground font-semibold">Sarnik Anime</span>, the ultimate destination for collectors,
             otaku, and enthusiasts who view anime not just as entertainment, but as an art form. 
             Founded by lifelong fans, our mission is simple: to bring the most iconic characters, breathtaking sculpts, 
             and rarest pieces from the screen straight to your display shelves.</p><p className="text-lg text-muted-foreground leading-relaxed">
            We know that a true collector isn't just buying plastic; they are capturing a moment, 
            a feeling, and a piece of a world they love. That's why we dedicated ourselves to sourcing premium,
            high-quality anime figures that stand as a testament to the incredible artistry behind your favorite series.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-3 p-4 rounded-xl bg-gradient-card border border-border"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{f.title}</div>
                  <div className="text-sm text-muted-foreground">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-accent/15 text-accent border border-accent/30">
            The Sarnik Experience
          </span>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              Why No Prices at <span className="text-gradient">Sarnik Anime?</span>
            </h2>
            <br/>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You might notice something different about our website: we don’t list standard price tags.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The premium figure market is dynamic, rare pieces are highly sought after, and we believe in offering a tailored, authentic experience for every single collector. Instead of a rigid checkout line, we treat every acquisition as a personal curation.
            </p>
          </div>
          <div className="h-px bg-black/60" />
          <div className="space-y-4">
            <div className="rounded-2xl bg-gradient-card border border-border p-5">
              <h4 className="font-semibold text-lg">A Personalized Touch</h4>
              <p className="text-sm text-muted-foreground mt-2">
                Whether you are looking for a scale figure, a rare Nendoroid, or an exclusive prize figure, we work with you directly to provide the most accurate, current market pricing and seamless delivery options.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-card border border-border p-5">
              <h4 className="font-semibold text-lg">Built for Real Collectors</h4>
              <p className="text-sm text-muted-foreground mt-2">
                By handling inquiries individually, we protect our community from automated scalper bots, ensuring that rare figures go to the fans who actually love them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}