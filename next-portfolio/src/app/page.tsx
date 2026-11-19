import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MarqueeBanner from '@/components/MarqueeBanner';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactFooter from '@/components/ContactFooter';
import { portfolioData } from '@/data/mockData';

export default function HomePage() {
  const { profile, marqueeTexts, about, services, education, experiences, skills, projects } = portfolioData;

  return (
    <main className="min-h-screen bg-[#FAF4EB] text-[#2D241E]">
      {/* 1. Navbar cố định */}
      <Navbar brandName="Hà Giang" />

      {/* 2. Hero Section */}
      <HeroSection profile={profile} />

      {/* 3. Marquee Ticker nền cam chạy ngang */}
      <MarqueeBanner texts={marqueeTexts} />

      {/* 4. Section Về tôi (2 khối so le) */}
      <AboutSection
        about={about}
        avatarAbout1={profile.avatarAbout1}
        avatarAbout2={profile.avatarAbout2}
      />

      {/* 5. Section Điểm nổi bật - TÔI LÀM GÌ (Lưới 3x2) */}
      <ServicesSection services={services} />

      {/* 6. Section Học vấn - Kinh nghiệm - Kỹ năng */}
      <ExperienceSection
        education={education}
        experiences={experiences}
        skills={skills}
      />

      {/* 7. Section Dự án - DỰ ÁN NỔI BẬT (Lưới 2 cột + Modal chi tiết) */}
      <ProjectsSection projects={projects} />

      {/* 8. Footer "Liên hệ" nền cam toàn màn hình */}
      <ContactFooter profile={profile} />
    </main>
  );
}
