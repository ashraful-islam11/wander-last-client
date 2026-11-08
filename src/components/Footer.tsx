import Link from "next/link";
import { ArrowUpRight, } from "lucide-react";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-slate-300 pt-20 pb-10 px-4 md:px-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Top Branding Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-2">
            Wanderlust
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Main Footer Links & Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-neutral-800">
          {/* Newsletter Section */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3">
              Newsletter
            </h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-none px-3 py-2 max-w-sm">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none w-full"
              />
              <button className="text-slate-400 hover:text-white transition-colors p-1">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-slate-300 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="text-slate-300 hover:text-white transition-colors">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-slate-300 hover:text-white transition-colors">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/help-center" className="text-slate-300 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>786 901 1622</li>
              <li>
                <a href="mailto:info@wandarland.com" className="hover:text-white transition-colors">
                  info@wandarland.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Icons */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 Wanderlust. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
             <FaXTwitter className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/ashraful-dev/" aria-label="LinkedIn" className="hover:text-white transition-colors">
             
              <LiaLinkedinIn className="w-4 h-4" />
              
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
             
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}