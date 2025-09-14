"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { NexlayerLogo } from "../NexlayerLogo";

// Simple hamburger icon component
const Hamburger = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) => (
  <button
    className="sm:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
    aria-label="Toggle menu"
    onClick={onClick}
  >
    <span
      className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
        open ? "rotate-45 translate-y-1.5" : ""
      }`}
    />
    <span
      className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300 ${
        open ? "opacity-0" : ""
      }`}
    />
    <span
      className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
        open ? "-rotate-45 -translate-y-1.5" : ""
      }`}
    />
  </button>
);

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change or resize, and lock body scroll when menu is open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);

    // Lock scroll by adding a class to html and body
    if (menuOpen) {
      document.body.classList.add("nxl-lock-scroll");
      document.documentElement.classList.add("nxl-lock-scroll");
    } else {
      document.body.classList.remove("nxl-lock-scroll");
      document.documentElement.classList.remove("nxl-lock-scroll");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("nxl-lock-scroll");
      document.documentElement.classList.remove("nxl-lock-scroll");
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center">
              <NexlayerLogo className="h-6 sm:h-7 w-auto" />
            </a>
            <span className="hidden sm:block bg-teal-900/50 text-cyan-400 text-xs font-medium px-2 py-1 rounded border border-cyan-400/30">
              <span className="max-[374px]:hidden">🚀 Join</span> Beta
            </span>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://jnsbqhb7fyt.typeform.com/startupprogram?utm_source=nexlayer-website&utm_medium=web&utm_campaign=startup-program&utm_term=nexlayer-startup-program&utm_content=website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 text-sm font-medium transition-colors duration-300"
            >
              Startup Program
            </a>
            <a
              href="https://discord.gg/U9N23Zzd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 text-sm font-medium transition-colors duration-300"
            >
              Support
            </a>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="https://docs.nexlayer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 text-xs sm:text-sm font-medium transition-colors duration-300"
            >
              Documentation
            </a>
            <Button
              className="bg-white !text-black hover:bg-transparent hover:border-cyan-400 hover:border-2 border-2 hover:!text-cyan-400 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 font-medium rounded-lg transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://outgoing-violin-38-staging.authkit.app/sign-up?redirect_uri=https%3A%2F%2Fapp.nexlayer.io%2Fcallback&authorization_session_id=01K4JKPDTWM8VM5W1MMK7RQRRK",
                  "_blank"
                )
              }
            >
              <span className="hidden sm:inline">Start free beta</span>
              <span className="sm:hidden">Free beta</span>
            </Button>
            <a
              href="https://outgoing-violin-38-staging.authkit.app/?redirect_uri=https%3A%2F%2Fapp.nexlayer.io%2Fcallback&authorization_session_id=01K45MN092W5FFWBEAPXVEPR8N"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 text-xs sm:text-sm font-medium transition-colors duration-300"
            >
              Login
            </a>
          </div>

          <div className="flex sm:hidden items-center">
            <span className="bg-teal-900/50 text-cyan-400 text-xs font-medium px-2 py-1 rounded border border-cyan-400/30">
              🚀 Join Beta
            </span>
            <Hamburger open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="sm:hidden fixed left-0 right-0 z-40 py-8 border-b border-[#222222] bg-[#0a0a0a] backdrop-blur-md flex flex-col items-center space-y-4 transition-all"
          style={{
            top: "56px", // header height (h-14 = 56px)
            maxHeight: "calc(100dvh - 56px)",
            height: "fit-content",
            overflowY: "auto",
          }}
        >
          <a
            href="https://docs.nexlayer.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 text-lg font-medium transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Documentation
          </a>
          <Button
            className="bg-white !text-black hover:bg-transparent hover:border-cyan-400 hover:border-2 border-2 hover:!text-cyan-400 text-lg px-6 py-2 font-medium rounded-lg transition-all duration-300"
            onClick={() => {
              setMenuOpen(false);
              window.open(
                "https://outgoing-violin-38-staging.authkit.app/sign-up?redirect_uri=https%3A%2F%2Fapp.nexlayer.io%2Fcallback&authorization_session_id=01K4JKPDTWM8VM5W1MMK7RQRRK",
                "_blank"
              );
            }}
          >
            Start free beta
          </Button>
          <a
            href="https://outgoing-violin-38-staging.authkit.app/?redirect_uri=https%3A%2F%2Fapp.nexlayer.io%2Fcallback&authorization_session_id=01K45MN092W5FFWBEAPXVEPR8N"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 text-lg font-medium transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

if (typeof window !== "undefined") {
  const styleId = "nxl-lock-scroll-style";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
      .nxl-lock-scroll {
        overflow: hidden !important;
        touch-action: none !important;
        overscroll-behavior: none !important;
      }
    `;
    document.head.appendChild(style);
  }
}
