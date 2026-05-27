import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Check, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { WhatsAppButton } from "./WhatsAppButton";
import { ProductModal } from "./ProductModal";
import { useInterest } from "@/context/InterestContext";
import { toast } from "sonner";

function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: (p: Product) => void;
}) {
  const { items, addItem } = useInterest();
  const added = items.some((i) => i.id === product.id);

  return (
    <article className="group bg-gradient-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-glow hover:border-primary/40 transition-all duration-500 flex flex-col">
      <button
        onClick={() => onOpen(product)}
        className="relative aspect-square overflow-hidden bg-secondary flex items-center justify-center"
        aria-label={`View ${product.title}`}
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
        <div className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/70 backdrop-blur-md border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Expand className="h-4 w-4" />
        </div>
      </button>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-lg leading-tight mb-1.5">{product.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>
        <div className="flex gap-2">
          <WhatsAppButton productTitle={product.title} className="flex-1" />
          <Button
            size="sm"
            onClick={() => {
              addItem(product);
              if (!added) toast.success(`${product.title} added to Interested`);
            }}
            disabled={added}
            className="flex-1 bg-gradient-hero text-primary-foreground hover:opacity-90 font-semibold disabled:opacity-70"
          >
            {added ? <Check className="h-4 w-4" /> : <Heart className="h-4 w-4" />}
            {added ? "Added" : "Interest"}
          </Button>
        </div>
      </div>
    </article>
  );
}

export function ProductSection({
  id,
  eyebrow,
  title,
  products,
}: {
  id: string;
  eyebrow: string;
  title: string;
  products: Product[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const scroll = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.getBoundingClientRect().width ?? 300;
    el.scrollBy({ left: dir * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section id={id} className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-primary/15 text-primary border border-primary/30 mb-3">
              {eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              {title}
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="h-11 w-11 rounded-full border border-border bg-card hover:bg-primary/15 hover:border-primary transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="h-11 w-11 rounded-full border border-border bg-card hover:bg-primary/15 hover:border-primary transition-colors flex items-center justify-center"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="snap-start shrink-0 w-[80%] sm:w-[45%] md:w-[31%] lg:w-[calc(25%-18px)]"
            >
              <ProductCard product={p} onOpen={(prod) => setModalProduct(prod)} />
            </div>
          ))}
        </div>
      </div>

      <ProductModal
        product={modalProduct}
        open={!!modalProduct}
        onOpenChange={(v) => !v && setModalProduct(null)}
      />
    </section>
  );
}