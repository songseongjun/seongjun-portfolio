"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

export default function ImageGalleryModal({
                                            images,
                                            initialIndex = 0,
                                            title = "Image Gallery",
                                            onClose,
                                          }) {
  const [current, setCurrent] = useState(initialIndex);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onEsc);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onEsc);
    };
  }, [onClose]);

  const prev = () =>
      setCurrent((i) => (i - 1 + images.length) % images.length);

  const next = () =>
      setCurrent((i) => (i + 1) % images.length);

  return createPortal(
      <div
          className="fixed inset-0 z-[999999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={onClose}
      >
        {/* Modal */}
        <div
            className="w-full max-w-5xl h-[80vh] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              {title}
            </span>
              <span className="text-xs text-neutral-400">
              {current + 1} / {images.length}
            </span>
            </div>

            <button
                onClick={onClose}
                className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-[#667eea] dark:hover:text-[#a8b5ff] transition-colors"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          {/* Image Viewport */}
          <div className="relative flex-1 bg-neutral-50 dark:bg-neutral-950 overflow-hidden flex items-center justify-center">
            <img
                src={images[current]}
                alt="Project"
                className="max-w-full max-h-full object-contain"
            />

            {images.length > 1 && (
                <>
                  <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prev();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-neutral-400/40 hover:bg-neutral-400/60 text-white flex items-center justify-center"
                  >
                    <IoChevronBack size={26} />
                  </button>

                  <button
                      onClick={(e) => {
                        e.stopPropagation();
                        next();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-neutral-400/40 hover:bg-neutral-400/60 text-white flex items-center justify-center"
                  >
                    <IoChevronForward size={26} />
                  </button>
                </>
            )}
          </div>

          {/* Indicator */}
          {images.length > 1 && (
              <div className="py-4 flex justify-center gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-2 rounded-full transition-all ${
                            i === current
                                ? "w-8 bg-gradient-to-r from-[#667eea] to-[#764ba2]"
                                : "w-2 bg-neutral-300 dark:bg-neutral-600"
                        }`}
                    />
                ))}
              </div>
          )}
        </div>
      </div>,
      document.body
  );
}