import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, Heart, Loader2 } from "lucide-react";
import { useInterest } from "@/context/InterestContext";
import { toast } from "sonner";

// ============================================================================
// 🔧 GOOGLE APPS SCRIPT INTEGRATION
// ----------------------------------------------------------------------------
// 1. Create a new Google Sheet to receive submissions.
// 2. Extensions → Apps Script. Paste a doPost(e) handler that parses
//    JSON.parse(e.postData.contents) and appends rows to the sheet, then
//    optionally MailApp.sendEmail(...) to your admin address.
// 3. Deploy → New deployment → "Web app", Execute as "Me", Access
//    "Anyone". Copy the Web App URL and paste it below.
// ============================================================================
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxwKZsTwk1OqQeD1f2nxQx1tA9mKkxl_jOl4i2Une5s56H9e1cpoeUY3EqhKtP_S_xj/exec"; // <-- PASTE YOUR APPS SCRIPT WEB APP URL HERE

export function InterestedDrawer() {
  const { items, removeItem, clear, open, setOpen } = useInterest();
  const [submitting, setSubmitting] = useState(false);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    query: "",
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      toast.error("Add at least one figurine to your Interested list.");
      return;
    }
    setSubmitting(true);

    const productsArray = items.map((i) => ({
      id: i.id,
      title: i.title,
      collection: i.collection,
      count: counts[i.id] ?? 1,
    }));

    const payload = {
      type: "interest_submission",
      submittedAt: new Date().toISOString(),
      customer: form,
      // products as JSON string so it can be stored in a single sheet cell
      products: JSON.stringify(productsArray),
    };

    try {
      if (GOOGLE_APPS_SCRIPT_URL) {
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=UTF-8" },
          body: JSON.stringify(payload),
        });
        
        console.info("[Sarnik Anime] Submission sent to Apps Script:", payload);
        console.info("[Sarnik Anime] Response status:", response.status);
      } else {
        // Mock when no endpoint is configured yet.
        console.info("[Sarnik Anime] Interest submission (mock):", payload);
        await new Promise((r) => setTimeout(r, 700));
      }
      toast.success("Interest submitted! We'll reach out shortly.");
      clear();
      setCounts({});
      setForm({ name: "", phone: "", email: "", address: "", pincode: "", query: "" });
      setOpen(false);
    } catch (err) {
      console.error("[Sarnik Anime] Submission error:", err);
      toast.error("Could not submit right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-lg bg-card border-l border-border overflow-y-auto"
      >
        <SheetHeader className="text-left">
          <SheetTitle className="text-2xl font-black flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            Your Interested Items
          </SheetTitle>
          <SheetDescription>
            Tell us about the figurines you've chosen and we'll get back to you.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-3">
          {items.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground">
              No items yet. Tap <span className="text-foreground font-semibold">Interest</span> on any figurine to start.
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 p-3 rounded-xl bg-secondary/60 border border-border items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-primary font-semibold">{item.collection}</div>
                  <div className="font-semibold truncate">{item.title}</div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    aria-label={`Quantity for ${item.title}`}
                    type="number"
                    min={1}
                    value={counts[item.id] ?? 1}
                    onChange={(e) => {
                      const v = Math.max(1, Number(e.target.value || 1));
                      setCounts((c) => ({ ...c, [item.id]: v }));
                    }}
                    className="h-8 w-20 rounded-md border border-border text-center bg-muted"
                  />
                  <button
                    onClick={() => {
                      removeItem(item.id);
                      setCounts((c) => {
                        const copy = { ...c };
                        delete copy[item.id];
                        return copy;
                      });
                    }}
                    aria-label={`Remove ${item.title}`}
                    className="h-8 w-8 rounded-md hover:bg-destructive/20 text-muted-foreground hover:text-destructive flex items-center justify-center"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-4 border-t border-border pt-6">
          <h3 className="font-black text-lg">Your Details</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="i-name">Name</Label>
              <Input id="i-name" required value={form.name} onChange={(e) => update("name", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="i-phone">Phone</Label>
              <Input id="i-phone" required value={form.phone} onChange={(e) => update("phone", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="i-pincode">Pincode</Label>
              <Input id="i-pincode" required value={form.pincode} onChange={(e) => update("pincode", e.target.value)} />
            </div>
            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="i-email">Email</Label>
              <Input id="i-email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} />
            </div>
            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="i-address">Address</Label>
              <Input id="i-address" required value={form.address} onChange={(e) => update("address", e.target.value)} />
            </div>
            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="i-query">Query</Label>
              <Textarea id="i-query" rows={3} value={form.query} onChange={(e) => update("query", e.target.value)} />
            </div>
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-glow font-bold"
            size="lg"
          >
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Heart className="h-4 w-4" />}
            {submitting ? "Submitting..." : "Submit Interest"}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}