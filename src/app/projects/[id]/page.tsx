"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const projectsData: Record<string, {
  title: string;
  category: string;
  client: string;
  duration: string;
  overview: string;
  problem: string;
  goal: string;
  process: string[];
  tools: string[];
  outcome: string;
  metrics: string[];
  images: string[];
}> = {
  "brand-identity-golden-age": {
    title: "Brand Identity – Golden Age Media",
    category: "Branding & Identity",
    client: "Golden Age Media",
    duration: "Oct 2023 – Present",
    overview:
      "Created a consistent and memorable visual identity for Golden Age Media, aligning brand values with modern design principles to drive recognition and audience engagement.",
    problem:
      "The brand lacked a unified and professional visual identity across platforms.",
    goal:
      "Build a complete and consistent brand identity system.",
    process: [
      "Brand discovery and research",
      "Logo and visual concept development",
      "Typography and color system creation",
      "Brand guideline documentation",
      "Collateral design for digital and print"
    ],
    tools: ["Adobe Illustrator", "Photoshop", "Figma"],
    outcome:
      "Brand identity successfully implemented across all channels.",
    metrics: ["25% increase in brand engagement"],
    images: ["/Brand Identity Design.png"]
    
  },

  "packaging-incense": {
    title: "Incense Stick Packaging",
    category: "Packaging Design",
    client: "Traditional Products Co.",
    duration: "3 weeks",
    overview:
      "Designed premium packaging for traditional incense products with cultural and modern appeal.",
    problem:
      "Packaging lacked shelf appeal and premium positioning.",
    goal:
      "Create visually rich and market-ready packaging.",
    process: [
      "Cultural design research",
      "Packaging concept sketches",
      "Design refinement",
      "Print-ready file preparation"
    ],
    tools: ["Adobe Illustrator", "InDesign"],
    outcome:
      "Product packaging launched successfully.",
    metrics: ["Product line launched successfully"],
    images: ["/Packaging Design.png"]
  },

  "book-cover-spiritual": {
    title: "Spiritual Book Cover Design",
    category: "Book Covers",
    client: "Independent Authors",
    duration: "Ongoing",
    overview:
      "Designed spiritual book covers reflecting devotional themes.",
    problem:
      "Books needed visually meaningful and market-ready covers.",
    goal:
      "Create engaging spiritual book covers.",
    process: [
      "Content understanding",
      "Concept design",
      "Typography selection",
      "Final cover layout"
    ],
    tools: ["Photoshop", "Illustrator"],
    outcome:
      "Multiple book titles published.",
    metrics: ["Multiple titles published"],
    images: ["/Book Cover Design.png"]

  },

  "print-keychain": {
    title: "Devotional Keychain Design",
    category: "Print Design",
    client: "Religious Merchandise Vendors",
    duration: "2 weeks",
    overview:
      "Designed devotional keychains with traditional artwork.",
    problem:
      "Designs needed to be detailed yet production-friendly.",
    goal:
      "Prepare designs suitable for bulk manufacturing.",
    process: [
      "Artwork selection",
      "Print adaptation",
      "Production optimization"
    ],
    tools: ["CorelDRAW", "Photoshop"],
    outcome:
      "Designs approved for mass production.",
    metrics: ["Bulk production ready"],
    images: ["/Print Design.png"]
  },

  "social-media-campaign": {
    title: "Social Media Campaign – Festival Posts",
    category: "Social Media",
    client: "Golden Age Media",
    duration: "Ongoing",
    overview:
      "Created festival-based social media creatives to increase engagement.",
    problem:
      "Festival posts needed higher engagement and visibility.",
    goal:
      "Boost follower growth and interaction.",
    process: [
      "Festival trend research",
      "Content planning",
      "Design and motion creation",
      "Performance tracking"
    ],
    tools: ["Canva", "Photoshop", "Premiere Pro"],
    outcome:
      "Significant growth in engagement.",
    metrics: ["30% follower growth"],
      images: ["/Social Media Creatives.png"]

  },

  "event-poster-ganesh": {
    title: "Ganesh Chaturthi Event Poster",
    category: "Event Posts",
    client: "Local Event Organizers",
    duration: "1 week",
    overview:
      "Designed vibrant posters for Ganesh Chaturthi celebrations.",
    problem:
      "Event required eye-catching promotional visuals.",
    goal:
      "Create posters suitable for print and digital use.",
    process: [
      "Theme research",
      "Poster layout design",
      "Final artwork delivery"
    ],
    tools: ["Photoshop", "Illustrator"],
    outcome:
      "Posters successfully used for promotion.",
    metrics: ["Event promoted successfully"],
      images: ["/Event Poster Design.png"]

  },

  "website-banner-ecommerce": {
    title: "E-commerce Website Banners",
    category: "Website Banners",
    client: "Multiple Brands",
    duration: "Ongoing",
    overview:
      "Designed conversion-focused e-commerce banners.",
    problem:
      "Low CTR from existing banner designs.",
    goal:
      "Improve click-through performance.",
    process: [
      "Banner performance analysis",
      "Design optimization",
      "Responsive layouts"
    ],
    tools: ["Photoshop", "Figma"],
    outcome:
      "Improved banner engagement.",
    metrics: ["Improved CTR by 20%"],
      images: ["/Website Banner Design.png"]

  },

  "video-promo-brand": {
    title: "Brand Promotional Video",
    category: "Video Editing",
    client: "Golden Age Media",
    duration: "2 weeks",
    overview:
      "Produced promotional videos with motion graphics.",
    problem:
      "Brand needed higher reach via video content.",
    goal:
      "Increase visibility and engagement.",
    process: [
      "Video concept planning",
      "Editing and motion graphics",
      "Platform optimization"
    ],
    tools: ["Premiere Pro", "After Effects"],
    outcome:
      "Videos reached wider audience.",
    metrics: ["40% increase in video reach"],
      images: ["/Video Editing.png"]

  },

  "brand-logo-collection": {
    title: "Logo Design Collection",
    category: "Branding & Identity",
    client: "Multiple Clients",
    duration: "Ongoing",
    overview:
      "Designed logos for multiple brands.",
    problem:
      "Brands needed unique visual identities.",
    goal:
      "Create memorable logo designs.",
    process: [
      "Brand research",
      "Concept sketches",
      "Logo refinement"
    ],
    tools: ["Illustrator", "Figma"],
    outcome:
      "Successful logo delivery across brands.",
    metrics: ["10+ brands served"],
      images: ["/Logo Design.png"]

  },

  "packaging-premium-box": {
    title: "Premium Gift Box Design",
    category: "Packaging Design",
    client: "Gift Product Brands",
    duration: "2 weeks",
    overview:
      "Designed premium gift box packaging.",
    problem:
      "Packaging needed a luxury look.",
    goal:
      "Enhance unboxing experience.",
    process: [
      "Concept development",
      "Design refinement",
      "Production readiness"
    ],
    tools: ["Illustrator", "Photoshop"],
    outcome:
      "Premium packaging launched.",
    metrics: ["Premium line launched"],
      images: ["/Packaging Design.png"]

  },

  "social-reels": {
    title: "Instagram Reels & Stories",
    category: "Social Media",
    client: "Golden Age Media",
    duration: "Ongoing",
    overview:
      "Created trend-based reels and stories.",
    problem:
      "Low reach on short-form videos.",
    goal:
      "Increase reach and engagement.",
    process: [
      "Trend analysis",
      "Video editing",
      "Publishing optimization"
    ],
    tools: ["Premiere Pro", "After Effects", "Canva"],
    outcome:
      "Higher reach on social platforms.",
    metrics: ["40% reach increase"],
      images: ["/Instagram Reels & Story Content.png"]

  },

  "print-brochure": {
    title: "Corporate Brochure Design",
    category: "Print Design",
    client: "Corporate Clients",
    duration: "1 week",
    overview:
      "Designed professional corporate brochures.",
    problem:
      "Clients needed clear marketing collateral.",
    goal:
      "Present services effectively.",
    process: [
      "Content organization",
      "Layout design",
      "Print optimization"
    ],
    tools: ["InDesign", "Illustrator"],
    outcome:
      "Brochures used in meetings.",
    metrics: ["Used in client meetings"],
      images: ["/Marketing & Promotional Design.png"]

  }
};

const defaultProject = {
  title: "Project Details",
  category: "Design",
  client: "Various Clients",
  duration: "Ongoing",
  overview: "A comprehensive design project showcasing creative problem-solving and visual storytelling abilities.",
  problem: "Clients needed innovative design solutions that would help them stand out in competitive markets.",
  goal: "Deliver high-quality design work that exceeds client expectations and achieves measurable results.",
  process: [
    "Client consultation and requirement gathering",
    "Research and competitive analysis",
    "Concept development and iteration",
    "Design refinement based on feedback",
    "Final delivery and implementation support"
  ],
  tools: ["Adobe Creative Suite", "Figma", "Canva"],
  outcome: "Successfully delivered projects that helped clients achieve their business objectives.",
  metrics: ["Client satisfaction", "On-time delivery", "Quality results"],
  images: [
    "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop"
  ]
};

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projectsData[projectId] || defaultProject;

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#a0a0b0] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          <div className="mb-8">
            <span className="text-sm text-[#7c3aed] font-medium mb-2 block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-[#a0a0b0]">
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                {project.client}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {project.duration}
              </span>
            </div>
          </div>

          <div className="relative aspect-video rounded-xl overflow-hidden mb-12">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-[#a0a0b0] leading-relaxed">{project.overview}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
                <p className="text-[#a0a0b0] leading-relaxed">{project.problem}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">The Goal</h2>
                <p className="text-[#a0a0b0] leading-relaxed">{project.goal}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Design Process</h2>
                <ul className="space-y-3">
                  {project.process.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#a0a0b0]">
                      <CheckCircle2 size={20} className="text-[#7c3aed] mt-0.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Final Outcome</h2>
                <p className="text-[#a0a0b0] leading-relaxed">{project.outcome}</p>
              </section>
            </div>

            <div className="space-y-6">
              <div className="gradient-border p-6 sticky top-24">
                <h3 className="font-semibold mb-4">Tools Used</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-sm rounded-full bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold mb-4">Key Metrics</h3>
                <ul className="space-y-2">
                  {project.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#a0a0b0]">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4]" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {project.images.length > 1 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.images.slice(1).map((image, i) => (
                  <div key={i} className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${i + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="flex justify-between items-center pt-8 border-t border-[rgba(255,255,255,0.08)]">
            <Link
              href="/projects"
              className="btn-secondary flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              All Projects
            </Link>
            <Link
              href="/contact"
              className="btn-primary flex items-center gap-2"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
