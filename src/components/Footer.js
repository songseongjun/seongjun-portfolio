"use client";

import { useState, useEffect } from "react";
import { FiGithub, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
      <footer className="relative z-0 border-t border-neutral-200/50 dark:border-[#2a2a44] bg-white dark:bg-[#0f0f1a] pb-16 md:pb-0">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-12">

          {isMobile ? (

              <div className="flex items-center justify-between">
                {/* Brand - LEFT */}
                <div className="text-left">
                  <h3 className="text-base font-bold gradient-text mb-0.5">
                    Seongjun's Portfolio
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-[#b4b4c8]">
                    Web Developer
                  </p>
                </div>

                {/* Icons - RIGHT */}
                <div className="flex items-center gap-2">
                  <a
                      href="https://github.com/songsseongjun"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44] flex items-center justify-center text-neutral-600 dark:text-[#b4b4c8] hover:text-[#667eea] dark:hover:text-[#a8b5ff] hover:border-[#667eea]/30 dark:hover:border-[#a8b5ff]/30 transition-colors"
                      title="GitHub"
                  >
                    <FiGithub size={16} />
                  </a>

                  <a
                      href="mailto:thdtjdwns0902@gmail.com"
                      className="w-9 h-9 rounded-lg bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44] flex items-center justify-center text-neutral-600 dark:text-[#b4b4c8] hover:text-[#667eea] dark:hover:text-[#a8b5ff] hover:border-[#667eea]/30 dark:hover:border-[#a8b5ff]/30 transition-colors"
                      title="Email"
                  >
                    <FiMail size={16} />
                  </a>

                  <a
                      href="tel:01047012571"
                      className="w-9 h-9 rounded-lg bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44] flex items-center justify-center text-neutral-600 dark:text-[#b4b4c8] hover:text-[#667eea] dark:hover:text-[#a8b5ff] hover:border-[#667eea]/30 dark:hover:border-[#a8b5ff]/30 transition-colors"
                      title="Phone"
                  >
                    <FiPhone size={16} />
                  </a>
                </div>
              </div>
          ) : (
              /* Desktop Layout (UNCHANGED) */
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left: Brand */}
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold gradient-text mb-2">
                    Seongjun's Portfolio
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-[#b4b4c8]">
                    Web Developer · Backend · Frontend
                  </p>
                </div>

                {/* Right: Social Icons */}
                <div className="flex items-center gap-3">
                  <a
                      href="https://github.com/songsseongjun"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44] flex items-center justify-center text-neutral-600 dark:text-[#b4b4c8] hover:text-[#667eea] dark:hover:text-[#a8b5ff] hover:border-[#667eea]/30 dark:hover:border-[#a8b5ff]/30 transition-colors"
                      title="GitHub"
                  >
                    <FiGithub size={18} />
                  </a>

                  <a
                      href="mailto:thdtjdwns0902@gmail.com"
                      className="w-10 h-10 rounded-xl bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44] flex items-center justify-center text-neutral-600 dark:text-[#b4b4c8] hover:text-[#667eea] dark:hover:text-[#a8b5ff] hover:border-[#667eea]/30 dark:hover:border-[#a8b5ff]/30 transition-colors"
                      title="Email"
                  >
                    <FiMail size={18} />
                  </a>

                  <a
                      href="tel:01047012571"
                      className="w-10 h-10 rounded-xl bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44] flex items-center justify-center text-neutral-600 dark:text-[#b4b4c8] hover:text-[#667eea] dark:hover:text-[#a8b5ff] hover:border-[#667eea]/30 dark:hover:border-[#a8b5ff]/30 transition-colors"
                      title="Phone"
                  >
                    <FiPhone size={18} />
                  </a>
                </div>
              </div>
          )}

        </div>
      </footer>
  );
}




