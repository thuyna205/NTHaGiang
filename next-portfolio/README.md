# Nguyễn Thị Hà Giang - Digital Marketing Portfolio (Next.js 16)

Dự án Website Portfolio cá nhân hoàn chỉnh được xây dựng chính xác 100% theo bản thiết kế mẫu Canva, đáp ứng đầy đủ tất cả các yêu cầu về Tech Stack, Design System và kiến trúc Component.

---

## 🛠 1. Tech Stack
* **Framework:** Next.js 16 (App Router, React 19, TypeScript)
* **Styling:** Tailwind CSS v4 (Design system chuẩn tông kem ấm, cam rực và viền nét mảnh bo góc)
* **Icons:** `lucide-react`
* **Animations:** `framer-motion` (Hiệu ứng hover, stagger reveal, modal popup mượt mà)
* **Font chữ:** `Be Vietnam Pro` (Nội dung) + `Plus Jakarta Sans` (Tiêu đề hiện đại)
* **Backend & Admin ready:** Cấu trúc dữ liệu tách biệt tại `src/data/mockData.ts`, sẵn sàng kết nối với Supabase / Prisma SQLite / Postgres.

---

## 🎨 2. Design System & Phong cách (Bám sát ảnh Canva)
* **Tone màu:**
  * Nền kem ấm: `#FAF4EB` / `#FAF3EB`
  * Màu nhấn cam rực: `#F97316` / `#EA580C`
  * Chữ chính nâu đen: `#2D241E`
  * Viền nét mảnh: `border-[#EBDCCB]` với bo góc mềm `rounded-2xl` & `rounded-3xl`
* **Trang trí:** Đường phân cách có biểu tượng ngôi sao 4 cánh `✦` tỏa sang hai bên (`SectionDivider.tsx`).
* **Hiệu ứng Marquee:** Thanh chạy chữ màu cam nền chữ trắng chuyển động liên tục ngay dưới Hero Banner.

---

## 📐 3. Cấu trúc Section & Components
1. **`Navbar.tsx`**: Cố định (sticky/glassmorphism), logo bên trái, các nút menu dạng viên thuốc (pill buttons) viền mảnh (`[Trang chủ]`, `[Về tôi]`, `[Điểm nổi bật]`, `[Học vấn]`, `[Dự án]`, `[Liên hệ]`), hỗ trợ menu mobile.
2. **`HeroSection.tsx`**: Khung viền lớn bo tròn `rounded-3xl`, 2 ảnh polaroid xếp nghiêng nhẹ bên trái (`Work Mode` và `Lifestyle`), tiêu đề chữ cam đậm nổi bật kèm 3 badge kỹ năng (`Social Media`, `Content Creator`, `Campaign Planner`) cùng các nút CTA (`Hợp tác ngay`, `Tải hồ sơ CV`, `Mã QR`). Bên phải là khung ảnh chân dung lớn vòm cong (`rounded-t-[100px]`).
3. **`MarqueeBanner.tsx`**: Dải băng chữ cam lặp lại thông điệp tiếp thị đa kênh chạy ngang vô tận.
4. **`AboutSection.tsx`**: 2 khối so le so với ảnh:
   * Khối 1: Ảnh bên trái, tiêu đề `Digital marketing portfolio` cùng gạch đầu dòng kinh nghiệm.
   * Khối 2: Đảo ngược (chữ bên trái, ảnh bên phải) giới thiệu `Phong cách sống` và châm ngôn làm việc (Motto Box).
5. **`ServicesSection.tsx`** ("TÔI LÀM GÌ"): Lưới 3 cột x 2 hàng gồm 6 thẻ dịch vụ có viền mảnh, bo góc, icon tròn nổi bật và tag phân loại (`CONTENT`, `ADS / SALE`, `SEO`, `BRANDING`, `GROWTH`, `ANALYTICS`).
6. **`ExperienceSection.tsx`**:
   * Cột trái: Khối `HỌC VẤN` & `CHỨNG CHỈ` (Google Ads, Meta Certified, HubSpot, SEO Master).
   * Cột phải: Timeline dọc `KINH NGHIỆM LÀM VIỆC` (2024, 2023, 2022).
   * Khối dưới: `KỸ NĂNG NỔI BẬT` chia 2 nhóm "Kỹ năng mềm" và "Kỹ năng chuyên môn" với thanh progress bar màu cam có animation khi cuộn tới.
7. **`ProjectsSection.tsx`** ("DỰ ÁN NỔI BẬT"): Lưới 2 cột card dự án bám sát tên mẫu Canva (`DỰ ÁN GIƯỜNG TỦ GỖ`, `DỰ ÁN SON MÔI NARS`, `DỰ ÁN GỘI ĐẦU DƯỠNG SINH`, `DỰ ÁN NHA KHOA SMILE`, `DỰ ÁN ĐÈN LỒNG HỘI AN`, `DỰ ÁN SPA VÀ DƯỠNG THỂ`, `DỰ ÁN KHÁC`). Tích hợp **Modal / Popup xem chi tiết** dự án khi nhấp chuột.
8. **`ContactFooter.tsx`**: Nền cam đậm toàn chiều rộng, bên trái là ảnh chân dung tròn, bên phải là form liên hệ và danh sách icon mạng xã hội/hotline.

---

## 🚀 4. Hướng dẫn khởi chạy

Chuyển vào thư mục `next-portfolio`:
```bash
cd d:\HaGiang\next-portfolio
```

Khởi chạy môi trường phát triển:
```bash
npm run dev
```
Truy cập: **`http://localhost:3000`**

Kiểm tra bản build sản phẩm:
```bash
npm run build
npm run start
```
