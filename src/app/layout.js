import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/components/ModalContext";

export const metadata = {
  title: "Seongjun's Portfolio",
  description: "백엔드 중심 풀스택 개발자 송성준 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-['Inter']">
        <ModalProvider>
          <div className="relative">
            <Header />

            <main className="relative z-10">
              {children}
            </main>

            <Footer />
          </div>
        </ModalProvider>

        <div
          className="fixed top-20 right-10 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none animate-float"
          style={{ animationDelay: "0s" }}
        />

        <div
          className="fixed bottom-20 left-10 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none animate-float"
          style={{ animationDelay: "1s" }}
        />
      </body>
    </html>
  );
}

