import { Github, ExternalLink, FileText, Presentation } from "lucide-react";

export default function ProjectLinks({ links }) {
  if (!links) return null;

  const linkConfig = [
    { key: "live", label: "Live Demo", icon: ExternalLink },
    { key: "github", label: "GitHub", icon: Github },
    { key: "github_front", label: "Frontend Repo", icon: Github },
    { key: "github_back", label: "Backend Repo", icon: Github },
    { key: "docs", label: "기획서", icon: FileText },
    { key: "docs_2", label: "정의서", icon: FileText },
    { key: "ppt", label: "발표자료", icon: Presentation },
  ];

  return (
      <div className="flex flex-wrap gap-3">
        {linkConfig.map(({ key, label, icon: Icon }) => {
          if (!links[key]) return null;

          return (
              <a
                  key={key}
                  href={links[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all group"
              >
                <Icon size={16} className="group-hover:scale-110 transition-transform" />
                {label}
              </a>
          );
        })}
      </div>
  );
}