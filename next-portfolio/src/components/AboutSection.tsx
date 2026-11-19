'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import SectionDivider from './SectionDivider';

interface AboutSectionProps {
  about: {
    portfolioTitle: string;
    introText: string;
    bulletPoints: string[];
    lifestyleTitle: string;
    lifestyleText: string;
    motto: string;
  };
  avatarAbout1: string;
  avatarAbout2: string;
}

export default function AboutSection({
  about,
  avatarAbout1,
  avatarAbout2,
}: AboutSectionProps) {
  return (
    <section id="about" className="py-8 md:py-10 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Tiêu đề mục */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEADA] text-[#EA580C] text-xs font-bold uppercase tracking-widest mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Về tôi
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D241E] tracking-tight">
          HÀNH TRÌNH & PHONG CÁCH
        </h2>
      </div>

      <div className="space-y-8 md:space-y-12">
        {/* Khối 1: Ảnh bên trái, Nội dung bên phải */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-[#EBDCCB] rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          {/* Cột ảnh trái */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden shadow-md border-2 border-[#EBDCCB] bg-[#FAF4EB]">
              <Image
                src={avatarAbout1}
                alt="Digital Marketing Portfolio"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
          </div>

          {/* Cột chữ phải */}
          <div className="md:col-span-7">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#F97316] mb-2">
              ✦ Chuyên môn chính
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-[#2D241E] mb-4">
              {about.portfolioTitle}
            </h3>
            <p className="text-sm sm:text-base text-[#5A4C42] leading-relaxed mb-6">
              {about.introText}
            </p>

            {/* Danh sách gạch đầu dòng */}
            <ul className="space-y-3">
              {about.bulletPoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#4A3E36]">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Khối 2 (Bố cục đảo ngược): Nội dung bên trái, Ảnh bên phải */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-[#EBDCCB] rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          {/* Cột chữ trái */}
          <div className="md:col-span-7 order-2 md:order-1">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#F97316] mb-2">
              ✦ Cảm hứng & Năng lượng
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-[#2D241E] mb-4">
              {about.lifestyleTitle}
            </h3>
            <p className="text-sm sm:text-base text-[#5A4C42] leading-relaxed mb-6">
              {about.lifestyleText}
            </p>

            {/* Châm ngôn làm việc (Motto Box) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF7ED] border border-[#FFEDD5] border-l-4 border-l-[#F97316]">
              <p className="italic text-xs sm:text-sm text-[#8C5E35] leading-relaxed">
                "{about.motto}"
              </p>
            </div>
          </div>

          {/* Cột ảnh phải */}
          <div className="md:col-span-5 flex justify-center order-1 md:order-2">
            <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden shadow-md border-2 border-[#EBDCCB] bg-[#FAF4EB]">
              <Image
                src={avatarAbout2}
                alt="Phong cách sống"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <SectionDivider />
    </section>
  );
}
