"use client";

import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

import { projects } from "@/data/projectsIntroduce";
import ProjectDetailModal from "@/components/Projectdetailmodal";
import ImageGalleryModal from "@/components/Imagegallerymodal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [galleryData, setGalleryData] = useState(null);
  const [filter, setFilter] = useState("All");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 모바일용 짧은 필터명
  const filters = [
    { full: "All", short: "All" },
    { full: "Spring Boot & Next.js", short: "Spring & Next" },
    { full: "JSP/Servlet", short: "JSP" },
    { full: "Java Console", short: "Java Console" },
  ];

  // =========================================================
  // 프로젝트 필터링
  // =========================================================
  const filterProjects = () => {
    // 전체 프로젝트
    if (filter === "All") {
      return projects;
    }

    // Spring Boot + Next.js 프로젝트
    if (filter === "Spring Boot & Next.js") {
      return projects.filter(
        (p) =>
          p.stack.backend?.includes("Spring Boot") &&
          (p.stack.frontend?.includes("Next.js") ||
            p.stack.frontend?.includes("Next.js 14"))
      );
    }

    // JSP / Servlet 프로젝트
    if (filter === "JSP/Servlet") {
      return projects.filter(
        (p) =>
          p.stack.backend?.includes("JSP") ||
          p.stack.backend?.includes("Servlet")
      );
    }

    // Java Console 프로젝트
    if (filter === "Java Console") {
      return projects.filter(
        (p) =>
          p.type === "Java Console" ||
          p.category === "Java Console" ||
          p.title.includes("알바존") ||
          p.type === "Mini Project"
      );
    }

    // 혹시 일치하지 않는 필터가 들어온 경우 전체 반환
    return projects;
  };

  const filteredProjects = filterProjects();

  // =========================================================
  // 이미지 갤러리 열기
  // =========================================================
  const handleOpenGallery = (images, initialIndex) => {
    setGalleryData({
      images,
      initialIndex,
    });
  };

  return (
    <section id="projects" className="relative py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* =====================================================
            Section Header
            Mobile
        ====================================================== */}
        {isMobile ? (
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 mb-4">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] animate-pulse" />

              <span className="text-sm font-semibold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                Projects
              </span>
            </div>

            <h2 className="text-2xl font-bold mb-3 text-neutral-800 dark:text-[#e8e8f0]">
              <span className="gradient-text">프로젝트</span>
            </h2>

            <p className="text-sm text-neutral-600 dark:text-[#b4b4c8]">
              다양한 기술로 구현한 경험
            </p>
          </div>
        ) : (
          /* =====================================================
              Section Header
              Desktop
          ====================================================== */
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 mb-4">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] animate-pulse" />

              <span className="text-sm font-semibold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                Projects
              </span>
            </div>

            <h2 className="text-4xl font-bold mb-4 text-neutral-800 dark:text-[#e8e8f0]">
              Full-Stack <span className="gradient-text">Projects</span>
            </h2>

            <p className="text-base text-neutral-600 dark:text-[#b4b4c8] max-w-2xl mx-auto">
              백엔드부터 프론트엔드까지, 다양한 기술 스택과 아키텍처를
              활용한 실전 프로젝트입니다.
              <br />
              각 프로젝트는 문제 해결 과정과 기술적 도전을 담고 있습니다.
            </p>
          </div>
        )}

        {/* =====================================================
            Filters
        ====================================================== */}
        <div className="mb-6 md:mb-12">
          {isMobile ? (
            /* Mobile - 짧은 이름, 가로 스크롤 */
            <div className="overflow-x-auto scrollbar-hide -mx-5 px-5">
              <div className="flex gap-2 pb-2 min-w-max">
                {filters.map((f) => (
                  <button
                    key={f.full}
                    onClick={() => setFilter(f.full)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                      filter === f.full
                        ? "bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white"
                        : "bg-white dark:bg-[#1c1c2e] text-neutral-600 dark:text-[#b4b4c8] border border-neutral-200 dark:border-[#2a2a44]"
                    }`}
                  >
                    {f.short}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Tablet & Desktop - 전체 이름, 가운데 정렬 */
            <div className="flex flex-wrap items-center justify-center gap-3">
              {filters.map((f) => (
                <button
                  key={f.full}
                  onClick={() => setFilter(f.full)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                    filter === f.full
                      ? "bg-gradient-to-r from-[#667eea] to-[#764ba2] dark:from-[#a8b5ff] dark:to-[#c9a8e8] text-white dark:text-neutral-900"
                      : "bg-white dark:bg-[#1c1c2e] text-neutral-600 dark:text-[#b4b4c8] border border-neutral-200 dark:border-[#2a2a44] hover:border-[#667eea]/30 dark:hover:border-[#a8b5ff]/30"
                  }`}
                >
                  {f.full}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* =====================================================
            Projects Grid
        ====================================================== */}
        <div className="space-y-8 md:space-y-24">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpenDetail={setSelectedProject}
              onOpenGallery={handleOpenGallery}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          Detail Modal
      ====================================================== */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* =====================================================
          Gallery Modal
      ====================================================== */}
      {galleryData && (
        <ImageGalleryModal
          images={galleryData.images}
          initialIndex={galleryData.initialIndex}
          onClose={() => setGalleryData(null)}
        />
      )}

      {/* =====================================================
          Scrollbar Hide
      ====================================================== */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}