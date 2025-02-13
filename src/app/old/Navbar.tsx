// navigation bar on top of the pages

import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="sticky top-0 left-0 z-50 w-full bg-gray-800 text-white md:px-8 py-4">
        <div className="w-full flex justify-between items-center md:px-8 py-2">
        
          {/* Left Section with 3 Links */}
          <section className="flex space-x-4">
            <Link href="/" className="hover:underline">
              politische Bildung
            </Link>
            <Link href="/" className="hover:underline">
              politische Theorie 
            </Link>
            <Link href="/link3" className="hover:underline">
              Kommunikationstheorie
            </Link>
          </section> 
  
          {/* Middle Section with Title */}
          <section className="flex justify-center">
            <Link href="/" className="text-lg font-semibold hover:underline">
              D12N.EU
            </Link>
          </section>

          {/* Right Section with 3 Links */}
          <section className="flex space-x-4">
            <Link href="/" className="hover:underline">
              DE
            </Link>
            <Link href="/" className="hover:underline">
              EN 
            </Link>
            <Link href="/link3" className="hover:underline">
              HU
            </Link>
          </section>   
        </div>
      </nav>
    );
  }
