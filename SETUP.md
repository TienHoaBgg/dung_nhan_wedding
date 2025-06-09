# 🚀 Hướng dẫn cài đặt nhanh

## Bước 1: Xem demo
Mở file `demo.html` trong trình duyệt để xem giao diện mẫu.

## Bước 2: Tùy chỉnh thông tin cơ bản

### 2.1. Thay đổi tên cặp đôi
Trong file `index.html`, tìm và thay thế:
```html
<!-- Thay đổi từ -->
<span class="groom-name">[Tên Chú Rể]</span>
<span class="bride-name">[Tên Cô Dâu]</span>

<!-- Thành -->
<span class="groom-name">Tên Chú Rể Thật</span>
<span class="bride-name">Tên Cô Dâu Thật</span>
```

### 2.2. Cập nhật ngày cưới
```html
<!-- Thay đổi -->
<p class="wedding-date">01 Tháng 7 2025</p>
```

### 2.3. Cập nhật countdown timer
Trong file `js/script.js`:
```javascript
// Thay đổi ngày cưới
const weddingDate = new Date('2025-07-01T07:30:00').getTime();
```

## Bước 3: Thêm hình ảnh

### 3.1. Chuẩn bị ảnh
- Ảnh chú rể: `images/groom.jpg` (400x400px)
- Ảnh cô dâu: `images/bride.jpg` (400x400px)
- Ảnh chuyện tình yêu: `images/story1.jpg` đến `story4.jpg`
- Album cưới: `images/gallery1.jpg` đến `gallery12.jpg`

### 3.2. Thay thế ảnh demo
Copy ảnh thật vào thư mục `images/` với đúng tên file.

## Bước 4: Tùy chỉnh nội dung

### 4.1. Mô tả cặp đôi
Trong section `#couple`, thay đổi mô tả về chú rể và cô dâu.

### 4.2. Chuyện tình yêu
Trong section `#story`, cập nhật:
- Ngày tháng các mốc quan trọng
- Nội dung câu chuyện
- Tiêu đề các giai đoạn

### 4.3. Thông tin sự kiện
Trong section `#events`, cập nhật:
- Thời gian các buổi lễ
- Địa chỉ tổ chức
- Link Google Maps

## Bước 5: Tùy chỉnh màu sắc (tùy chọn)

Trong file `css/style.css`:
```css
:root {
    --primary-color: #d4af37;    /* Màu vàng chính */
    --accent-color: #e91e63;     /* Màu hồng nhấn */
    --text-dark: #333;           /* Màu chữ tối */
}
```

## Bước 6: Thêm video cưới (tùy chọn)

1. Upload video lên YouTube
2. Lấy Video ID từ URL (phần sau `v=`)
3. Trong `js/script.js`, thay đổi:
```javascript
const videoId = 'YOUR_YOUTUBE_VIDEO_ID';
```

## Bước 7: Test và deploy

### 7.1. Test local
- Mở `index.html` trong trình duyệt
- Kiểm tra tất cả tính năng
- Test trên mobile (F12 > Device Mode)

### 7.2. Deploy
Có thể deploy lên:
- **GitHub Pages** (miễn phí)
- **Netlify** (miễn phí)
- **Vercel** (miễn phí)
- **Web hosting** thông thường

## ✅ Checklist hoàn thành

- [ ] Thay đổi tên cặp đôi
- [ ] Cập nhật ngày cưới
- [ ] Thêm ảnh chú rể và cô dâu
- [ ] Viết mô tả về cặp đôi
- [ ] Cập nhật chuyện tình yêu
- [ ] Thêm thông tin sự kiện cưới
- [ ] Thêm album ảnh cưới
- [ ] Test countdown timer
- [ ] Test form RSVP
- [ ] Test responsive trên mobile
- [ ] Deploy website

## 🆘 Gặp vấn đề?

### Ảnh không hiển thị
- Kiểm tra tên file ảnh có đúng không
- Kiểm tra đường dẫn trong HTML
- Đảm bảo ảnh ở định dạng JPG/PNG

### Countdown không hoạt động
- Kiểm tra format ngày tháng trong JavaScript
- Mở Developer Tools (F12) xem có lỗi không

### Website không responsive
- Kiểm tra viewport meta tag
- Test trên nhiều kích thước màn hình

### Form RSVP không gửi được
- Hiện tại chỉ là demo, cần tích hợp backend
- Có thể dùng Google Forms hoặc EmailJS

## 📞 Liên hệ hỗ trợ
Nếu cần hỗ trợ thêm, hãy liên hệ để được tư vấn!
