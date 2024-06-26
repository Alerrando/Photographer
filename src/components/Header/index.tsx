import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center fixed top-0 text-black bg-white z-10">
      <div className="w-full md:w-4/5 flex items-center justify-between px-4 py-2 md:px-0 md:py-3">
        <h2 className="text-2xl md:text-4xl font-bold">MIYUKI</h2>

        <ul className="flex items-center gap-8">
          <Link href="/">
            <li className="text-xs md:text-base hover:font-bold">Home</li>
          </Link>

          <Link href="/gallery">
            <li className="text-xs md:text-base hover:font-bold">Gallery</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
