# Dự Án Website Portfolio Nguyễn Thị Hà Giang (FE + BE)

Hệ thống website Portfolio hoàn chỉnh gồm cả **Frontend (FE)** và **Backend (BE)** được thiết kế bám sát từng chi tiết theo mẫu ảnh thiết kế:
- **Tone màu chủ đạo**: Cam ấm (#f17822), be kem (#fffaf4) và trắng sang trọng, chuyên nghiệp.
- **Phong cách**: Portfolio dành cho chuyên viên Digital Marketing / Creative / Content Lead.
- **Cấu trúc module hóa**:
  - Hero Header với ảnh polaroid nghiêng, huy hiệu Meta/Google/TikTok/Canva, ảnh chân dung dạng vòm (arch frame).
  - Ribbon Ticker chạy chữ chuyển động liên tục.
  - Về tôi (About Me) & Phong cách sống/làm việc.
  - "Tôi làm gì" (Dịch vụ cung cấp dạng card 6 khối).
  - Kinh nghiệm làm việc (Timeline) & Học vấn - Chứng chỉ.
  - Kỹ năng chuyên môn & Kỹ năng mềm với thanh đo phần trăm (Animated progress bars).
  - Dự án nổi bật (Project showcases với chỉ số tiếp cận & chuyển đổi).
  - Form liên hệ gửi trực tiếp vào Backend lưu trữ.

---

## 📁 Cấu trúc thư mục

```text
d:\HaGiang\
│
├── backend/
│   ├── data/
│   │   └── data.json           # Cơ sở dữ liệu JSON động (Profile, Dự án, Kỹ năng, Tin nhắn)
│   └── server.js               # Backend REST API Server (Node.js thuần hoặc Express)
│
├── frontend/
│   ├── index.html              # Giao diện chính bám sát 100% mẫu thiết kế
│   ├── style.css               # Bộ phong cách màu cam pastel, font Be Vietnam Pro & Playfair
│   └── app.js                  # Tự động đồng bộ dữ liệu động từ Backend REST API
│
├── package.json
└── README.md
```

---

## 🚀 Hướng dẫn khởi chạy

### 1. Khởi chạy Backend Server:
Mở terminal tại thư mục `d:\HaGiang` và chạy:
```bash
node backend/server.js
```
Server sẽ chạy tại: **`http://localhost:5000`**

### 2. Xem giao diện Frontend:
- Mở trực tiếp trình duyệt và truy cập: **`http://localhost:5000`** (Server đã cấu hình tự động phục vụ Frontend và API).
- Hoặc mở trực tiếp file `frontend/index.html` trên trình duyệt.

---

## 📡 Danh sách Backend REST APIs

| Phương thức | Endpoint | Mô tả |
| :--- | :--- | :--- |
| **GET** | `/api/portfolio` | Lấy toàn bộ dữ liệu trang web (Profile, Projects, Skills, Services...) |
| **GET** | `/api/projects` | Lấy danh sách các dự án nổi bật |
| **GET** | `/api/services` | Lấy danh sách dịch vụ "Tôi làm gì" |
| **POST** | `/api/contact` | Gửi thông tin lời nhắn liên hệ từ khách hàng / nhà tuyển dụng |
| **GET** | `/api/messages` | Xem danh sách các tin nhắn đã gửi đến |
