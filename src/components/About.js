"use client";

import { useState, useEffect } from "react";

import {
  FiServer,
  FiChevronDown
} from "react-icons/fi";

import {
  SiSpring,
  SiSpringboot,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiMariadb,
  SiRedis
} from "react-icons/si";

import {
  MdSchool,
  MdWorkOutline,
  MdWorkspacePremium
} from "react-icons/md";


export default function About() {

  const [isMobile, setIsMobile] = useState(false);

  const [openSkills, setOpenSkills] = useState({
    Backend: true,
    Frontend: true,
    Database: true,
    "Infra / Tools": true
  });


  /* =========================================================
     화면 크기 확인
     ========================================================= */
  useEffect(() => {

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };

  }, []);


  const toggleSkill = (key) => {

    setOpenSkills((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));

  };


  /* =========================================================
     나를 설명하는 핵심 키워드
     ========================================================= */
  const features = [

    "모르거나 궁금한 것을 그냥 넘기지 않고 원인을 끝까지 확인합니다",

    "오류와 실패를 피하기보다 원인을 분석하고 다음 개선의 근거로 삼습니다",

    "다양한 업무 경험을 통해 책임감과 끈기, 사람과 협업하는 방법을 배웠습니다",

    "Java와 Spring을 중심으로 서버와 데이터의 흐름을 이해하는 백엔드 개발자를 지향합니다"

  ];


  /* =========================================================
     기술 스택

     중요:
     실제 프로젝트에서 사용했거나 배운 기술 위주로만 작성
     ========================================================= */
  const skills = [

    {
      category: "Backend",

      items: [

        {
          Icon: FiServer,
          name: "Java"
        },

        {
          Icon: SiSpringboot,
          name: "Spring Boot"
        },

        {
          Icon: SiSpring,
          name: "Spring MVC"
        },

        {
          Icon: SiSpring,
          name: "Spring Security"
        },

        {
          Icon: FiServer,
          name: "JPA"
        },

        {
          Icon: FiServer,
          name: "QueryDSL"
        },

        {
          Icon: FiServer,
          name: "MyBatis"
        },

        {
          Icon: FiServer,
          name: "REST API"
        }

      ]
    },


    {
      category: "Frontend",

      items: [

        {
          Icon: SiNextdotjs,
          name: "Next.js"
        },

        {
          Icon: SiReact,
          name: "React"
        },

        {
          Icon: FiServer,
          name: "JavaScript"
        },

        {
          Icon: FiServer,
          name: "HTML / CSS"
        },

        {
          Icon: SiTailwindcss,
          name: "Tailwind CSS"
        },

        {
          Icon: SiRedux,
          name: "Redux Toolkit"
        },

        {
          Icon: FiServer,
          name: "TanStack Query"
        }

      ]
    },


    {
      category: "Database",

      items: [

        {
          Icon: SiMariadb,
          name: "MariaDB"
        },

        {
          Icon: SiRedis,
          name: "Redis"
        },

        {
          Icon: FiServer,
          name: "SQL"
        }

      ]
    },


    {
      category: "Infra / Tools",

      items: [

        {
          Icon: FiServer,
          name: "AWS EC2"
        },

        {
          Icon: FiServer,
          name: "AWS RDS"
        },

        {
          Icon: FiServer,
          name: "AWS S3"
        },

        {
          Icon: FiServer,
          name: "Git / GitHub"
        }

      ]
    }

  ];


  /* =========================================================
     학력 / 교육
     ========================================================= */
  const education = [

    {
      icon: MdWorkOutline,

      period: "2025.04 - 2025.10",

      title: "클라우드 & 데브옵스 기반 풀스택 개발 과정",

      description:
        "Java, Spring Boot, React, Database 기반 웹 애플리케이션 개발 및 팀 프로젝트 수행"
    },


    {
      icon: MdSchool,

      period: "2025.02.14",

      title: "동서울대학교 졸업",

      description:
        "컴퓨터정보과"
    },


    {
      icon: MdSchool,

      period: "2019",

      title: "광휘고등학교 졸업",

      description:
        ""
    }

  ];


  /* =========================================================
     실무 경험

     개발 경력으로 표현하는 것이 아니라
     실제 직무 경험과 그 과정에서 얻은 역량을 보여주는 영역
     ========================================================= */
  const experience = [

    {
      icon: MdWorkOutline,

      period: "2026.06 - 재직 중",

      title: "부광시스템(주) · 주임 / 영업부",

      description:
        "HD현대일렉트릭 특약점에서 SERP·ECHO 시스템을 활용한 품목·주문·재고·납품 정보 관리, 전기 부품 관리 및 거래처 대응 업무 수행"
    },


    {
      icon: MdWorkOutline,

      period: "약 7개월",

      title: "렌지후드 설치·유지보수 업무",

      description:
        "사무 업무와 현장 업무를 병행하며 렌지후드 설치·교체, 부품 점검 및 유지보수 업무 수행"
    },


    {
      icon: MdWorkOutline,

      period: "약 3년",

      title: "피플블라썸 · 점장",

      description:
        "매장 운영 전반과 인력·고객 관리를 담당하며 책임감, 현장 대응 능력과 커뮤니케이션 역량을 경험"
    }

  ];


  /* =========================================================
     자격증

     SQLD는 합격 발표 후 추가
     ========================================================= */
  const certifications = [

    "자동차운전면허 2종 보통"

  ];


  return (

    <section
      id="about"
      className="relative py-16 md:py-28"
    >

      <div className="max-w-7xl mx-auto px-5 md:px-8">


        {/* =====================================================
            MOBILE
            ===================================================== */}
        {isMobile ? (

          <>

            {/* Header */}
            <div className="text-center mb-8">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 mb-4">

                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] animate-pulse" />

                <span className="text-sm font-semibold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">

                  About

                </span>

              </div>


              <h2 className="text-2xl font-bold mb-3 text-neutral-800 dark:text-[#e8e8f0]">

                궁금한 것은

                <br />

                <span className="gradient-text">
                  끝까지 파고듭니다
                </span>

              </h2>


              <p className="text-sm text-neutral-600 dark:text-[#b4b4c8] leading-relaxed">

                모르거나 잘못된 것을 그냥 넘기기보다

                <br />

                직접 확인하고 이해하려 노력합니다.

              </p>

            </div>


            {/* Tech Stack */}
            <div className="mb-8">

              <h3 className="text-base font-bold mb-3 text-neutral-900 dark:text-[#e8e8f0]">

                Tech Stack

              </h3>


              <div className="space-y-2">

                {skills.map((skill) => (

                  <div
                    key={skill.category}
                    className="rounded-lg bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44]"
                  >

                    <button
                      onClick={() => toggleSkill(skill.category)}
                      className="w-full flex items-center justify-between p-3"
                    >

                      <h4 className="text-xs font-bold gradient-text">

                        {skill.category}

                      </h4>


                      <FiChevronDown
                        size={14}
                        className={`text-neutral-600 dark:text-neutral-300 transition-transform ${
                          openSkills[skill.category]
                            ? "rotate-180"
                            : ""
                        }`}
                      />

                    </button>


                    {openSkills[skill.category] && (

                      <div className="flex flex-wrap gap-1.5 px-3 pb-3">

                        {skill.items.map(({ Icon, name }) => (

                          <span
                            key={name}
                            className="inline-flex items-center gap-1 px-2 py-1 text-[10px] rounded-md bg-gradient-to-r from-purple-50 to-blue-50 dark:from-[#a8b5ff]/10 dark:to-[#c9a8e8]/10 border border-purple-200/50 dark:border-[#a8b5ff]/20 text-neutral-700 dark:text-[#e8e8f0]"
                          >

                            <Icon
                              size={10}
                              className="text-[#667eea] dark:text-[#a8b5ff]"
                            />

                            {name}

                          </span>

                        ))}

                      </div>

                    )}

                  </div>

                ))}

              </div>

            </div>


            {/* Experience */}
            <div className="mb-8">

              <h3 className="text-base font-bold mb-3 text-neutral-900 dark:text-[#e8e8f0]">

                Experience

              </h3>


              <div className="space-y-2">

                {experience.map(
                  ({ icon: Icon, period, title, description }, index) => (

                    <div
                      key={index}
                      className="flex gap-2 p-3 rounded-lg bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44]"
                    >

                      <Icon
                        className="text-[#667eea] dark:text-[#a8b5ff] flex-shrink-0 mt-0.5"
                        size={16}
                      />


                      <div className="min-w-0">

                        <span className="text-[10px] text-neutral-500 dark:text-[#b4b4c8]">

                          {period}

                        </span>


                        <h4 className="font-semibold text-xs text-neutral-900 dark:text-[#e8e8f0]">

                          {title}

                        </h4>


                        <p className="text-[10px] text-neutral-600 dark:text-[#b4b4c8] mt-1 leading-relaxed">

                          {description}

                        </p>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>


            {/* Education */}
            <div className="mb-6">

              <h3 className="text-base font-bold mb-3 text-neutral-900 dark:text-[#e8e8f0]">

                Education

              </h3>


              <div className="space-y-2">

                {education.map(
                  ({ icon: Icon, period, title, description }, index) => (

                    <div
                      key={index}
                      className="flex gap-2 p-3 rounded-lg bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44]"
                    >

                      <Icon
                        className="text-[#667eea] dark:text-[#a8b5ff] flex-shrink-0 mt-0.5"
                        size={16}
                      />


                      <div className="min-w-0">

                        <span className="text-[10px] text-neutral-500 dark:text-[#b4b4c8]">

                          {period}

                        </span>


                        <h4 className="font-semibold text-xs text-neutral-900 dark:text-[#e8e8f0]">

                          {title}

                        </h4>


                        {description && (

                          <p className="text-[10px] text-neutral-600 dark:text-[#b4b4c8] mt-1">

                            {description}

                          </p>

                        )}

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>


            {/* Certifications */}
            <div>

              <h3 className="text-base font-bold mb-3 text-neutral-900 dark:text-[#e8e8f0]">

                Certifications

              </h3>


              <div className="space-y-2">

                {certifications.map((certification) => (

                  <div
                    key={certification}
                    className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44] text-xs text-neutral-900 dark:text-[#e8e8f0]"
                  >

                    <MdWorkspacePremium
                      className="text-[#667eea] dark:text-[#a8b5ff] flex-shrink-0"
                      size={16}
                    />

                    {certification}

                  </div>

                ))}

              </div>

            </div>

          </>

        ) : (

          <>

            {/* =================================================
                DESKTOP
                ================================================= */}


            {/* Header */}
            <div className="text-center mb-16">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 mb-4">

                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] animate-pulse" />

                <span className="text-sm font-semibold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">

                  About

                </span>

              </div>


              <h2 className="text-4xl font-bold mb-4 text-neutral-800 dark:text-[#e8e8f0]">

                궁금한 것은 끝까지 파고들고,

                <br />

                <span className="gradient-text">
                  실패를 성장의 발판으로 삼습니다
                </span>

              </h2>


              <p className="text-base text-neutral-600 dark:text-[#b4b4c8] max-w-3xl mx-auto leading-relaxed">

                모르거나 예상과 다르게 동작하는 부분을 그냥 넘기지 않고,

                <br />

                원인을 직접 확인하고 이해할 때까지 파고드는 개발자입니다.

                <br /><br />

                실패를 두려워하기보다 무엇을 배울 수 있는지 고민하며,

                <br />

                <span className="font-semibold">
                  "넘어져도 웃자"
                </span>

                라는 마음으로 다시 시도하고 성장하려 합니다.

              </p>

            </div>


            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-16">

              {features.map((text, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3 p-5 rounded-xl bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44]"
                >

                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] dark:from-[#a8b5ff] dark:to-[#c9a8e8] flex items-center justify-center flex-shrink-0 mt-0.5">

                    <span className="text-white text-xs font-bold">

                      {index + 1}

                    </span>

                  </div>


                  <p className="text-sm text-neutral-700 dark:text-[#d4d4e0] leading-relaxed">

                    {text}

                  </p>

                </div>

              ))}

            </div>


            {/* Skills */}
            <div className="mb-16">

              <h3 className="text-xl font-bold mb-5 text-neutral-900 dark:text-[#e8e8f0]">

                Tech Stack

              </h3>


              <div className="grid grid-cols-2 gap-4">

                {skills.map((skill) => (

                  <div
                    key={skill.category}
                    className="p-4 rounded-xl bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44]"
                  >

                    <h4 className="text-sm font-bold gradient-text mb-3">

                      {skill.category}

                    </h4>


                    <div className="flex flex-wrap gap-2">

                      {skill.items.map(({ Icon, name }) => (

                        <span
                          key={name}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-[#a8b5ff]/10 dark:to-[#c9a8e8]/10 border border-purple-200/50 dark:border-[#a8b5ff]/20 text-neutral-700 dark:text-[#e8e8f0]"
                        >

                          <Icon
                            size={13}
                            className="text-[#667eea] dark:text-[#a8b5ff]"
                          />

                          {name}

                        </span>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* Experience */}
            <div className="mb-16">

              <h3 className="text-xl font-bold mb-5 text-neutral-900 dark:text-[#e8e8f0]">

                Experience

              </h3>


              <div className="grid grid-cols-3 gap-4">

                {experience.map(
                  ({ icon: Icon, period, title, description }, index) => (

                    <div
                      key={index}
                      className="p-5 rounded-xl bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44]"
                    >

                      <div className="flex items-center gap-2 mb-3">

                        <Icon
                          className="text-[#667eea] dark:text-[#a8b5ff]"
                          size={18}
                        />

                        <span className="text-xs text-neutral-500 dark:text-[#b4b4c8]">

                          {period}

                        </span>

                      </div>


                      <h4 className="font-semibold text-sm text-neutral-900 dark:text-[#e8e8f0] mb-2">

                        {title}

                      </h4>


                      <p className="text-xs text-neutral-600 dark:text-[#b4b4c8] leading-relaxed">

                        {description}

                      </p>

                    </div>

                  )
                )}

              </div>

            </div>


            {/* Education + Certifications */}
            <div className="grid grid-cols-2 gap-6">


              {/* Education */}
              <div>

                <h3 className="text-xl font-bold mb-5 text-neutral-900 dark:text-[#e8e8f0]">

                  Education

                </h3>


                <div className="space-y-3">

                  {education.map(
                    ({ icon: Icon, period, title, description }, index) => (

                      <div
                        key={index}
                        className="flex gap-3 p-4 rounded-xl bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44]"
                      >

                        <Icon
                          className="text-[#667eea] dark:text-[#a8b5ff] flex-shrink-0 mt-0.5"
                          size={18}
                        />


                        <div className="min-w-0">

                          <span className="text-xs text-neutral-500 dark:text-[#b4b4c8]">

                            {period}

                          </span>


                          <h4 className="font-semibold text-sm text-neutral-900 dark:text-[#e8e8f0]">

                            {title}

                          </h4>


                          {description && (

                            <p className="text-xs text-neutral-600 dark:text-[#b4b4c8] mt-0.5">

                              {description}

                            </p>

                          )}

                        </div>

                      </div>

                    )
                  )}

                </div>

              </div>


              {/* Certifications */}
              <div>

                <h3 className="text-xl font-bold mb-5 text-neutral-900 dark:text-[#e8e8f0]">

                  Certifications

                </h3>


                <div className="space-y-3">

                  {certifications.map((certification) => (

                    <div
                      key={certification}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#1c1c2e] border border-neutral-200 dark:border-[#2a2a44] text-sm text-neutral-900 dark:text-[#e8e8f0]"
                    >

                      <MdWorkspacePremium
                        className="text-[#667eea] dark:text-[#a8b5ff] flex-shrink-0"
                        size={18}
                      />

                      {certification}

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </>

        )}

      </div>

    </section>

  );

}