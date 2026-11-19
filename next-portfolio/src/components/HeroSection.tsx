'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Send, FileDown, QrCode, Share2, Layers, Compass } from 'lucide-react';

interface HeroSectionProps {
  profile: {
    name: string;
    title: string;
    heroHeading: string;
    avatarHero: string;
    avatarPolaroid1: string;
    avatarPolaroid2: string;
  };
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-24 md:pt-32 pb-12 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Khung viền lớn bo góc mềm như Canva */}
      <div className="bg-[#FAF3EB] border border-[#EBDCCB] rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm relative overflow-hidden">
        {/* Điểm nhấn trang trí góc */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Cột trái: 2 ảnh Polaroid xếp nghiêng nhẹ */}
          <div className="lg:col-span-3 flex lg:flex-col justify-center items-center gap-4 sm:gap-6 order-2 lg:order-1">
            {/* Polaroid 1 */}
            <motion.div
              initial={{ opacity: 0, rotate: -8, y: 20 }}
              animate={{ opacity: 1, rotate: -4, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="bg-white p-2.5 pb-6 rounded-xl shadow-md border border-[#E8D8C8] w-36 sm:w-44 transition-transform cursor-pointer"
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={profile.avatarPolaroid1}
                  alt="Hà Giang Professional"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 150px, 180px"
                  priority
                />
              </div>
              <p className="text-[11px] font-medium text-center text-[#8C7A6B] mt-2 tracking-wider">
                Work Mode
              </p>
            </motion.div>

            {/* Polaroid 2 */}
            <motion.div
              initial={{ opacity: 0, rotate: 6, y: 20 }}
              animate={{ opacity: 1, rotate: 3, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="bg-white p-2.5 pb-6 rounded-xl shadow-md border border-[#E8D8C8] w-36 sm:w-44 lg:ml-6 transition-transform cursor-pointer"
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={profile.avatarPolaroid2}
                  alt="Hà Giang Lifestyle"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 150px, 180px"
                  priority
                />
              </div>
              <p className="text-[11px] font-medium text-center text-[#8C7A6B] mt-2 tracking-wider">
                Lifestyle
              </p>
            </motion.div>
          </div>

          {/* Cột giữa: Tiêu đề, chức danh, 3 badge kỹ năng & Nút CTA */}
          <div className="lg:col-span-6 text-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFEADA] border border-[#FDBA74] text-[#EA580C] text-xs font-semibold uppercase tracking-widest mb-3"
            >
              {profile.heroHeading}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F97316] tracking-tight leading-tight mb-3"
            >
              {profile.name}
            </motion.h1>

            <p className="text-base sm:text-lg font-semibold text-[#8C6D46] tracking-wide mb-6">
              {profile.title}
            </p>

            {/* 3 Thẻ kỹ năng nhỏ có icon */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-[#EBDCCB] shadow-sm">
                <div className="p-1.5 rounded-lg bg-[#FFEDD5] text-[#F97316]">
                  <Share2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#4A3E36]">Social Media</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-[#EBDCCB] shadow-sm">
                <div className="p-1.5 rounded-lg bg-[#FFEDD5] text-[#F97316]">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#4A3E36]">Content Creator</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-[#EBDCCB] shadow-sm">
                <div className="p-1.5 rounded-lg bg-[#FFEDD5] text-[#F97316]">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#4A3E36]">Campaign Planner</span>
              </div>
            </div>

            {/* Các nút CTA: Hợp tác ngay, Tải CV, Quét mã */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Hợp tác ngay</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#FAF4EB] border border-[#EBDCCB] text-[#4A3E36] hover:text-[#F97316] text-sm font-semibold transition-all shadow-sm"
              >
                <FileDown className="w-4 h-4 text-[#F97316]" />
                <span>Tải hồ sơ CV</span>
              </a>

              <a
                href="#contact"
                title="Mã liên hệ nhanh"
                className="p-3 rounded-full bg-white hover:bg-[#FAF4EB] border border-[#EBDCCB] text-[#4A3E36] hover:text-[#F97316] transition-all shadow-sm"
              >
                <QrCode className="w-4 h-4 text-[#F97316]" />
              </a>
            </div>
          </div>

          {/* Cột phải: Ảnh chân dung lớn vòm cong (Arch shape) */}
          <div className="lg:col-span-3 flex justify-center order-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-48 sm:w-56 md:w-60 aspect-[3/4.2] rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-xl border-4 border-white bg-[#FDE8D0]"
            >
              <Image
                src={profile.avatarHero}
                alt={profile.name}
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 240px, 280px"
                priority
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
