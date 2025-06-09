# 🚀 Hướng dẫn Deploy lên GitHub Pages

## Bước 1: Tạo Repository trên GitHub

1. **Truy cập GitHub:**
   - Đăng nhập vào https://github.com
   - Click nút "New" hoặc "+" ở góc phải trên

2. **Tạo Repository:**
   - Repository name: `dung_nhan_wedding`
   - Description: `Trang web thiệp mời cưới Dung & Nhân - Wedding Invitation Website`
   - Chọn **Public** (để sử dụng GitHub Pages miễn phí)
   - ✅ Check "Add a README file"
   - Click "Create repository"

## Bước 2: Upload Code lên GitHub

### Phương pháp 1: Sử dụng Git Command Line

```bash
# Khởi tạo git trong thư mục dự án
git init

# Thêm remote repository
git remote add origin https://github.com/TienHoaBgg/dung_nhan_wedding.git

# Thêm tất cả file
git add .

# Commit
git commit -m "Initial commit: Wedding invitation website"

# Push lên GitHub
git push -u origin main
```

### Phương pháp 2: Sử dụng GitHub Desktop

1. Tải và cài đặt GitHub Desktop
2. Clone repository vừa tạo
3. Copy tất cả file vào thư mục repository
4. Commit và push

### Phương pháp 3: Upload trực tiếp trên web

1. Vào repository trên GitHub
2. Click "uploading an existing file"
3. Kéo thả tất cả file vào
4. Commit changes

## Bước 3: Cài đặt GitHub Pages

1. **Vào Settings:**
   - Trong repository, click tab "Settings"
   - Scroll xuống phần "Pages" ở sidebar trái

2. **Cấu hình Pages:**
   - Source: chọn "Deploy from a branch"
   - Branch: chọn "main" 
   - Folder: chọn "/ (root)"
   - Click "Save"

3. **Đợi deploy:**
   - GitHub sẽ build và deploy website
   - Thường mất 1-5 phút
   - Sẽ có thông báo khi hoàn thành

## Bước 4: Truy cập Website

Sau khi deploy thành công, website sẽ có địa chỉ:
```
https://tienhoabgg.github.io/dung_nhan_wedding/
```

## Bước 5: Cập nhật Website

Mỗi khi bạn muốn cập nhật:

1. **Sửa file trên máy tính**
2. **Push lên GitHub:**
   ```bash
   git add .
   git commit -m "Update wedding info"
   git push
   ```
3. **GitHub Pages tự động update** (1-2 phút)

## Tùy chỉnh Domain (Tùy chọn)

Nếu bạn có domain riêng:

1. **Mua domain** (ví dụ: `dungvanha.com`)
2. **Cấu hình DNS:**
   - Tạo CNAME record trỏ về `tienhoabgg.github.io`
3. **Cấu hình GitHub:**
   - Vào Settings > Pages
   - Nhập custom domain
   - Chờ verify

## Checklist Deploy

- [ ] Tạo repository `dung_nhan_wedding`
- [ ] Upload tất cả file code
- [ ] Cài đặt GitHub Pages
- [ ] Test website hoạt động
- [ ] Thêm ảnh thật (groom.jpg, bride.jpg, etc.)
- [ ] Thêm QR code ngân hàng
- [ ] Thêm ảnh nền thank-you-bg.jpg
- [ ] Cập nhật thông tin cặp đôi
- [ ] Test trên mobile
- [ ] Chia sẻ link với bạn bè

## Lưu ý quan trọng

### File cần chuẩn bị:
```
images/
├── groom.jpg          # Ảnh chú rể
├── bride.jpg          # Ảnh cô dâu  
├── story1-4.jpg       # Ảnh chuyện tình yêu
├── gallery1-12.jpg    # Album ảnh cưới
├── qr-groom.png       # QR code chú rể
├── qr-bride.png       # QR code cô dâu
└── thank-you-bg.jpg   # Ảnh nền thank you
```

### Thông tin cần sửa trong code:
- Tên cặp đôi trong `index.html`
- Ngày cưới trong `index.html` và `js/script.js`
- Thông tin ngân hàng trong phần Gift
- Địa chỉ sự kiện cưới
- Mô tả về cặp đôi
- Chuyện tình yêu

## Hỗ trợ

Nếu gặp vấn đề:
1. Kiểm tra file có upload đầy đủ không
2. Đảm bảo file `index.html` ở thư mục gốc
3. Kiểm tra GitHub Pages settings
4. Đợi 5-10 phút để GitHub build xong
5. Xóa cache trình duyệt và thử lại

## Bảo mật

- Repository public: ai cũng có thể xem code
- Không commit thông tin nhạy cảm
- QR code ngân hàng: cân nhắc tạo tài khoản riêng cho wedding
