import React from 'react';

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center my-6 md:my-8 max-w-4xl mx-auto px-4">
      <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#E28E2B]/40 to-[#E28E2B]" />
      <div className="mx-4 text-[#F97316] flex items-center justify-center">
        <svg
          className="w-5 h-5 text-[#E28E2B]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
      <div className="flex-grow h-[1px] bg-gradient-to-l from-transparent via-[#E28E2B]/40 to-[#E28E2B]" />
    </div>
  );
}
