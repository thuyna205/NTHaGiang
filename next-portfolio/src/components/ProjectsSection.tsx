'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  X,
} from 'lucide-react';
import { Project } from '@/data/mockData';
import SectionDivider from './SectionDivider';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-8 md:py-10 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Tiêu đề mục */}
      <div className="text-center mb-8">
        <span className="text-[#EA580C] text-sm md:text-base font-bold tracking-wide block mb-1">
          Dự án
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D241E] tracking-tight">
          DỰ ÁN NỔI BẬT
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className={`bg-white border-2 border-[#F97316] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group ${
              idx === projects.length - 1 && projects.length % 2 !== 0 ? 'md:col-span-2 md:max-w-[50%] md:justify-self-center w-full' : ''
            }`}
          >
            <div>
              {proj.link ? (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Mở website ${proj.title}`}
                  className="relative block w-full aspect-[2/1] overflow-hidden bg-gray-100"
                >
                  <Image
                    src={proj.thumbnail}
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <ExternalLink className="absolute right-3 top-3 w-5 h-5 text-white drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ) : (
                <div className="relative w-full aspect-[2/1] overflow-hidden bg-gray-100">
                <Image
                  src={proj.thumbnail}
                  alt={proj.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                </div>
              )}

              <div className="px-4 pt-3">
                <p className="flex items-center gap-1.5 text-[10px] font-semibold text-green-600 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Đang hoạt động
                </p>
                <h3 className="font-['Plus_Jakarta_Sans'] text-center text-sm sm:text-base font-extrabold text-[#70452F] mb-3 uppercase tracking-wide">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A3E36] leading-relaxed text-left pb-4">
                  {proj.description}
                </p>
              </div>
            </div>

            <div className="mt-auto px-4 pb-4 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(proj)}
                className="text-xs sm:text-sm font-bold text-[#70452F] underline underline-offset-2 hover:text-[#F97316] transition-colors"
              >
                {proj.reach}
              </button>
              <a
                href="#contact"
                className="text-xs sm:text-sm font-bold text-[#70452F] underline underline-offset-2 hover:text-[#F97316] transition-colors"
              >
                {proj.conversion}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal / Popup xem chi tiết dự án */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-[#EBDCCB] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white border border-[#EBDCCB] text-[#2D241E] shadow-sm transition-all"
                aria-label="Đóng popup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full aspect-[16/9] bg-gray-100">
                <Image
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#2D241E]">
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-[#5A4C42] leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="pt-4 flex justify-end gap-3">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#EBDCCB] text-sm font-semibold text-[#4A3E36] hover:bg-gray-50"
                    >
                      Xem website
                      <ExternalLink className="w-4 h-4 text-[#F97316]" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-full border border-[#EBDCCB] text-sm font-semibold text-[#4A3E36] hover:bg-gray-50"
                  >
                    Đóng
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold shadow-md"
                  >
                    Tư vấn triển khai tương tự
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <SectionDivider />
    </section>
  );
}
