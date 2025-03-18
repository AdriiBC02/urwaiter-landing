'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-[hsl(264,60%,50%)]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Logo className="mb-4" />
          <p className="text-gray-400 text-center max-w-md">
            Transforming nightlife management with smart solutions
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <FooterSection 
            title="Company" 
            links={[
              { href: "#", text: "About" },
              { href: "/contact", text: "Contact" }
            ]} 
          />
          <FooterSection 
            title="Platform" 
            links={[
              { href: "#features", text: "Features" },
              { href: "#solutions", text: "Solutions" }
            ]} 
          />
          <FooterSection 
            title="Legal" 
            links={[
              { href: "#", text: "Privacy" },
              { href: "#", text: "Terms" }
            ]} 
          />
          <FooterSection 
            title="Connect" 
            links={[
              { href: "#", text: "LinkedIn" },
              { href: "#", text: "Twitter" }
            ]} 
          />
        </div>
        <div className="text-center text-gray-400 pt-8 border-t border-[hsl(264,60%,50%)]/10">
          <p>©{new Date().getFullYear()} UrWaiter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterSection({ title, links }: { 
  title: string; 
  links: Array<{ href: string; text: string; }> 
}) {
  return (
    <div>
      <h3 className="font-semibold mb-4 gradient-text">{title}</h3>
      <ul className="space-y-2 text-gray-400">
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.href} className="hover:text-white transition-colors">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}