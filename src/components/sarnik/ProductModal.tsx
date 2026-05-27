import { useState, useRef, MouseEvent } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { WhatsAppButton } from "./WhatsAppButton";
import { useInterest } from "@/context/InterestContext";

export function ProductModal({
  product,
  open,
  onOpenChange,
}: {
  product: Product | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { items, addItem } = useInterest();
  const [zoom, setZoom] = useState({ active: false, x: 50, y: 50 });
  const imgRef = useRef<HTMLDivElement>(null);

  if (!product) return null;
  const alreadyAdded = items.some((i) => i.id === product.id);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = imgRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setZoom({ active: true, x, y });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden border-border bg-card">
        <DialogTitle className="sr-only">{product.title}</DialogTitle>
        <div className="grid md:grid-cols-2">
          <div
            ref={imgRef}
            onMouseEnter={() => setZoom((z) => ({ ...z, active: true }))}
            onMouseLeave={() => setZoom({ active: false, x: 50, y: 50 })}
            onMouseMove={onMove}
            className="relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden bg-secondary cursor-zoom-in"
          >
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-200"
              style={{
                transform: zoom.active ? "scale(2)" : "scale(1)",
                transformOrigin: `${zoom.x}% ${zoom.y}%`,
              }}
            />
          </div>
          <div className="p-6 md:p-10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
                {product.collection}
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-secondary/60 border border-border">
                  <div className="text-muted-foreground text-xs">Scale</div>
                  <div className="font-semibold">1/7 Premium</div>
                </div>
                <div className="p-3 rounded-lg bg-secondary/60 border border-border">
                  <div className="text-muted-foreground text-xs">Material</div>
                  <div className="font-semibold">PVC / ABS</div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <WhatsAppButton productTitle={product.title} size="lg" className="flex-1" />
              <Button
                size="lg"
                onClick={() => addItem(product)}
                disabled={alreadyAdded}
                className="flex-1 bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-glow font-bold"
              >
                {alreadyAdded ? (
                  <>
                    <Check className="h-4 w-4" /> Added
                  </>
                ) : (
                  <>
                    <Heart className="h-4 w-4" /> Show Interest
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}