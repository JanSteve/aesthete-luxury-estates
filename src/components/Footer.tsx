import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-40 px-6 sm:px-8 lg:px-20 bg-obsidian border-t border-outline-subtle/20">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="font-serif text-headline-md text-on-surface mb-8 tracking-tighter">
          AESTHETE
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <Link
            href="/collection"
            className="text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors duration-300"
          >
            Private Collection
          </Link>
          <Link
            href="/advisory"
            className="text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors duration-300"
          >
            Advisory
          </Link>
          <Link
            href="/vault"
            className="text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors duration-300"
          >
            Client Vault
          </Link>
          <a
            href="#"
            className="text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </div>

        <div className="text-label-sm uppercase tracking-widest text-on-surface-variant/50 text-center">
          &copy; {new Date().getFullYear()} AESTHETE PRIVATE GUILD. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
