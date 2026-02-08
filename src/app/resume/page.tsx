"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Download, Mail, Phone, MapPin, Linkedin, Printer } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
      window.open("/resume/suraj_kumar.pdf", "_blank");
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="no-print mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#a0a0b0] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Resume</h1>
              <p className="text-[#a0a0b0]">ATS-friendly format • Print-ready</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                className="btn-secondary flex items-center gap-2 text-sm"
              >
                <Printer size={16} />
                Print
              </button>
              <a
                href="/resume/suraj_kumar.pdf"
                download
                className="btn-primary flex items-center gap-2 text-sm"
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white text-black rounded-xl p-8 md:p-12 print-friendly"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <header className="border-b-2 border-gray-200 pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">SURAJ KUMAR</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <a href="mailto:suraj244023@gmail.com" className="flex items-center gap-1 hover:text-purple-600">
                <Mail size={14} />
                suraj244023@gmail.com
              </a>
              <a href="tel:+919811922637" className="flex items-center gap-1 hover:text-purple-600">
                <Phone size={14} />
                +91 9811922637
              </a>
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                Faridabad, Haryana, India
              </span>
              <a
                href="https://www.linkedin.com/in/suraj-kumar-design/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-purple-600"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>
          </header>

          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              Creative designer and digital marketer with 2+ years of experience driving 25% engagement growth 
              through data-driven visual storytelling. Expertise in brand identity design, video production, 
              and social media strategy using Adobe Creative Suite, Figma, and SEO tools. Proven track record 
              of executing cross-functional campaigns that enhance brand presence and optimize digital performance.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">
              Experience
            </h2>

            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Junior Graphic Designer & Social Media Coordinator</h3>
                  <p className="text-purple-700 font-medium">Golden Age Media, Okhla, Delhi</p>
                </div>
                <span className="text-sm text-gray-600">Oct 2023 – Present</span>
              </div>
              <ul className="list-disc list-outside ml-5 text-sm text-gray-700 space-y-1">
                <li>Designed 200+ marketing assets including social media graphics, brand collaterals, and motion videos resulting in 25% increase in audience engagement across platforms</li>
                <li>Managed end-to-end social media operations for 5+ client brands including content scheduling, community management, and performance tracking using analytics tools</li>
                <li>Collaborated with cross-functional teams (marketing, product, development) to maintain brand consistency across 10+ digital channels and campaigns</li>
                <li>Analyzed performance metrics (reach, CTR, engagement rate) and optimized content strategy, improving follower growth by 30% quarter-over-quarter</li>
                <li>Created trend-based content and motion graphics using Adobe Premiere Pro and After Effects, increasing video content reach by 40%</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">SEO Coordinator</h3>
                  <p className="text-purple-700 font-medium">GrowBySearch, Faridabad, Haryana</p>
                </div>
                <span className="text-sm text-gray-600">Mar 2023 – Present</span>
              </div>
              <ul className="list-disc list-outside ml-5 text-sm text-gray-700 space-y-1">
                <li>Conducted comprehensive keyword research and competitive analysis using SEMrush and Ahrefs, identifying 100+ high-value keyword opportunities</li>
                <li>Produced 50+ SEO-optimized blog posts and landing pages, increasing organic traffic by 45% and improving domain authority</li>
                <li>Built strategic backlink partnerships with 20+ high-authority domains through outreach campaigns and guest posting initiatives</li>
                <li>Monitored website analytics using Google Analytics and generated monthly reports tracking KPIs including impressions, clicks, and SERP rankings</li>
                <li>Coordinated with content and marketing teams to align SEO strategy with brand messaging, ensuring consistent optimization across all digital assets</li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">
              Education
            </h2>

            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Bachelor of Computer Applications (BCA) – Computer Graphics</h3>
                  <p className="text-gray-600 text-sm">Maharaja Agrasen Himalayan Garhwal University, Uttarakhand</p>
                </div>
                <span className="text-sm text-gray-600">Jul 2024 – Jul 2026</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Master Diploma in Computer Applications (MDCA)</h3>
                  <p className="text-gray-600 text-sm">Global Institute of IT and Management, Faridabad</p>
                </div>
                <span className="text-sm text-gray-600">2021 – 2023</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">12th Grade (Senior Secondary)</h3>
                  <p className="text-gray-600 text-sm">Haryana Open Schooling Board, Haryana</p>
                </div>
                <span className="text-sm text-gray-600">Completed 2024</span>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">
              Technical Skills
            </h2>

            <div className="text-sm text-gray-700 space-y-2">
              <p>
                <strong>Design Tools:</strong> Adobe Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Figma, Canva, CorelDRAW
              </p>
              <p>
                <strong>Marketing & Analytics:</strong> Google Analytics, SEMrush, Ahrefs, Meta Business Suite, Hootsuite, Buffer
              </p>
              <p>
                <strong>Content Management:</strong> WordPress, Social Media Platforms (Instagram, Facebook, LinkedIn, Twitter)
              </p>
              <p>
                <strong>Development:</strong> HTML5, CSS3, Basic JavaScript
              </p>
              <p>
                <strong>Core Competencies:</strong> Brand Identity Design, Video Editing, Motion Graphics, SEO Strategy, Content Marketing, Social Media Management, Data Analytics, A/B Testing, Cross-functional Collaboration
              </p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">
              Key Achievements
            </h2>

            <ul className="list-disc list-outside ml-5 text-sm text-gray-700 space-y-1">
              <li>Increased social media engagement by 25% through strategic content design and data-driven optimization</li>
              <li>Boosted organic website traffic by 45% through comprehensive SEO strategy and content optimization</li>
              <li>Managed visual branding for 5+ concurrent clients while maintaining 100% on-time project delivery</li>
              <li>Improved video content reach by 40% through trend analysis and strategic motion graphics implementation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">
              Soft Skills
            </h2>

            <p className="text-sm text-gray-700">
              Creative Thinking • Problem Solving • Team Collaboration • Attention to Detail • Time Management • 
              Visual Storytelling • Adaptability • Multitasking • Social Media Awareness • Client Communication
            </p>
          </section>
        </motion.article>
      </div>
    </div>
  );
}
