# 💒 Trang Web Thiệp Mời Cưới

Một trang web thiệp mời cưới đẹp và hiện đại, được thiết kế responsive và có đầy đủ tính năng.

## ✨ Tính năng

- 📱 **Responsive Design** - Hiển thị đẹp trên mọi thiết bị
- ⏰ **Countdown Timer** - Đếm ngược đến ngày cưới
- 🖼️ **Gallery** - Album ảnh cưới với lightbox
- 📅 **Event Calendar** - Thêm sự kiện vào lịch Google
- 💝 **Gift Section** - Phần gửi quà mừng với QR code ngân hàng
- 🎥 **Video Player** - Nhúng video cưới từ YouTube
- 📖 **Love Story Timeline** - Kể chuyện tình yêu theo thời gian
- 🎨 **Smooth Animations** - Hiệu ứng mượt mà
- 🔗 **Smooth Scrolling** - Cuộn mượt giữa các section
- 🙏 **Thank You Section** - Phần cảm ơn với ảnh nền đẹp

## 🚀 Cách sử dụng

### 1. Tùy chỉnh thông tin cặp đôi

Mở file `index.html` và thay đổi:
- `[Tên Chú Rể]` → Tên thật của chú rể
- `[Tên Cô Dâu]` → Tên thật của cô dâu
- `01 Tháng 7 2025` → Ngày cưới thật
- Các địa chỉ sự kiện
- Mô tả về cặp đôi

### 2. Thêm hình ảnh

Thêm các file ảnh vào thư mục `images/`:
- `groom.jpg` - Ảnh chú rể
- `bride.jpg` - Ảnh cô dâu  
- `story1.jpg` đến `story4.jpg` - Ảnh chuyện tình yêu
- `gallery1.jpg` đến `gallery12.jpg` - Album ảnh cưới
- `qr-groom.png` và `qr-bride.png` - QR code ngân hàng
- `thank-you-bg.jpg` - Ảnh nền phần cảm ơn

### 3. Cập nhật ngày cưới

Trong file `js/script.js`, tìm dòng:
```javascript
const weddingDate = new Date('2025-07-01T07:30:00').getTime();
```
Thay đổi thành ngày cưới thật của bạn.

### 4. Thêm video cưới

Trong file `js/script.js`, tìm dòng:
```javascript
const videoId = 'dQw4w9WgXcQ'; // Example video ID
```
Thay thế bằng ID video YouTube thật của bạn.

### 5. Tùy chỉnh màu sắc

Trong file `css/style.css`, thay đổi các biến CSS:
```css
:root {
    --primary-color: #d4af37;    /* Màu chính */
    --accent-color: #e91e63;     /* Màu nhấn */
    --text-dark: #333;           /* Màu chữ tối */
    --text-light: #666;          /* Màu chữ nhạt */
}
```

## 📁 Cấu trúc thư mục

```
dung_wedding/
├── index.html          # File HTML chính
├── css/
│   └── style.css      # File CSS styling
├── js/
│   └── script.js      # File JavaScript
├── images/
│   ├── README.md      # Hướng dẫn về ảnh
│   ├── groom.jpg      # Ảnh chú rể
│   ├── bride.jpg      # Ảnh cô dâu
│   ├── story1-4.jpg   # Ảnh chuyện tình yêu
│   └── gallery1-12.jpg # Album ảnh cưới
└── README.md          # File này
```

## 🎨 Tùy chỉnh nâng cao

### Thay đổi font chữ
Trong `index.html`, thay đổi Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Thêm section mới
1. Thêm HTML vào `index.html`
2. Thêm CSS styling vào `css/style.css`
3. Thêm JavaScript nếu cần vào `js/script.js`

### Tích hợp form RSVP với backend
Trong `js/script.js`, function `submitRSVP()` hiện tại chỉ là demo. Bạn có thể:
- Tích hợp với Google Forms
- Gửi email qua EmailJS
- Kết nối với database

## 📱 Responsive Breakpoints

- **Desktop**: > 992px
- **Tablet**: 768px - 992px  
- **Mobile**: < 768px

## 🌐 Trình duyệt hỗ trợ

- Chrome (khuyến nghị)
- Firefox
- Safari
- Edge

## 📞 Hỗ trợ

Nếu bạn cần hỗ trợ tùy chỉnh thêm, hãy liên hệ!

## 📄 License

Free to use for personal wedding websites.

---

💝 **Chúc bạn có một đám cưới thật hạnh phúc!** 💝
