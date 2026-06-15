import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container-px flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-white/40">
          © {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <p className="font-mono text-xs text-white/30">Designed &amp; coded in Bengaluru, India</p>
      </div>
    </footer>
  );
}
