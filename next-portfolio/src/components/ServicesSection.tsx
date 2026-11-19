'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Service } from '@/data/mockData';
import SectionDivider from './SectionDivider';

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="py-8 md:py-10 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Tiêu đề mục */}
      <div className="text-center mb-8">
        <span className="text-[#EA580C] text-sm md:text-base font-bold tracking-wide block mb-1">
          Điểm nổi bật
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D241E] tracking-tight">
          TÔI LÀM GÌ
        </h2>
      </div>

      {/* Lưới 3 cột x 2 hàng (6 thẻ card viền cam bo góc mềm chuẩn xác theo mẫu ảnh) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
            className="bg-white border-2 border-[#F97316] rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-start items-center text-center min-h-[260px]"
          >
            {/* Hình ảnh minh hoạ Logo/Icon chuẩn của Canva */}
            <div className="relative w-full h-24 mb-3 flex items-center justify-center">
              <Image
                src={item.iconImage}
                alt={item.title}
                width={160}
                height={90}
                className="object-contain max-h-20 w-auto hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>

            {/* Mô tả ngắn công việc */}
            <p className="text-xs sm:text-sm text-[#3E322A] leading-relaxed mt-2 text-center max-w-[260px]">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <SectionDivider />
    </section>
  );
}
