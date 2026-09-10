"use client";

import { useEffect, useState } from "react";
import { Github, Mail, Phone, ArrowDown } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [codeIndex, setCodeIndex] = useState(0);

  // 모바일 화면에서 순서대로 바뀌는 개발자 메시지
  const mobileCodes = [
    {
      text: "<Backend Developer />",
      color: "text-[#667eea] dark:text-[#a8b5ff]",
    },
    {
      text: "const curiosity = true;",
      color: "text-[#ec4899] dark:text-[#f472b6]",
    },
    {
      text: "{ debug: 'until understood' }",
      color: "text-[#f59e0b] dark:text-[#fbbf24]",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCodeIndex((prev) => (prev + 1) % mobileCodes.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  // 개발 분야
  const categories = ["Backend", "Frontend", "Database", "DevOps"];

  // 연락처
  const contacts = [
    {
      icon: Github,
      href: "https://github.com/songseongjun",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:thdtjdwns0902@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:01047012571",
      label: "Phone",
    },
  ];

  return (
    <section className="relative w-full h-auto flex flex-col items-center overflow-hidden pt-24 pb-6 md:pt-48 md:pb-20">

      {/* 배경 효과 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] -left-24 w-72 h-72 bg-gradient-to-br from-purple-300/10 to-blue-300/10 dark:from-purple-400/8 dark:to-blue-400/8 rounded-full blur-3xl animate-float" />

        <div
          className="absolute bottom-[10%] -right-24 w-96 h-96 bg-gradient-to-br from-pink-300/10 to-purple-300/10 dark:from-pink-400/8 dark:to-purple-400/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#a8b5ff05_1px,transparent_1px),linear-gradient(to_bottom,#a8b5ff05_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* 데스크톱 Floating Code */}
        <div className="hidden md:block">
          <div className="absolute top-[15%] left-[5%] opacity-40">
            <code className="text-sm text-[#667eea] dark:text-[#a8b5ff] font-mono font-semibold">
              &lt;FullStackDeveloper /&gt;
            </code>
          </div>

          <div className="absolute bottom-[20%] right-[8%] opacity-40">
            <code className="text-sm text-[#ec4899] dark:text-[#f472b6] font-mono font-semibold">
              const curiosity = true;
            </code>
          </div>

          <div className="absolute top-[30%] right-[5%] opacity-40">
            <code className="text-sm text-[#f59e0b] dark:text-[#fbbf24] font-mono font-semibold">
              {"{ debug: 'until understood' }"}
            </code>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <div
          className={`transition-all duration-1000 w-full ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          {/* 메인 제목 */}
          <h1 className="text-[1.8rem] md:text-6xl font-bold tracking-tight text-neutral-800 dark:text-[#e8e8f0] leading-[1.2] md:leading-[1.3] break-keep">
            궁금한 것은 끝까지 파고드는
            <br />

            <span className="gradient-text">
              백엔드 중심 풀스택 개발자 송성준
            </span>
          </h1>

          {/* 데스크톱 설명 */}
          <p className="hidden md:block mt-8 text-xl text-neutral-600 dark:text-[#b4b4c8] max-w-3xl mx-auto leading-relaxed">
            궁금하거나 잘못된 동작을 그냥 넘기지 않고,
            원인을 직접 확인하고 이해하려 노력합니다.
            <br />
            기능 구현에 그치지 않고 데이터가 어떻게 흐르고 처리되는지
            이해하는 개발자를 지향합니다.
          </p>

          {/* 모바일 설명 */}
          <p className="md:hidden mt-4 text-sm text-neutral-600 dark:text-[#b4b4c8] leading-relaxed break-keep px-4">
            문제를 그냥 넘기지 않고 원인을 직접 확인하며
            <br />
            이해할 때까지 파고드는 개발자를 지향합니다.
          </p>

          {/* 소개 박스 - 데스크톱 */}
          <div className="hidden md:block mt-12 max-w-3xl mx-auto px-4">
            <div className="glass rounded-2xl p-8 border border-neutral-200/50 dark:border-[#a8b5ff]/20 shadow-sm">
              <p className="text-base text-neutral-700 dark:text-[#d4d4e0] leading-relaxed">
                새로운 기술이나 오류를 마주했을 때 단순히 해결 방법만 찾기보다
                <span className="font-semibold gradient-text">
                  {" "}왜 문제가 발생했고 어떻게 동작하는지
                </span>
                를 이해하려고 노력합니다.

                <br />

                꾸준히 배우고 직접 확인하는 과정을 통해
                백엔드와 프론트엔드를 연결해 안정적인 웹 서비스를 만드는 풀스택 개발자로 성장하고 있습니다.
              </p>
            </div>
          </div>

          {/* 소개 박스 - 모바일 */}
          <div className="md:hidden mt-6 max-w-xl mx-auto px-4">
            <div className="glass rounded-xl px-5 py-3 border border-neutral-200/50 dark:border-[#a8b5ff]/20">
              <p className="text-xs text-neutral-700 dark:text-[#d4d4e0] leading-relaxed break-keep">
                <span className="font-semibold gradient-text">
                  왜 문제가 발생하는지
                </span>
                를 파악하고
                <br />
                이해하면서 성장하는 개발자를 지향합니다.
              </p>
            </div>
          </div>

          {/* 개발 분야 */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <div
                key={category}
                className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 dark:from-[#1c1c2e] dark:to-[#1c1c2e] border border-purple-200/50 dark:border-[#a8b5ff]/30 shadow-sm"
              >
                <span className="text-xs md:text-sm font-semibold gradient-text">
                  {category}
                </span>
              </div>
            ))}
          </div>

          {/* GitHub / 이메일 / 전화 */}
          <div className="mt-5 md:mt-6 flex justify-center gap-3">
            {contacts.map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44] flex items-center justify-center shadow-sm transition-transform hover:scale-110"
              >
                <Icon
                  size={16}
                  className="text-neutral-700 dark:text-[#b4b4c8] md:w-[18px]"
                />
              </a>
            ))}
          </div>

          {/* 모바일 애니메이션 코드 */}
          <div className="md:hidden mt-4 h-6">
            <code
              key={codeIndex}
              className={`block text-xs font-mono font-semibold transition-opacity duration-700 ${mobileCodes[codeIndex].color}`}
            >
              {mobileCodes[codeIndex].text}
            </code>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div
        className={`relative z-10 mt-8 mb-2 md:mt-12 md:mb-4 transition-all duration-1000 delay-500 ${
          mounted
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 text-[#667eea] dark:text-[#a8b5ff] hover:text-[#764ba2] transition-colors"
          style={{
            animation: "scrollHint 1.8s ease-in-out infinite",
          }}
        >
          <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider">
            Scroll Down
          </span>

          <ArrowDown
            size={14}
            className="md:w-[16px]"
          />
        </a>
      </div>

      <style jsx>{`
        @keyframes scrollHint {
          0% {
            transform: translateY(0);
            opacity: 0.6;
          }

          50% {
            transform: translateY(5px);
            opacity: 1;
          }

          100% {
            transform: translateY(0);
            opacity: 0.6;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

