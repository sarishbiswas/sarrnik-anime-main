import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Loader2, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

// ============================================================================
// 📧 EMAIL / FORMSPREE INTEGRATION
// ----------------------------------------------------------------------------
// Option A — Formspree: create a form at https://formspree.io/, copy your
//   endpoint (e.g. https://formspree.io/f/abcdwxyz) and paste below.
// Option B — EmailJS: replace the fetch block with
//   emailjs.send(serviceId, templateId, formData, publicKey).
// Both are GitHub Pages friendly (pure client-side, no server).
// ============================================================================
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykvbpnl";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    message: "",
  });

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (FORMSPREE_ENDPOINT) {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Network error");
      } else {
        console.info("[Sarnik Anime] Contact submission (mock):", form);
        await new Promise((r) => setTimeout(r, 700));
      }
      toast.success("Message sent! We'll be in touch.");
      setForm({ name: "", phone: "", email: "", address: "", pincode: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Could not send right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-accent/15 text-accent border border-accent/30 mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Let's <span className="text-gradient">Talk Figures</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have a question, a custom request, or want to know what's coming next?
            Send us a message — we read every one.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-hero opacity-15 blur-3xl rounded-3xl" />
          <form
            onSubmit={onSubmit}
            className="relative bg-gradient-card border border-border rounded-3xl p-6 md:p-10 shadow-card space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label htmlFor="c-name">Name</Label>
                <Input id="c-name" required value={form.name} onChange={(e) => update("name", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-phone">Phone Number</Label>
                <Input id="c-phone" required value={form.phone} onChange={(e) => update("phone", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-email">Email</Label>
                <Input id="c-email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-pincode">Pincode</Label>
                <Input id="c-pincode" required value={form.pincode} onChange={(e) => update("pincode", e.target.value)} />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <Label htmlFor="c-address">Address</Label>
                <Input id="c-address" required value={form.address} onChange={(e) => update("address", e.target.value)} />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <Label htmlFor="c-message">Message</Label>
                <Textarea id="c-message" rows={5} required value={form.message} onChange={(e) => update("message", e.target.value)} />
              </div>
            </div>
            <Button
              type="submit"
              disabled={submitting}
              size="lg"
              className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-glow font-bold"
            >
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4 text-sm">
          {[
            { icon: Mail, label: "sarnikanime@gmail.com" },
            { icon: MapPin, label: "India — Ships Bangalore" },
            { icon: MapPin, label: "India — Ships Kolkata" },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/40 border border-border">
              <div className="h-9 w-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                <c.icon className="h-4 w-4" />
              </div>
              <span className="text-muted-foreground">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}