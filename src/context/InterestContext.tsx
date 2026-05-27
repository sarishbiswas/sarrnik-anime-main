import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Product } from "@/data/products";

interface InterestContextValue {
  items: Product[];
  addItem: (p: Product) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
}

const InterestContext = createContext<InterestContextValue | null>(null);

const STORAGE_KEY = "sarnik-interested";

export function InterestProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch {}
  }, [items]);

  const addItem = (p: Product) => {
    setItems((prev) => (prev.find((x) => x.id === p.id) ? prev : [...prev, p]));
  };
  const removeItem = (id: string) => setItems((prev) => prev.filter((x) => x.id !== id));
  const clear = () => setItems([]);

  return (
    <InterestContext.Provider value={{ items, addItem, removeItem, clear, count: items.length, open, setOpen }}>
      {children}
    </InterestContext.Provider>
  );
}

export function useInterest() {
  const ctx = useContext(InterestContext);
  if (!ctx) throw new Error("useInterest must be used within InterestProvider");
  return ctx;
}