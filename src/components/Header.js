"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineSun,
  HiOutlineMoon,
  HiHome,
  HiUser,
  HiBriefcase,
  HiEnvelope,
} from "react-icons/hi2";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 처음 화면이 열렸을 때 테마와 화면 크기를 확인
  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem("theme");

    const isDark =
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // 스크롤 위치 확인
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 다크모드 / 라이트모드 전환
  const toggleTheme = () => {
    const nextDark = !dark;

    setDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // 상단 메뉴
  const navLinks = [
    {
      label: "Home",
      href: "#",
      icon: HiHome,
    },
    {
      label: "About",
      href: "#about",
      icon: HiUser,
    },
    {
      label: "Projects",
      href: "#projects",
      icon: HiBriefcase,
    },
    {
      label: "Contact",
      href: "#contact",
      icon: HiEnvelope,
    },
  ];

  // 헤더 배경
  const gradientBgStyle = dark
    ? {
        background:
          "linear-gradient(to right, rgba(168, 181, 255, 0.08), #0f0f1a, rgba(201, 168, 232, 0.08))",
        backgroundColor: "#0f0f1a",
      }
    : {
        background:
          "linear-gradient(to right, rgba(237, 233, 254, 0.4), white, rgba(219, 234, 254, 0.4))",
        backgroundColor: "white",
      };

  // 모바일에서는 항상 배경 표시
  // 데스크톱에서는 스크롤했을 때 배경 표시
  const shouldShowGradient = isMobile || scrolled;

  return (
    <>
      {/* 상단 헤더 */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-2 border-b border-neutral-200/50 dark:border-[#a8b5ff]/20 shadow-sm"
            : "py-2 md:py-4 border-b md:border-b-0 border-neutral-200/50 dark:border-neutral-800/50"
        }`}
        style={
          shouldShowGradient
            ? gradientBgStyle
            : { background: "transparent" }
        }
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* 로고 */}
          <motion.a
            href="#"
            className="group relative flex items-center gap-2"
            whileHover="hover"
          >
            {/* SJ 아이콘 전체 영역 */}
            <div className="relative w-10 h-10 flex items-center justify-center shrink-0">

              {/* 바깥 그라데이션 효과 */}
              <motion.div
                className="
                  absolute
                  inset-0
                  rounded-xl
                  bg-gradient-to-tr
                  from-[#667eea]
                  to-[#764ba2]
                  dark:from-[#a8b5ff]
                  dark:to-[#c9a8e8]
                  opacity-20
                  group-hover:opacity-40
                "
                variants={{
                  hover: {
                    scale: 1.08,
                    rotate: 6,
                  },
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
              />

              {/* 실제 SJ 박스 */}
              <div
                className="
                  relative
                  w-8
                  h-8
                  rounded-lg
                  bg-white
                  dark:bg-neutral-900
                  border
                  border-neutral-200
                  dark:border-[#a8b5ff]/30
                  shadow-sm
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
              >
                {/* SJ 텍스트 - 항상 정확히 중앙 고정 */}
                <span
                  className="
                    w-full
                    h-full
                    flex
                    items-center
                    justify-center
                    text-center
                    text-[14px]
                    leading-none
                    font-black
                    tracking-tighter
                    gradient-text
                    select-none
                  "
                >
                  SJ
                </span>
              </div>
            </div>

            {/* 포트폴리오 이름 */}
            <span className="font-bold text-lg tracking-tight gradient-text">
              Seongjun&apos;s Portfolio
            </span>
          </motion.a>

          {/* PC 메뉴 */}
          <nav className="hidden md:flex items-center gap-1 bg-gradient-to-r from-purple-50/50 via-white/50 to-blue-50/50 dark:from-[#a8b5ff]/5 dark:via-[#1c1c2e] dark:to-[#c9a8e8]/5 p-1.5 rounded-full border border-purple-200/30 dark:border-[#a8b5ff]/30 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-[13px] font-semibold text-neutral-700 dark:text-neutral-200 hover:text-[#667eea] dark:hover:text-[#a8b5ff] transition-all"
              >
                <span className="relative z-10">
                  {link.label}
                </span>

                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 dark:from-[#a8b5ff]/20 dark:to-[#c9a8e8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] dark:from-[#a8b5ff] dark:to-[#c9a8e8] group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>
            ))}

            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="group relative ml-1 w-9 h-9 rounded-full flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:text-[#667eea] dark:hover:text-[#a8b5ff] transition-all"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 dark:from-[#a8b5ff]/20 dark:to-[#c9a8e8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="relative z-10">
                  {dark ? (
                    <HiOutlineSun size={18} />
                  ) : (
                    <HiOutlineMoon size={18} />
                  )}
                </span>
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* 모바일 하단 메뉴 */}
      <nav
        className="md:hidden fixed bottom-0 left-0 w-full z-50 border-t border-neutral-200/50 dark:border-[#a8b5ff]/20 shadow-lg"
        style={gradientBgStyle}
      >
        <div className="flex items-center justify-around py-2">
          {navLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              className="flex items-center justify-center w-10 h-10 text-neutral-600 dark:text-neutral-300 hover:text-[#667eea] dark:hover:text-[#a8b5ff] transition-colors"
            >
              <Icon size={22} />
            </a>
          ))}

          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-10 h-10 text-neutral-600 dark:text-neutral-300 hover:text-[#667eea] dark:hover:text-[#a8b5ff] transition-colors"
            >
              {dark ? (
                <HiOutlineSun size={22} />
              ) : (
                <HiOutlineMoon size={22} />
              )}
            </button>
          )}
        </div>
      </nav>
    </>
  );
}