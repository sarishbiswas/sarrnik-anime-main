import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sarnik/Header";
import { Hero } from "@/components/sarnik/Hero";
import { About } from "@/components/sarnik/About";
import { ProductSection } from "@/components/sarnik/ProductSection";
import { Contact } from "@/components/sarnik/Contact";
import { Footer } from "@/components/sarnik/Footer";
import { InterestedDrawer } from "@/components/sarnik/InterestedDrawer";
import { InterestProvider } from "@/context/InterestContext";
import { Toaster } from "@/components/ui/sonner";
import { demonSlayer, naruto, onePiece, misc, cardsPosters } from "@/data/products";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <InterestProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <About />
          <ProductSection
            id="demon-slayer"
            eyebrow="Collection 01"
            title="Demon Slayer Collection"
            products={demonSlayer}
          />
          <ProductSection
            id="one-piece"
            eyebrow="Collection 02"
            title="One Piece Collection"
            products={onePiece}
          />
          <ProductSection
            id="naruto"
            eyebrow="Collection 03"
            title="Naruto Collection"
            products={naruto}
          />
          <ProductSection
            id="misc"
            eyebrow="Collection 04"
            title="Miscellaneous Picks"
            products={misc}
          />
          <ProductSection
            id="cards-posters"
            eyebrow="Collection 05"
            title="Cards & Posters"
            products={cardsPosters}
          />
          <Contact />
        </main>
        <Footer />
        <InterestedDrawer />
        <Toaster richColors position="top-center" />
      </div>
    </InterestProvider>
  );
}
