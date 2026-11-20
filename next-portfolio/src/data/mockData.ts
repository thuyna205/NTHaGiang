export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  badge?: string;
  description: string;
  fullContent?: string;
  reach: string;
  conversion: string;
  link?: string;
}

export interface Service {
  id: number;
  title: string;
  tag: string;
  desc: string;
  iconImage: string;
}

export interface Experience {
  year: string;
  role: string;
  company?: string;
  desc: string;
}

export interface SkillItem {
  name: string;
  percent: number;
}

const publicImage = (fileName: string) => `/NTHaGiang/images/${fileName}`;

export const portfolioData = {
  profile: {
    name: "NGUYỄN THỊ HÀ GIANG",
    title: "Digital Marketing • Planner • Content",
    heroHeading: "XIN CHÀO MÌNH LÀ",
    avatarHero: publicImage("hagiang_floral_dress.jpg"),
    avatarPolaroid1: publicImage("hagiang_suit.jpg"),
    avatarPolaroid2: publicImage("hagiang_conical_hat.jpg"),
    avatarAbout1: publicImage("hagiang_suit.jpg"),
    avatarAbout2: publicImage("hagiang_floral_dress.jpg"),
    avatarFooter: publicImage("hagiang_conical_hat.jpg"),
    phone: "0335.794.889",
    email: "nguyenthihagiang@gmail.com",
    facebook: "https://www.facebook.com/share/1F7NzKZEmW/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@hagiangdayyy83?_r=1&_t=ZS-9AauEKNz5tc",
    instagram: "https://www.instagram.com/hagiangdayyy?vrfl=MXFuMHYxajNva2o0aQ==",
    address: "Hà Nội / TP. Hồ Chí Minh"
  },
  marqueeTexts: [
    "DIGITAL MARKETING",
    "TỐI ƯU CHIẾN DỊCH QUẢNG CÁO",
    "XÂY DỰNG THƯƠNG HIỆU DOANH NGHIỆP",
    "NỘI DUNG SÁNG TẠO ĐA KÊNH",
    "CONTENT STRATEGY & PLANNING",
    "SOCIAL MEDIA GROWTH"
  ],
  about: {
    portfolioTitle: "Digital marketing portfolio",
    introText: "Chào mọi người! Mình là một người đam mê sáng tạo, thích tìm hiểu những thứ mới mẻ từng ngày. Mình tìm đến với môi trường làm việc Marketing mang lại rất nhiều trải nghiệm và những giá trị thực tế cho doanh nghiệp.",
    bulletPoints: [
      "Có nhiều năm kinh nghiệm trong các mảng tiếp thị số và truyền thông.",
      "Hệ thống hoá quy trình, chiến lược và triển khai chiến dịch đa kênh.",
      "Cung cách làm việc: Tỉ mỉ, kỷ luật, trách nhiệm và cam kết cao.",
      "Phong cách marketing: Hiện đại, sáng tạo, thực chiến và ROI tối ưu."
    ],
    lifestyleTitle: "Phong cách sống",
    lifestyleText: "Hình ảnh yêu thích: Năng động, giản dị, lịch sự, thích hợp cho các buổi gặp mặt với đối tác hay những buổi dã ngoại năng lượng. Mình tin rằng một phong cách sống tích cực sẽ luôn mang lại nguồn cảm hứng dồi dào trong công việc sáng tạo.",
    motto: "Sáng tạo là chìa khóa mở ra tiềm năng vô hạn. Thành công đến từ sự kiên trì, đam mê và tử tế trong từng hành động."
  },
  services: [
    {
      id: 1,
      title: "BRANDING & CREATIVE",
      tag: "BRANDING",
      iconImage: publicImage("icon_branding.png"),
      desc: "Định hướng hình ảnh, thông điệp thương hiệu và phối hợp sản xuất hình ảnh, video truyền thông."
    },
    {
      id: 2,
      title: "SALE",
      tag: "SALE",
      iconImage: publicImage("icon_sale.png"),
      desc: "Tư vấn, tiếp cận khách hàng và thúc đẩy doanh số."
    },
    {
      id: 3,
      title: "WEBSITE & MAPS",
      tag: "SEO / MAPS",
      iconImage: publicImage("icon_maps.png"),
      desc: "Tối ưu website và Google Maps để tăng khả năng hiển thị trên Google, giúp khách hàng dễ dàng tìm thấy doanh nghiệp."
    },
    {
      id: 4,
      title: "STORYTELLER",
      tag: "CONTENT",
      iconImage: publicImage("icon_storyteller.png"),
      desc: "Xây dựng câu chuyện và truyền tải thông điệp thương hiệu để thu hút, tạo cảm xúc và kết nối với khách hàng."
    },
    {
      id: 5,
      title: "DIGITAL ADVERTISING",
      tag: "ADS",
      iconImage: publicImage("icon_digital_ads.png"),
      desc: "Lập kế hoạch quảng cáo, theo dõi hiệu suất chiến dịch và đề xuất tối ưu theo mục tiêu."
    },
    {
      id: 6,
      title: "DIGITAL MARKETING STRATEGY",
      tag: "STRATEGY",
      iconImage: publicImage("icon_strategy.png"),
      desc: "Nghiên cứu thị trường, xác định khách hàng mục tiêu, xây dựng chiến lược"
    }
  ],
  education: {
    degree: "Tốt nghiệp Đại học Duy Tân",
    major: "Chuyên ngành Digital Marketing",
    certs: ["MOS", "HSK2", "Toeic"]
  },
  experiences: [
    {
      year: "2024",
      role: "Freelance",
      company: "",
      desc: "Dự án BNI : Cá nhân khách hàng"
    },
    {
      year: "2025",
      role: "Nhân viên Marketing chuỗi quán ăn Bánh Canh Cua Thố Đá T&N",
      company: "",
      desc: "Quản lý và thực hiện chiến dịch truyền thông đa kênh cho chuỗi ẩm thực."
    },
    {
      year: "2026",
      role: "Nhân viên điều phối dự án Công ty NR GLOBAL",
      company: "",
      desc: "Điều phối và giám sát triển khai các dự án truyền thông và marketing tổng thể."
    }
  ],
  skills: {
    softSkills: [
      { name: "Giao tiếp", percent: 85 },
      { name: "Lãnh đạo", percent: 80 },
      { name: "Làm việc nhóm", percent: 90 },
      { name: "Quan sát", percent: 95 }
    ],
    hardSkills: [
      { name: "Social media Content", percent: 90 },
      { name: "Advertising Marketing Planning", percent: 85 },
      { name: "Content Strategy", percent: 90 },
      { name: "AI Powered Creativity", percent: 85 },
      { name: "Digital Marketing Campaigns", percent: 90 },
      { name: "Google Analytics", percent: 85 },
      { name: "SEO", percent: 90 },
      { name: "Website", percent: 85 },
      { name: "Canva, Capcut", percent: 95 },
      { name: "UX/UI", percent: 85 }
    ]
  },
  projects: [
    {
      id: 1,
      title: "DỰ ÁN UNITY FURNITURE",
      category: "Nội thất gỗ",
      thumbnail: publicImage("proj_1.jpg"),
      description: "Project Manager | Lên sale và dự án, Leader team Marketing, Account Manager, Content Writer, Xây dựng thương hiệu, Thiết kế website.",
      reach: "Chi tiết",
      conversion: "Liên hệ ngay",
      link: "https://unityfurniture.vn"
    },
    {
      id: 2,
      title: "DỰ ÁN KHOA TRANG SỨC",
      category: "Trang sức",
      thumbnail: publicImage("proj_2.jpg"),
      description: "Project Manager | Lên sale và dự án, Leader team Marketing, Account Manager, Content Writer, Xây dựng thương hiệu, Thiết kế website.",
      reach: "Chi tiết",
      conversion: "Liên hệ ngay",
      link: "https://trangsucphuocloc.com/?fbclid=IwY2xjawVGZK5leHRuA2FlbQIxMABwZG9mBWJyaWQRMW1qUGpaeEM4bmJaYlN5dkVzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeFi5sFBgS8g5mplnhDrXJhPL0o9qTk_-c1C6tGwIHVYg8ybFnGsKQ0Js_40o_aem_ztHJLnXTHjxv9Km3iRhXGg"
    },
    {
      id: 3,
      title: "DỰ ÁN PAM SPA SORA",
      category: "Spa & Dưỡng sinh",
      thumbnail: publicImage("proj_3.jpg"),
      description: "Project Manager | Lên sale và dự án, Leader team Marketing, Account Manager, Content Writer, Xây dựng thương hiệu, Thiết kế website.",
      reach: "Chi tiết",
      conversion: "Liên hệ ngay",
      link: "https://pamspasora.com"
    },
    {
      id: 4,
      title: "DỰ ÁN THÀNH DANH",
      category: "Khách sạn",
      thumbnail: publicImage("proj_4.jpg"),
      description: "Project Manager | Lên sale và dự án, Leader team Marketing, Account Manager, Content Writer, Xây dựng thương hiệu, Thiết kế website.",
      reach: "Chi tiết",
      conversion: "Liên hệ ngay",
      link: "https://thanhdanhhotel.vn"
    },
    {
      id: 5,
      title: "DỰ ÁN BEYOND HỘI AN",
      category: "Du lịch & Văn hóa",
      thumbnail: publicImage("proj_5.jpg"),
      description: "Project Manager | Lên sale và dự án, Leader team Marketing, Account Manager, Content Writer, Xây dựng thương hiệu, Thiết kế website.",
      reach: "Chi tiết",
      conversion: "Liên hệ ngay",
      link: "https://beyondhoian.com"
    },
    {
      id: 6,
      title: "DỰ ÁN GREEN HILLS SPA",
      category: "Aesthetic & Spa",
      thumbnail: publicImage("proj_6.jpg"),
      description: "Project Manager | Lên sale và dự án, Leader team Marketing, Account Manager, Content Writer, Xây dựng thương hiệu, Thiết kế website.",
      reach: "Chi tiết",
      conversion: "Liên hệ ngay",
      link: "https://greenhillspa.com"
    },
    {
      id: 7,
      title: "DỰ ÁN ZINPILOT",
      category: "Du lịch & Công nghệ",
      thumbnail: publicImage("proj_zinpilot.jpg"),
      description: "Project Manager | Lên sale và dự án, Leader team Marketing, Account Manager, Content Writer, Xây dựng thương hiệu, Thiết kế website.",
      reach: "Chi tiết",
      conversion: "Liên hệ ngay"
    }
  ]
};
