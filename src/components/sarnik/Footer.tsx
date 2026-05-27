export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <div>
          <span className="text-gradient font-black">Sarnik Anime</span> — Premium anime figurines, hand-curated.
        </div>
        <div>© {new Date().getFullYear()} Sarnik Anime. All rights reserved.</div>
      </div>
    </footer>
  );
}