'use client';

import React from 'react';
import Image from 'next/image';

const SKILLS = [
  { name: "Photoshop", icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg", x: -220, y: -160, size: "w-12 h-12 md:w-16 md:h-16", z: "z-30", delay: "0s", dur: "7s" },
  { name: "Illustrator", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg", x: 220, y: -120, size: "w-10 h-10 md:w-12 md:h-12", z: "z-20", delay: "1.5s", dur: "9s" },
  { name: "Premiere", icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg", x: -180, y: 140, size: "w-11 h-11 md:w-14 md:h-14", z: "z-30", delay: "2s", dur: "6s" },
  { name: "After Effects", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg", x: 170, y: 190, size: "w-8 h-8 md:w-10 md:h-10", z: "z-20", delay: "3s", dur: "10s" },
  { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", x: 40, y: -220, size: "w-10 h-10 md:w-12 md:h-12", z: "z-30", delay: "0.5s", dur: "8s" },
  { name: "WordPress", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.svg", x: 210, y: 40, size: "w-11 h-11 md:w-14 md:h-14", z: "z-30", delay: "1s", dur: "7.5s" },

  /* NEW LOGOS */
  { name: "Canva", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg", x: -260, y: -20, size: "w-10 h-10", z: "z-20", delay: "1.2s", dur: "9s" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", x: 250, y: -10, size: "w-10 h-10", z: "z-20", delay: "2.4s", dur: "10s" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", x: -40, y: 250, size: "w-10 h-10", z: "z-20", delay: "3.2s", dur: "9s" },
  { name: "JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", x: 120, y: 240, size: "w-10 h-10", z: "z-20", delay: "2.1s", dur: "8s" },
  { name: "Google Analytics", icon: "https://upload.wikimedia.org/wikipedia/commons/8/89/Google_Analytics_logo.svg", x: -250, y: 100, size: "w-10 h-10", z: "z-20", delay: "3.6s", dur: "11s" },
  { name: "Meta Ads", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png", x: 260, y: 130, size: "w-10 h-10", z: "z-20", delay: "2.8s", dur: "10s" },
];


const HeroCard = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[520px] md:min-h-[650px] w-full overflow-visible">

      <style>{`
        @keyframes deep-float {
          0%,100% { transform: translate(0,0) rotate(15deg); }
          50% { transform: translate(-10px,-25px) rotate(17deg); }
        }
        @keyframes drift {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(10px,-10px); }
        }
        @keyframes glowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .float { animation: deep-float 8s ease-in-out infinite; }
        .drift { animation: drift var(--dur) ease-in-out infinite; animation-delay: var(--delay); }
        .ring-spin { animation: glowSpin 40s linear infinite; }
      `}</style>

      {/* Background Glow */}
      <div className="absolute w-[380px] md:w-[520px] h-[380px] md:h-[520px] bg-gradient-to-r from-purple-600/30 via-cyan-500/20 to-purple-600/30 blur-[120px] rounded-full animate-pulse" />

      {/* Neon Rings */}
      <div className="absolute w-[340px] md:w-[460px] h-[340px] md:h-[460px] border border-purple-500/20 rounded-full ring-spin" />
      <div className="absolute w-[280px] md:w-[380px] h-[280px] md:h-[380px] border border-cyan-400/20 rounded-full ring-spin" />

      {/* Floating Logos */}
      {SKILLS.map((skill, i) => (
        <div
          key={i}
          className={`absolute ${skill.z} scale-75 md:scale-100`}
          style={{
            transform: `translate(${skill.x}px, ${skill.y}px)`,
            //@ts-ignore
            '--delay': skill.delay,
            '--dur': skill.dur,
          }}
        >
          <div className="drift">
            <div className={`relative ${skill.size} bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition`}>
              <Image
                src={skill.icon}
                alt={skill.name}
                width={48}
                height={48}
                className="object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Center Card */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-white/[0.05] border border-white/20 backdrop-blur-2xl rounded-[40px] md:rounded-[60px] float flex items-center justify-center shadow-[0_0_100px_rgba(124,58,237,0.25)]">

        <div className="rotate-[-11deg] flex items-center justify-center">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black/10">
            <Image
              src="/profile.png"
              alt="Suraj Kumar"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroCard;
