'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function HeaderMobile(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleMobileMenuToggle = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-md flex items-center justify-center text-white font-bold text-xl">
            N
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">
            ナリタイカンパニー株式会社
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          id="menu-btn"
          className="text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
          aria-label="メニューを開く"
          aria-expanded={isMobileMenuOpen}
          onClick={handleMobileMenuToggle}
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8" aria-hidden="true" />
          ) : (
            <Menu className="w-8 h-8" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        id="mobile-menu"
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } absolute top-full left-0 w-full bg-white shadow-sm border-t`}
        aria-label="モバイルメニュー"
      >
        <div className="flex flex-col p-4 gap-4">
          <Link
            href="#about"
            className="text-slate-600 font-medium py-2 border-b border-slate-100"
            onClick={handleLinkClick}
          >
            会社について
          </Link>
          <Link
            href="#services"
            className="text-slate-600 font-medium py-2 border-b border-slate-100"
            onClick={handleLinkClick}
          >
            事業内容
          </Link>
          <Link
            href="#recruit"
            className="text-slate-600 font-medium py-2 border-b border-slate-100"
            onClick={handleLinkClick}
          >
            募集要項
          </Link>
          <Link
            href="#company"
            className="text-slate-600 font-medium py-2 border-b border-slate-100"
            onClick={handleLinkClick}
          >
            会社概要
          </Link>
          <Link
            href="#entry"
            className="bg-emerald-600 text-center text-white px-6 py-3 rounded-md font-bold"
            onClick={handleLinkClick}
          >
            エントリー
          </Link>
        </div>
      </div>
    </header>
  );
}
