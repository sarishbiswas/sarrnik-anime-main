import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// TODO: Replace with the real Sarnik Anime WhatsApp business number (international format, no +).
export const WHATSAPP_NUMBER = "918777599627";

export function buildWhatsAppUrl(productTitle: string) {
  const text = `Hi Sarnik Anime, I am interested in ${productTitle}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M19.11 17.42c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.66.21 1.25.18 1.72.11.52-.08 1.61-.66 1.83-1.29.22-.64.22-1.18.16-1.29-.07-.11-.25-.18-.52-.32zM16.02 4C9.4 4 4 9.4 4 16.02c0 2.1.55 4.16 1.6 5.97L4 28l6.18-1.62a11.96 11.96 0 0 0 5.84 1.49h.01c6.62 0 12.02-5.4 12.02-12.02 0-3.21-1.25-6.23-3.52-8.5A11.94 11.94 0 0 0 16.02 4zm0 21.66h-.01a9.92 9.92 0 0 1-5.06-1.39l-.36-.22-3.67.96.98-3.58-.24-.37a9.93 9.93 0 0 1-1.52-5.3c0-5.49 4.47-9.96 9.97-9.96 2.66 0 5.16 1.04 7.04 2.92a9.9 9.9 0 0 1 2.92 7.04c0 5.49-4.47 9.9-9.95 9.9z" />
    </svg>
  );
}

export function WhatsAppButton({
  productTitle,
  className,
  size,
}: {
  productTitle: string;
  className?: string;
  size?: "default" | "sm" | "lg";
}) {
  return (
    <Button
      asChild
      size={size ?? "sm"}
      className={cn(
        "bg-[var(--whatsapp)] hover:brightness-110 text-primary-foreground font-semibold border border-[color:color-mix(in_oklab,var(--whatsapp)_75%,black)] shadow-md",
        className
      )}
    >
      <a
        href={buildWhatsAppUrl(productTitle)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp about ${productTitle}`}
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
    </Button>
  );
}