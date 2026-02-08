"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { 
  ArrowLeft, 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  CheckCircle2
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.currentTarget;
  const data = new FormData(form);

  const response = await fetch("https://formspree.io/f/mnnzkqkp", {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });

  setIsSubmitting(false);

  if (response.ok) {
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 relative z-20">
      <div className="max-w-6xl mx-auto relative z-10">
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

          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">
              Let&apos;s Create Something{" "}
              <span className="gradient-text">Amazing Together</span>
            </h1>
            <p className="text-[#a0a0b0] text-lg">
              Have a project in mind or a question about my work? Let&apos;s connect and make it happen!
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="gradient-border p-6">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <a
                  href="mailto:suraj244023@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#7c3aed]/20 flex items-center justify-center group-hover:bg-[#7c3aed]/30 transition-colors">
                    <Mail size={20} className="text-[#7c3aed]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#a0a0b0]">Email</p>
                    <p className="font-medium group-hover:text-[#7c3aed] transition-colors">
                      suraj244023@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919811922637"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#06b6d4]/20 flex items-center justify-center group-hover:bg-[#06b6d4]/30 transition-colors">
                    <Phone size={20} className="text-[#06b6d4]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#a0a0b0]">Phone</p>
                    <p className="font-medium group-hover:text-[#06b6d4] transition-colors">
                      +91 9811922637
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3">
                  <div className="w-12 h-12 rounded-full bg-[#10b981]/20 flex items-center justify-center">
                    <MapPin size={20} className="text-[#10b981]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#a0a0b0]">Location</p>
                    <p className="font-medium">Faridabad, Haryana, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6">
              <h2 className="text-xl font-semibold mb-6">Connect With Me</h2>
              
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/suraj-kumar-design/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg bg-[#0077b5]/10 border border-[#0077b5]/20 hover:bg-[#0077b5]/20 transition-colors group"
                >
                  <Linkedin size={24} className="text-[#0077b5]" />
                  <span className="font-medium text-sm">LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com/surajdesigns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <Github size={24} />
                  <span className="font-medium text-sm">GitHub</span>
                </a>
              </div>
            </div>

            <div className="gradient-border p-6">
              <h2 className="text-xl font-semibold mb-4">Availability</h2>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-[#10b981] font-medium">Available for work</span>
              </div>
              <p className="text-sm text-[#a0a0b0]">
                Currently open to freelance projects, full-time opportunities, and creative collaborations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="gradient-border p-8 relative z-10">
              <h2 className="text-2xl font-semibold mb-2">Your Idea, My Design — Let&apos;s Talk</h2>
              <p className="text-[#a0a0b0] mb-8">
                Fill out the form below and I&apos;ll get back to you within 24 hours.
              </p>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 flex items-center gap-3"
                >
                  <CheckCircle2 size={20} className="text-[#10b981]" />
                  <p className="text-[#10b981]">Message sent successfully! I&apos;ll get back to you soon.</p>
                </motion.div>
              )}

              <form
  action="https://formspree.io/f/mnnzkqkp"
  method="POST"
  onSubmit={handleSubmit}
  className="space-y-6"
>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      What should I call you?
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-[#1a1a24] border border-[rgba(255,255,255,0.08)] text-white placeholder-[#a0a0b0] focus:border-[#7c3aed] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Best Contact Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#1a1a24] border border-[rgba(255,255,255,0.08)] text-white placeholder-[#a0a0b0] focus:border-[#7c3aed] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    What&apos;s this about?
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry, collaboration, etc."
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a24] border border-[rgba(255,255,255,0.08)] text-white placeholder-[#a0a0b0] focus:border-[#7c3aed] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell me about your project or idea
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Share the details of what you're looking for..."
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a24] border border-[rgba(255,255,255,0.08)] text-white placeholder-[#a0a0b0] focus:border-[#7c3aed] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
