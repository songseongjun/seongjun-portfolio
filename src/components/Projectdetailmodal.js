"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import {
  FiExternalLink,
  FiGithub,
  FiFileText,
  FiServer,
  FiAirplay,
} from "react-icons/fi";
import {
  SiSpring,
  SiSpringboot,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiMariadb,
  SiRedis,
  SiDocker,
  SiGraphql,
  SiNginx,
  SiVercel,
  SiPostgresql,
} from "react-icons/si";

const techIcons = {
  Java: FiServer,
  "Java 21": FiServer,
  "Spring Boot": SiSpringboot,
  "Spring Security": SiSpring,
  JPA: FiServer,
  MyBatis: FiServer,
  JSP: FiServer,
  Servlet: FiServer,
  "REST API": FiServer,
  "Next.js": SiNextdotjs,
  "Next.js 14": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Redux Toolkit": SiRedux,
  GraphQL: SiGraphql,
  MariaDB: SiMariadb,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Docker: SiDocker,
  "AWS EC2": FiServer,
  "AWS RDS": FiServer,
  Nginx: SiNginx,
  Vercel: SiVercel,
  n8n: FiServer,
  "Node.js": FiServer,
};

const linkConfig = [
  { key: "live", label: "Live Demo", icon: FiExternalLink },
  { key: "github", label: "GitHub", icon: FiGithub },
  { key: "github_front", label: "Frontend", icon: FiGithub },
  { key: "github_back", label: "Backend", icon: FiGithub },
  { key: "docs", label: "기획서", icon: FiFileText },
  { key: "docs_2", label: "정의서", icon: FiFileText },
  { key: "ppt", label: "발표자료", icon: FiAirplay },
];

export default function ProjectDetailModal({ project, onClose }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return createPortal(
      <div
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={onClose}
      >
        <div
            className={`relative w-full ${isMobile ? 'max-w-lg' : 'max-w-5xl'} max-h-[90vh] bg-white dark:bg-[#0f0f1a] rounded-2xl shadow-2xl overflow-hidden flex flex-col`}
            onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-neutral-200 dark:border-[#2a2a44] flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                Project Detail
              </span>
            </div>

            <button
                onClick={onClose}
                className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44] flex items-center justify-center text-neutral-600 dark:text-[#b4b4c8] hover:text-[#667eea] dark:hover:text-[#a8b5ff] transition-colors"
            >
              <AiOutlineClose size={isMobile ? 16 : 20} />
            </button>
          </div>

          {/* Scroll Area */}
          <div className="overflow-y-auto flex-1 p-4 md:p-8 space-y-4 md:space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <span className="px-2 md:px-3 py-1 text-[10px] md:text-xs font-semibold rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-[#667eea] dark:text-[#a8b5ff]">
                  {project.type}
                </span>
                <span className="text-[10px] md:text-sm text-neutral-500 dark:text-[#b4b4c8]">
                  {project.period}
                </span>
              </div>
              <h3 className="text-lg md:text-3xl font-bold text-neutral-800 dark:text-[#e8e8f0]">
                {project.title}
              </h3>
            </div>

            {/* Overview */}
            {project.detailedInfo && (
                <>
                  <section>
                    <h4 className="text-sm md:text-lg font-bold mb-1.5 md:mb-2 text-neutral-900 dark:text-[#e8e8f0]">Overview</h4>
                    <p className="text-xs md:text-sm text-neutral-600 dark:text-[#b4b4c8] leading-relaxed">
                      {project.detailedInfo.overview}
                    </p>
                  </section>

                  <section>
                    <h4 className="text-sm md:text-lg font-bold mb-1.5 md:mb-2 text-neutral-900 dark:text-[#e8e8f0]">Key Point</h4>
                    <ul className="space-y-1 md:space-y-2">
                      {project.detailedInfo.keyPoints.map((p, i) => (
                          <li key={i} className="flex gap-1.5 md:gap-2 text-xs md:text-sm text-neutral-600 dark:text-[#b4b4c8]">
                            <span className="text-[#667eea] dark:text-[#a8b5ff]">•</span>
                            <span>{p}</span>
                          </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="text-sm md:text-lg font-bold mb-1.5 md:mb-2 text-neutral-900 dark:text-[#e8e8f0]">Technologies Used</h4>
                    <ul className="space-y-1 text-xs md:text-sm">
                      {Object.entries(project.detailedInfo.technologies).map(
                          ([k, v]) => (
                              <li key={k} className="text-neutral-600 dark:text-[#b4b4c8]">
                                <b className="text-neutral-900 dark:text-[#e8e8f0]">{k}</b>: {v}
                              </li>
                          )
                      )}
                    </ul>
                  </section>

                  <section>
                    <h4 className="text-sm md:text-lg font-bold mb-1.5 md:mb-2 text-neutral-900 dark:text-[#e8e8f0]">
                      Challenges and Learnings
                    </h4>
                    <ul className="space-y-1 md:space-y-2">
                      {project.detailedInfo.challenges.map((c, i) => (
                          <li key={i} className="flex gap-1.5 md:gap-2 text-xs md:text-sm text-neutral-600 dark:text-[#b4b4c8]">
                            <span className="text-[#667eea] dark:text-[#a8b5ff]">•</span>
                            <span>{c}</span>
                          </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="text-sm md:text-lg font-bold mb-1.5 md:mb-2 text-neutral-900 dark:text-[#e8e8f0]">Outcome</h4>
                    <p className="text-xs md:text-sm text-neutral-600 dark:text-[#b4b4c8]">
                      {project.detailedInfo.outcome}
                    </p>
                  </section>
                </>
            )}

            {/* Role */}
            <div className="p-3 md:p-5 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 dark:from-[#a8b5ff]/10 dark:to-[#c9a8e8]/10 border border-purple-200/50 dark:border-[#a8b5ff]/20">
              <p className="text-[10px] md:text-xs font-bold mb-1 text-[#667eea] dark:text-[#a8b5ff]">담당 역할</p>
              <p className="text-xs md:text-sm text-neutral-700 dark:text-[#d4d4e0]">{project.role}</p>
            </div>

            {/* Stack */}
            <div className="space-y-3 md:space-y-4">
              {Object.entries(project.stack).map(([cat, items]) => (
                  <div key={cat}>
                    <p className="text-[9px] md:text-[10px] font-bold uppercase text-[#667eea] dark:text-[#a8b5ff] mb-1.5 md:mb-2">
                      {cat}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {items.map((tech) => {
                        const Icon = techIcons[tech] || FiServer;
                        return (
                            <span
                                key={tech}
                                className="inline-flex items-center gap-1 md:gap-1.5 px-2 md:px-2.5 py-1 md:py-1.5 text-[10px] md:text-xs rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-[#a8b5ff]/10 dark:to-[#c9a8e8]/10 border border-purple-200/50 dark:border-[#a8b5ff]/20 text-neutral-700 dark:text-[#e8e8f0]"
                            >
                              <Icon size={isMobile ? 11 : 13} className="text-[#667eea] dark:text-[#a8b5ff]" />
                              {tech}
                            </span>
                        );
                      })}
                    </div>
                  </div>
              ))}
            </div>

            {/* Deployment */}
            {project.deployment && (
                <div className="p-3 md:p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50">
                  <p className="text-[10px] md:text-xs font-semibold mb-1 text-blue-900 dark:text-blue-200">배포 정보</p>
                  <p className="text-xs md:text-sm text-blue-800 dark:text-blue-300">{project.deployment}</p>
                </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-4">
              {linkConfig.map(({ key, label, icon: Icon }) =>
                  project.links?.[key] ? (
                      <a
                          key={key}
                          href={project.links[key]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2.5 rounded-lg bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-[10px] md:text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        <Icon size={isMobile ? 12 : 16} />
                        {label}
                      </a>
                  ) : null
              )}
            </div>
          </div>
        </div>
      </div>,
      document.body
  );
}