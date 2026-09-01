"use client";

import {
  FiMail,
  FiPhone,
  FiGithub,
  FiSend,
  FiPhoneCall,
  FiExternalLink,
} from "react-icons/fi";

export default function Contact() {
  const contacts = [
    {
      key: "email",
      icon: FiMail,
      label: "Email",
      value: "thdtjdwns0902@gmail.com",
      href: "mailto:thdtjdwns0902@gmail.com",
      actionIcon: FiSend,
      description: "포트폴리오 관련 질문이나 간단한 문의는 이메일로 남겨주세요.",
    },
    {
      key: "phone",
      icon: FiPhone,
      label: "Phone",
      value: "010-4701-2571",
      href: "tel:01047012571",
      actionIcon: FiPhoneCall,
      description: "연락이 필요한 경우 아래 번호로 연락해 주세요.",
    },
    {
      key: "github",
      icon: FiGithub,
      label: "GitHub",
      value: "github.com/songseongjun",
      href: "https://github.com/songseongjun",
      actionIcon: FiExternalLink,
      description: "개인 프로젝트와 코드 작업 내용을 확인할 수 있습니다.",
    },
  ];

  return (
    <section id="contact" className="relative py-16 md:py-28">
      <div className="max-w-5xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       bg-gradient-to-r from-purple-100 to-blue-100
                       dark:from-purple-900/30 dark:to-blue-900/30 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] animate-pulse" />

            <span
              className="text-sm font-semibold bg-gradient-to-r from-[#667eea] to-[#764ba2]
                         bg-clip-text text-transparent"
            >
              Contact
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-3 gradient-text">
            Contact
          </h2>

          <p
            className="text-sm md:text-base text-neutral-600 dark:text-neutral-400
                       max-w-2xl mx-auto"
          >
            프로젝트, 기술, 작업 내용과 관련된 문의가 있다면 아래 정보를 참고해주세요.
          </p>
        </div>

        {/* Contact List */}
        <div
          className="border-t border-b border-neutral-200 dark:border-[#2a2a44]
                     divide-y divide-neutral-200 dark:divide-[#2a2a44]"
        >
          {contacts.map((item) => {
            const Icon = item.icon;
            const ActionIcon = item.actionIcon;

            return (
              <div
                key={item.key}
                className="flex items-center justify-between py-4 md:py-5"
              >
                {/* Left */}
                <div className="flex items-start gap-3">
                  <div
                    className="mt-0.5 w-9 h-9 rounded-lg
                               bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10
                               dark:from-[#a8b5ff]/10 dark:to-[#c9a8e8]/10
                               flex items-center justify-center"
                  >
                    <Icon
                      size={18}
                      className="text-[#667eea] dark:text-[#a8b5ff]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-neutral-500 mb-0.5">
                      {item.label}
                    </p>

                    <p
                      className="text-sm md:text-base font-medium
                                 text-neutral-900 dark:text-[#e8e8f0]"
                    >
                      {item.value}
                    </p>

                    {/* Desktop description */}
                    <p
                      className="hidden md:block mt-0.5 text-xs
                                 text-neutral-500 dark:text-neutral-400"
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right Action */}
                <a
                  href={item.href}
                  target={item.key === "github" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-neutral-300
                             dark:border-[#2a2a44]
                             text-neutral-500
                             hover:text-[#667eea]
                             hover:border-[#667eea]/40
                             transition-colors"
                  title="Open"
                >
                  <ActionIcon size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}