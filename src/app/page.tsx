"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroCard from "@/components/HeroCard";
import { 
  Download, 
  ArrowRight, 
  Briefcase, 
  GraduationCap,
  Lightbulb,
  Clock,
  Users,
  Target,
  Eye,
  Sparkles
} from "lucide-react";

const titles = [
  "Graphic Designer",
  "Video Editor", 
  "Social Media Coordinator",
  "SEO Coordinator"
];

const designTools = [
  { name: "Adobe Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
  { name: "Adobe Illustrator", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
  { name: "Adobe Premiere Pro", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg" },
  { name: "After Effects", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
];

const devTools = [
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
];

const marketingTools = [
  { name: "Google Analytics", fallback: "📊" },
  { name: "SEMrush", fallback: "🔍" },
  { name: "Ahrefs", fallback: "📈" },
  { name: "Meta Business Suite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg", fallback: "📱" },
  { name: "Hootsuite", fallback: "🦉" },
];

const softSkills = [
  { name: "Creative Thinking", icon: Lightbulb },
  { name: "Time Management", icon: Clock },
  { name: "Team Collaboration", icon: Users },
  { name: "Problem Solving", icon: Target },
  { name: "Visual Storytelling", icon: Eye },
];

const experiences = [
  {
    company: "Golden Age Media",
    location: "Okhla, Delhi",
    role: "Junior Graphic Designer & Social Media Coordinator",
    period: "Oct 2023 – Present",
    highlights: [
      "Designed 200+ marketing assets including social media graphics, brand collaterals, and motion videos resulting in 25% increase in audience engagement across platforms",
      "Managed end-to-end social media operations for 5+ client brands including content scheduling, community management, and performance tracking using analytics tools",
      "Collaborated with cross-functional teams (marketing, product, development) to maintain brand consistency across 10+ digital channels and campaigns",
      "Analyzed performance metrics (reach, CTR, engagement rate) and optimized content strategy, improving follower growth by 30% quarter-over-quarter",
      "Created trend-based content and motion graphics using Adobe Premiere Pro and After Effects, increasing video content reach by 40%"
    ]
  },
  {
    company: "GrowBySearch",
    location: "Faridabad, Haryana",
    role: "SEO Coordinator",
    period: "Mar 2023 – Present",
    highlights: [
      "Conducted comprehensive keyword research and competitive analysis using SEMrush and Ahrefs, identifying 100+ high-value keyword opportunities",
      "Produced 50+ SEO-optimized blog posts and landing pages, increasing organic traffic by 45% and improving domain authority",
      "Built strategic backlink partnerships with 20+ high-authority domains through outreach campaigns and guest posting initiatives",
      "Monitored website analytics using Google Analytics and generated monthly reports tracking KPIs including impressions, clicks, and SERP rankings",
      "Coordinated with content and marketing teams to align SEO strategy with brand messaging, ensuring consistent optimization across all digital assets"
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA) – Computer Graphics",
    institute: "Maharaja Agrasen Himalayan Garhwal University",
    location: "Uttarakhand",
    period: "Jul 2024 – Jul 2026"
  },
  {
    degree: "Master Diploma in Computer Applications (MDCA)",
    institute: "Global Institute of IT and Management",
    location: "Faridabad",
    period: "2021 – 2023"
  },
  {
    degree: "12th Grade (Senior Secondary)",
    institute: "Haryana Open Schooling Board",
    location: "Haryana, India",
    period: "Completed 2024"
  }
];

const achievements = [
  "Increased social media engagement by 25% through strategic content design and data-driven optimization",
  "Boosted organic website traffic by 45% through comprehensive SEO strategy and content optimization",
  "Managed visual branding for 5+ concurrent clients while maintaining 100% on-time project delivery",
  "Improved video content reach by 40% through trend analysis and strategic motion graphics implementation"
];

const brandLogos = [
  "Adobe Suite", "Figma", "Canva", "WordPress", "Google Analytics", 
  "SEMrush", "Ahrefs", "Meta Business Suite", "Hootsuite", "Buffer"
];

function RotatingTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 overflow-hidden">
      <motion.div
        key={currentIndex}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-2xl md:text-3xl font-medium gradient-text"
      >
        {titles[currentIndex]}
      </motion.div>
    </div>
  );
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function SkillCard({ name, logo, fallback, index }: { name: string; logo?: string; fallback?: string; index: number }) {
  const [imgError, setImgError] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
      className="skill-card flex flex-col items-center gap-3 group"
    >
      <div className="w-12 h-12 flex items-center justify-center">
        {logo && !imgError ? (
          <Image
            src={logo}
            alt={name}
            width={48}
            height={48}
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-3xl">{fallback || "🔧"}</span>
        )}
      </div>
      <span className="text-sm text-center text-[#a0a0b0] group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="relative">
      <section className="min-h-screen flex items-center justify-center pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 mb-6"
              >
                <Sparkles size={16} className="text-[#7c3aed]" />
                <span className="text-sm text-[#a0a0b0]">Available for opportunities</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Hi, I&apos;m{" "}
                <span className="gradient-text">Suraj Kumar</span>
              </h1>

              <RotatingTitle />

              <p className="text-lg text-[#a0a0b0] mt-6 mb-8 max-w-xl leading-relaxed">
                Creative designer and digital marketer with 2+ years of experience driving 25% engagement growth 
                through data-driven visual storytelling. Expertise in brand identity design, video production, 
                and social media strategy using Adobe Creative Suite, Figma, and SEO tools.
              </p>

              <div className="flex flex-wrap gap-4">  
                <a href="/suraj_kumar.pdf" download className="btn-primary flex items-center gap-2">
                  <Download size={18} />
                  Download Resume
                </a>
                <Link href="/projects" className="btn-secondary flex items-center gap-2">
                  View Projects
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Me
                </Link>
              </div>

              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-[rgba(255,255,255,0.08)]">
                <div>
                  <div className="text-3xl font-bold gradient-text">2+</div>
                  <div className="text-sm text-[#a0a0b0]">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">200+</div>
                  <div className="text-sm text-[#a0a0b0]">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">25%</div>
                  <div className="text-sm text-[#a0a0b0]">Engagement Growth</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative overflow-visible flex items-center justify-center"
            >
              <HeroCard />
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-[#a0a0b0] leading-relaxed mb-6">
                Creative and detail-oriented Graphic Designer, Video Editor, and Social Media Coordinator 
                with 2 years of experience delivering innovative design solutions across digital, print, 
                and social platforms. Skilled in branding, marketing collateral, visual storytelling, 
                and content scheduling.
              </p>
              <p className="text-[#a0a0b0] leading-relaxed mb-6">
                Strong expertise in Adobe Creative Suite, Figma, and Canva. Committed to producing 
                high-impact visuals and content that boost engagement, strengthen brand identity, 
                and enhance user experience.
              </p>
              <p className="text-[#a0a0b0] leading-relaxed">
                Proven track record of executing cross-functional campaigns that enhance brand presence 
                and optimize digital performance.
              </p>
            </div>

            <div className="space-y-6">
              <div className="gradient-border p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Briefcase size={20} className="text-[#7c3aed]" />
                  Core Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Graphic Design", "UI/UX", "Branding", "Video Editing",
                    "Motion Graphics", "Social Media Strategy", "SEO",
                    "Content Marketing", "Data Analytics"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="gradient-border p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Target size={20} className="text-[#06b6d4]" />
                  Key Achievements
                </h4>
                <ul className="space-y-2 text-sm text-[#a0a0b0]">
                  {achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#06b6d4] mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-6 section-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Tools</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] mx-auto rounded-full" />
            <p className="text-[#a0a0b0] mt-4 max-w-2xl mx-auto">
              Proficient in industry-leading design, development, and marketing tools
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#7c3aed]/20 flex items-center justify-center text-[#7c3aed]">🎨</span>
                Design Tools
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {designTools.map((tool, i) => (
                  <SkillCard key={tool.name} {...tool} index={i} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#06b6d4]/20 flex items-center justify-center text-[#06b6d4]">💻</span>
                Development & Tech
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {devTools.map((tool, i) => (
                  <SkillCard key={tool.name} {...tool} index={i} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#10b981]/20 flex items-center justify-center text-[#10b981]">📈</span>
                Marketing & SEO
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {marketingTools.map((tool, i) => (
                  <SkillCard key={tool.name} {...tool} index={i} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#f59e0b]/20 flex items-center justify-center text-[#f59e0b]">🧠</span>
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {softSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="skill-card flex flex-col items-center gap-3 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7c3aed]/20 to-[#06b6d4]/20 flex items-center justify-center group-hover:from-[#7c3aed]/30 group-hover:to-[#06b6d4]/30 transition-all">
                      <skill.icon size={24} className="text-[#a0a0b0] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-center text-[#a0a0b0] group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] mx-auto rounded-full" />
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7c3aed] to-[#06b6d4]" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                } pl-8 md:pl-0`}
              >
                <div className={`absolute top-0 w-4 h-4 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] border-4 border-[#0a0a0f] ${
                  index % 2 === 0 ? "left-[-8px] md:left-auto md:right-[-8px]" : "left-[-8px] md:left-[-8px]"
                }`} />

                <div className="gradient-border p-6 hover:border-[#7c3aed]/50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-[#7c3aed]">{exp.company}</p>
                      <p className="text-sm text-[#a0a0b0]">{exp.location}</p>
                    </div>
                    <span className="text-sm text-[#a0a0b0] whitespace-nowrap">{exp.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#a0a0b0]">
                        <span className="text-[#06b6d4] mt-1 shrink-0">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-6 section-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="gradient-border p-6 glow-card"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7c3aed]/20 to-[#06b6d4]/20 flex items-center justify-center mb-4">
                  <GraduationCap size={24} className="text-[#7c3aed]" />
                </div>
                <h3 className="font-semibold mb-2">{edu.degree}</h3>
                <p className="text-[#7c3aed] text-sm mb-1">{edu.institute}</p>
                <p className="text-[#a0a0b0] text-sm">{edu.location}</p>
                <p className="text-[#a0a0b0] text-sm mt-2">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tools & Brands</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] mx-auto rounded-full" />
          </div>

          <div className="marquee">
            <div className="marquee-content gap-12">
              {[...brandLogos, ...brandLogos].map((brand, i) => (
                <div
                  key={`${brand}-${i}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#12121a] border border-[rgba(255,255,255,0.08)] hover:border-[#7c3aed]/50 transition-colors"
                >
                  <span className="text-[#a0a0b0] whitespace-nowrap">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-[#a0a0b0] text-lg mb-8 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;m always open to discussing 
            new opportunities and creative ideas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary flex items-center gap-2">
              Get in Touch
              <ArrowRight size={18} />
            </Link>
            <Link href="/projects" className="btn-secondary">
              View My Work
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
