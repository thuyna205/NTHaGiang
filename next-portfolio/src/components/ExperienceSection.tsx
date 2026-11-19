'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Experience, SkillItem } from '@/data/mockData';
import SectionDivider from './SectionDivider';

interface ExperienceSectionProps {
  education: {
    degree: string;
    major?: string;
    certs: string[];
  };
  experiences: Experience[];
  skills: {
    softSkills: SkillItem[];
    hardSkills: SkillItem[];
  };
}

export default function ExperienceSection({
  education,
  experiences,
  skills,
}: ExperienceSectionProps) {
  return (
    <section id="education" className="py-8 md:py-10 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Tiêu đề mục */}
      <div className="text-center mb-8">
        <span className="text-[#EA580C] text-sm md:text-base font-bold tracking-wide block mb-1">
          Học vấn
        </span>
      </div>

      {/* 1. Phần trên: Chia 2 cột (Trái: HỌC VẤN & CHỨNG CHỈ | Phải: KINH NGHIỆM LÀM VIỆC Timeline) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 mb-14">
        
        {/* Cột trái: HỌC VẤN & CHỨNG CHỈ */}
        <div className="md:col-span-5 space-y-8">
          {/* Khối HỌC VẤN */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#F97316] mb-3">
              HỌC <span className="text-[#2D241E]">VẤN</span>
            </h3>
            <p className="text-sm font-semibold text-[#2D241E]">
              {education.degree}
            </p>
            {education.major && (
              <p className="text-xs text-[#6B5E54] mt-0.5">
                {education.major}
              </p>
            )}
          </motion.div>

          {/* Khối CHỨNG CHỈ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#F97316] mb-3">
              CHỨNG <span className="text-[#2D241E]">CHỈ</span>
            </h3>
            <p className="text-sm font-semibold text-[#2D241E]">
              {education.certs.join(', ')}
            </p>
          </motion.div>
        </div>

        {/* Cột phải: KINH NGHIỆM LÀM VIỆC */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#F97316] mb-6">
              KINH NGHIỆM <span className="text-[#2D241E]">LÀM VIỆC</span>
            </h3>

            {/* Timeline dọc với năm và dấu chấm như Canva */}
            <div className="relative pl-24 space-y-8 before:absolute before:left-[66px] before:top-2 before:bottom-3 before:w-[1px] before:bg-[#D4C4B5]">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  {/* Năm bên trái */}
                  <span className="absolute -left-24 top-0.5 w-14 text-right font-['Plus_Jakarta_Sans'] font-extrabold text-sm text-[#2D241E]">
                    {exp.year}
                  </span>

                  {/* Dấu chấm trên đường kẻ timeline */}
                  <div className="absolute -left-[32px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#2D241E] border-2 border-[#FAF4EB]" />

                  {/* Vị trí và mô tả công việc */}
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold text-[#2D241E] leading-snug">
                      {exp.role}
                    </h4>
                    {exp.desc && (
                      <p className="text-xs sm:text-sm text-[#6B5E54] mt-1 leading-relaxed">
                        {exp.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>

      {/* 2. Phần dưới: KỸ NĂNG (Kỹ năng mềm + Kỹ năng chuyên môn dạng 2 cột progress bar) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6"
      >
        <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#F97316] mb-6">
          KỸ <span className="text-[#2D241E]">NĂNG</span>
        </h3>

        {/* Nhóm Kỹ năng mềm */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-[#2D241E] mb-4">
            Kỹ năng mềm
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
            {skills.softSkills.map((s, idx) => (
              <div key={idx}>
                <div className="text-xs font-semibold text-[#2D241E] mb-1.5">
                  {s.name}
                </div>
                <div className="w-full h-2 bg-[#F3E7D9] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.08 }}
                    className="h-full bg-[#F97316] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nhóm Kỹ năng chuyên môn */}
        <div>
          <h4 className="text-sm font-bold text-[#2D241E] mb-4">
            Kỹ năng chuyên môn
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
            {skills.hardSkills.map((s, idx) => (
              <div key={idx}>
                <div className="text-xs font-semibold text-[#2D241E] mb-1.5">
                  {s.name}
                </div>
                <div className="w-full h-2 bg-[#F3E7D9] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.08 }}
                    className="h-full bg-[#F97316] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <SectionDivider />
    </section>
  );
}
