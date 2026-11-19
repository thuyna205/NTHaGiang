import React from 'react';

interface MarqueeBannerProps {
  texts: string[];
}

export default function MarqueeBanner({ texts }: MarqueeBannerProps) {
  // Nhân đôi mảng để tạo vòng lặp vô tận mượt mà
  const displayItems = [...texts, ...texts, ...texts];

  return (
    <div className="w-full bg-[#F97316] text-white py-3 overflow-hidden shadow-sm relative">
      <div className="animate-marquee flex items-center gap-8">
        {displayItems.map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs sm:text-sm tracking-wider uppercase">
              {text}
            </span>
            <span className="text-[#FFEDD5] opacity-70 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
