"use client";

import Link from "next/link";
import { Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[#0a0a0f]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center">
                <span className="text-white font-bold text-lg">SK</span>
              </div>
              <span className="font-semibold text-lg">Suraj Kumar</span>
            </Link>
            <p className="text-[#a0a0b0] text-sm max-w-md mb-6">
              Creative designer and digital marketer with 2+ years of experience
              driving engagement through data-driven visual storytelling and brand identity design.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/suraj-kumar-design/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#a0a0b0] hover:text-white hover:border-[#7c3aed] hover:bg-[#7c3aed]/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/surajdesigns"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#a0a0b0] hover:text-white hover:border-[#7c3aed] hover:bg-[#7c3aed]/10 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:suraj244023@gmail.com"
                className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#a0a0b0] hover:text-white hover:border-[#7c3aed] hover:bg-[#7c3aed]/10 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#a0a0b0] hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[#a0a0b0] hover:text-white text-sm transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-[#a0a0b0] hover:text-white text-sm transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#a0a0b0] hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#a0a0b0] text-sm">
                <Mail size={16} />
                <a href="mailto:suraj244023@gmail.com" className="hover:text-white transition-colors">
                  suraj244023@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#a0a0b0] text-sm">
                <Phone size={16} />
                <a href="tel:+919811922637" className="hover:text-white transition-colors">
                  +91 9811922637
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#a0a0b0] text-sm">
                <MapPin size={16} />
                <span>Faridabad, Haryana, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.08)] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#a0a0b0] text-sm">
            © {currentYear} Suraj Kumar. All rights reserved.
          </p>
          <p className="text-[#a0a0b0] text-sm">
            Designed & Developed by Suraj Kumar
          </p>
        </div>
      </div>
    </footer>
  );
}
