"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Filter } from "lucide-react";

const categories = [
  "All",
  "Branding & Identity",
  "Packaging Design",
  "Book Covers",
  "Print Design",
  "Social Media",
  "Event Posts",
  "Website Banners",
  "Video Editing"
];

const projects = [
  {
    id: "brand-identity-golden-age",
    title: "Brand Identity – Golden Age Media",
    category: "Branding & Identity",
    description: "Created a consistent and memorable visual identity for Golden Age Media, aligning brand values with modern design principles to drive recognition and audience engagement.",
    image: "/Brand Identity Design.png",
    tools: ["Adobe Illustrator", "Photoshop", "Figma"],
    metrics: "25% increase in brand engagement"
  },
  {
    id: "packaging-incense",
    title: "Incense Stick Packaging",
    category: "Packaging Design",
    description: "Designed premium packaging for traditional incense products, combining cultural aesthetics with modern design sensibilities.",
    image: "/Packaging Design.png",
    tools: ["Adobe Illustrator", "InDesign"],
    metrics: "Product line launched successfully"
  },
  {
    id: "book-cover-spiritual",
    title: "Spiritual Book Cover Design",
    category: "Book Covers",
    description: "Created compelling book cover designs that capture the essence of spiritual and devotional content.",
    image: "/Book Cover Design.png",
    tools: ["Photoshop", "Illustrator"],
    metrics: "Multiple titles published"
  },
  {
    id: "print-keychain",
    title: "Devotional Keychain Design",
    category: "Print Design",
    description: "Designed intricate devotional keychains featuring traditional artwork adapted for modern manufacturing.",
    image: "/Print Design.png",
    tools: ["CorelDRAW", "Photoshop"],
    metrics: "Bulk production ready"
  },
  {
    id: "social-media-campaign",
    title: "Social Media Campaign – Festival Posts",
    category: "Social Media",
    description: "Created engaging festival-themed social media content that resonated with audience cultural values and drove engagement.",
    image: "/Social Media Creatives.png",
    tools: ["Canva", "Photoshop", "Premiere Pro"],
    metrics: "30% follower growth"
  },
  {
    id: "event-poster-ganesh",
    title: "Event Poster",
    category: "Event Posts",
    description: "Designed vibrant event posters for cultural celebrations, balancing traditional aesthetics with contemporary design trends.",
    image: "/Event Poster Design.png",
    tools: ["Photoshop", "Illustrator"],
    metrics: "Event promoted successfully"
  },
  {
    id: "website-banner-ecommerce",
    title: "E-commerce Website Banners",
    category: "Website Banners",
    description: "Created conversion-focused website banners for e-commerce platforms, optimizing for both visual appeal and click-through rates.",
    image: "/Website Banner Design.png",
    tools: ["Photoshop", "Figma"],
    metrics: "Improved CTR by 20%"
  },
  {
    id: "video-promo-brand",
    title: "Brand Promotional Video",
    category: "Video Editing",
    description: "Produced engaging promotional videos featuring motion graphics and professional editing for brand campaigns.",
    image: "/Video Editing.png",
    tools: ["Premiere Pro", "After Effects"],
    metrics: "40% increase in video reach"
  },
  {
    id: "brand-logo-collection",
    title: "Logo Design Collection",
    category: "Branding & Identity",
    description: "Developed unique brand identities and logos for various businesses, ensuring memorability and brand recognition.",
    image: "/Logo Design.png",
    tools: ["Illustrator", "Figma"],
    metrics: "10+ brands served"
  },
  {
    id: "packaging-premium-box",
    title: "Premium Gift Box Design",
    category: "Packaging Design",
    description: "Designed luxury packaging solutions for premium gift products with attention to unboxing experience.",
    image: "/Packaging Design.png",
    tools: ["Illustrator", "Photoshop"],
    metrics: "Premium line launched"
  },
  {
    id: "social-reels",
    title: "Instagram Reels & Stories",
    category: "Social Media",
    description: "Created trend-based Instagram Reels and Stories content optimized for maximum engagement and reach.",
    image: "/Instagram Reels & Story Content.png",
    tools: ["Premiere Pro", "After Effects", "Canva"],
    metrics: "40% reach increase"
  },
  {
    id: "print-brochure",
    title: "Corporate Brochure Design",
    category: "Print Design",
    description: "Designed professional corporate brochures that effectively communicate brand values and services.",
    image: "/Marketing & Promotional Design.png",
    tools: ["InDesign", "Illustrator"],
    metrics: "Used in client meetings"
  }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#a0a0b0] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              My <span className="gradient-text">Creative Universe</span>
            </h1>
            <p className="text-[#a0a0b0] text-lg max-w-2xl mx-auto">
              A curated collection of my best graphic design, video editing, and social media work. 
              Click on any piece to see it in detail.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Explore My Artworks</h2>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-[#12121a] border border-[rgba(255,255,255,0.08)]"
            >
              <Filter size={18} />
              Filter
            </button>
          </div>

          <div className={`${isFilterOpen ? "block" : "hidden"} md:block`}>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setIsFilterOpen(false);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white"
                      : "bg-[#12121a] text-[#a0a0b0] border border-[rgba(255,255,255,0.08)] hover:border-[#7c3aed]/50 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="project-card bg-[#12121a] border border-[rgba(255,255,255,0.08)] overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                      <span className="btn-primary text-xs py-2 px-4">View Project</span>
                      <span className="btn-secondary text-xs py-2 px-4 flex items-center gap-1">
                        Case Study <ExternalLink size={12} />
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <span className="text-xs text-[#7c3aed] font-medium mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[#7c3aed] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#a0a0b0] mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 text-xs rounded bg-[#1a1a24] text-[#a0a0b0]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-[#a0a0b0] text-lg">
              No projects found in this category. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
