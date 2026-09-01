"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  SiGraphql
} from 'react-icons/si';
import { FiServer } from 'react-icons/fi';

const techIcons = {
  "Java": FiServer,
  "Java 21": FiServer,
  "Spring Boot": SiSpringboot,
  "Spring Security": SiSpring,
  "JPA": FiServer,
  "MyBatis": FiServer,
  "JSP": FiServer,
  "Servlet": FiServer,
  "REST API": FiServer,
  "Next.js": SiNextdotjs,
  "Next.js 14": SiNextdotjs,
  "React": SiReact,
  "TypeScript": SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Redux Toolkit": SiRedux,
  "GraphQL": SiGraphql,
  "MariaDB": SiMariadb,
  "Redis": SiRedis,
  "Docker": SiDocker
};

export default function ProjectCard({ project, index, onOpenDetail, onOpenGallery }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const images = [
    project.image,
    ...Object.keys(project)
        .filter((key) => key.startsWith("imageDetail"))
        .map((key) => project[key]),
  ].filter(Boolean);

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((i) => (i + 1) % images.length);
  const prevImage = () => setCurrentImage((i) => (i - 1 + images.length) % images.length);

  const stackWithoutInfra = Object.fromEntries(
      Object.entries(project.stack).filter(([key]) => key !== 'infra')
  );

  // 모바일/태블릿 레이아웃 (< 1024px)
  if (!isDesktop) {
    return (
        <article className="group relative space-y-3 lg:space-y-5">
          {/* Header */}
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="w-7 h-7 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] dark:from-[#a8b5ff] dark:to-[#c9a8e8] flex items-center justify-center flex-shrink-0">
              <span className="text-xs lg:text-base font-bold text-white dark:text-neutral-900">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] lg:text-sm font-medium text-neutral-500 dark:text-[#b4b4c8]">
              {project.period}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base lg:text-2xl font-bold leading-tight text-neutral-800 dark:text-[#e8e8f0]">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs lg:text-sm text-neutral-600 dark:text-[#b4b4c8] leading-relaxed">
            {project.desc}
          </p>

          {/* Image */}
          <div className="relative">
            <div
                className="relative aspect-[16/10] rounded-xl lg:rounded-2xl overflow-hidden bg-neutral-100 dark:bg-[#1c1c2e] shadow-lg cursor-pointer"
                onClick={() => onOpenGallery(images, currentImage)}
            >
              <img
                  src={images[currentImage]}
                  alt={project.title}
                  className="w-full h-full object-cover"
              />

              {images.length > 1 && (
                  <>
                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-white/90 dark:bg-neutral-900/90 flex items-center justify-center z-10 text-neutral-900 dark:text-white"
                    >
                      <ChevronLeft className="w-3.5 h-3.5 lg:w-5 lg:h-5" />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-white/90 dark:bg-neutral-900/90 flex items-center justify-center z-10 text-neutral-900 dark:text-white"
                    >
                      <ChevronRight className="w-3.5 h-3.5 lg:w-5 lg:h-5" />
                    </button>

                    <div className="absolute bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 lg:gap-2">
                      {images.map((_, i) => (
                          <button
                              key={i}
                              onClick={(e) => { e.stopPropagation(); setCurrentImage(i); }}
                              className={`h-1 lg:h-1.5 rounded-full transition-all ${
                                  i === currentImage ? "w-4 lg:w-6 bg-white" : "w-1 lg:w-1.5 bg-white/50"
                              }`}
                          />
                      ))}
                    </div>
                  </>
              )}
            </div>

            <p className="text-[10px] lg:text-xs text-neutral-500 dark:text-[#b4b4c8] text-center mt-2 lg:mt-3">
              이미지를 클릭하면 더 크게 볼 수 있습니다
            </p>
          </div>

          {/* Role */}
          <div className="p-3 lg:p-4 rounded-lg lg:rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 dark:from-[#a8b5ff]/10 dark:to-[#c9a8e8]/10 border border-purple-200/50 dark:border-[#a8b5ff]/20">
            <p className="text-[10px] lg:text-xs font-bold text-[#667eea] dark:text-[#a8b5ff] mb-1 lg:mb-2">
              담당 역할
            </p>
            <p className="text-xs lg:text-sm text-neutral-700 dark:text-[#e8e8f0] leading-relaxed">
              {project.role}
            </p>
          </div>

          {/* Stack */}
          {stackWithoutInfra && Object.keys(stackWithoutInfra).length > 0 && (
              <div className="space-y-2 lg:space-y-3">
                {Object.entries(stackWithoutInfra).map(([category, items]) => (
                    <div key={category}>
                      <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-[#b4b4c8] mb-1 lg:mb-2">
                        {category}
                      </p>
                      <div className="flex flex-wrap gap-1.5 lg:gap-2">
                        {items.map((tech) => {
                          const Icon = techIcons[tech] || FiServer;
                          return (
                              <span
                                  key={tech}
                                  className="inline-flex items-center gap-1 lg:gap-1.5 px-2 lg:px-2.5 py-1 lg:py-1.5 text-[10px] lg:text-xs font-medium rounded-md lg:rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-[#a8b5ff]/10 dark:to-[#c9a8e8]/10 border border-purple-200/50 dark:border-[#a8b5ff]/20 text-neutral-700 dark:text-[#e8e8f0]"
                              >
                                <Icon className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-[#667eea] dark:text-[#a8b5ff]" />
                                {tech}
                              </span>
                          );
                        })}
                      </div>
                    </div>
                ))}
              </div>
          )}

          {/* Buttons */}
          <div className="flex items-center gap-2 lg:gap-3 pt-1 lg:pt-2 lg:justify-end">
            {project.links?.live && (
                <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 lg:flex-none px-3 lg:px-5 py-2 lg:py-2.5 rounded-lg lg:rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] dark:from-[#a8b5ff] dark:to-[#c9a8e8] text-white dark:text-neutral-900 text-xs lg:text-sm font-semibold text-center hover:opacity-90 transition-opacity"
                >
                  Live Demo
                </a>
            )}
            <button
                onClick={() => onOpenDetail(project)}
                className="flex-1 lg:flex-none px-3 lg:px-5 py-2 lg:py-2.5 rounded-lg lg:rounded-xl bg-white dark:bg-[#1c1c2e] border border-[#667eea] dark:border-[#a8b5ff] text-[#667eea] dark:text-[#a8b5ff] text-xs lg:text-sm font-semibold hover:bg-purple-50 dark:hover:bg-[#a8b5ff]/5 transition-colors"
            >
              View Details
            </button>
          </div>
        </article>
    );
  }

  // 데스크톱 레이아웃 (>= 1024px)
  return (
      <article className="group relative">
        <div className="grid grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className={`relative ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
            <div className="relative">
              <div
                  className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 dark:bg-[#1c1c2e] shadow-lg cursor-pointer"
                  onClick={() => onOpenGallery(images, currentImage)}
              >
                <img
                    src={images[currentImage]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />

                {images.length > 1 && (
                    <>
                      <button
                          onClick={(e) => { e.stopPropagation(); prevImage(); }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-neutral-900 dark:text-white"
                      >
                        <ChevronLeft size={20} />
                      </button>

                      <button
                          onClick={(e) => { e.stopPropagation(); nextImage(); }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-neutral-900 dark:text-white"
                      >
                        <ChevronRight size={20} />
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setCurrentImage(i); }}
                                className={`h-1.5 rounded-full transition-all ${
                                    i === currentImage ? "w-6 bg-white" : "w-1.5 bg-white/50"
                                }`}
                            />
                        ))}
                      </div>
                    </>
                )}
              </div>

              <p className="text-xs text-neutral-500 dark:text-[#b4b4c8] text-center mt-3">
                이미지를 클릭하면 더 크게 볼 수 있습니다
              </p>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-5 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] dark:from-[#a8b5ff] dark:to-[#c9a8e8] flex items-center justify-center">
                  <span className="text-base font-bold text-white dark:text-neutral-900">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-sm font-medium text-neutral-500 dark:text-[#b4b4c8]">
                  {project.period}
                </span>
              </div>

              <h3 className="text-3xl font-bold leading-tight text-neutral-800 dark:text-[#e8e8f0]">
                {project.title}
              </h3>

              <p className="text-base text-neutral-600 dark:text-[#b4b4c8] leading-relaxed">
                {project.desc}
              </p>
            </div>

            {/* Role */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 dark:from-[#a8b5ff]/10 dark:to-[#c9a8e8]/10 border border-purple-200/50 dark:border-[#a8b5ff]/20">
              <p className="text-xs font-bold text-[#667eea] dark:text-[#a8b5ff] mb-2">
                담당 역할
              </p>
              <p className="text-sm text-neutral-700 dark:text-[#d4d4e0] leading-relaxed">
                {project.role}
              </p>
            </div>

            {/* Stack */}
            {stackWithoutInfra && Object.keys(stackWithoutInfra).length > 0 && (
                <div className="space-y-3">
                  {Object.entries(stackWithoutInfra).map(([category, items]) => (
                      <div key={category}>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-[#b4b4c8] mb-2">
                          {category}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {items.map((tech) => {
                            const Icon = techIcons[tech] || FiServer;
                            return (
                                <span
                                    key={tech}
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-[#a8b5ff]/10 dark:to-[#c9a8e8]/10 border border-purple-200/50 dark:border-[#a8b5ff]/20 text-neutral-700 dark:text-[#e8e8f0] hover:border-[#667eea]/50 dark:hover:border-[#a8b5ff]/40 transition-colors"
                                >
                                  <Icon size={13} className="text-[#667eea] dark:text-[#a8b5ff]" />
                                  {tech}
                                </span>
                            );
                          })}
                        </div>
                      </div>
                  ))}
                </div>
            )}

            {/* Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              {project.links?.live && (
                  <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] dark:from-[#a8b5ff] dark:to-[#c9a8e8] text-white dark:text-neutral-900 hover:opacity-90 transition-opacity text-sm font-semibold"
                  >
                    Live Demo
                  </a>
              )}
              <button
                  onClick={() => onOpenDetail(project)}
                  className="px-5 py-2.5 rounded-xl bg-white dark:bg-[#1c1c2e] border border-[#667eea] dark:border-[#a8b5ff] text-[#667eea] dark:text-[#a8b5ff] hover:bg-purple-50 dark:hover:bg-[#a8b5ff]/5 transition-colors text-sm font-semibold"
              >
                View Details
              </button>
            </div>

          </div>

        </div>
      </article>
  );
}