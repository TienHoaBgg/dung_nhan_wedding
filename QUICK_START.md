# 🚀 Quick Start - Deploy trong 5 phút

## Bước 1: Tạo Repository trên GitHub (2 phút)

1. **Truy cập:** https://github.com/TienHoaBgg
2. **Click:** Nút "New" (màu xanh)
3. **Điền thông tin:**
   - Repository name: `dung_nhan_wedding`
   - Description: `Wedding Invitation Website`
   - ✅ Public
   - ❌ KHÔNG check "Add a README file"
4. **Click:** "Create repository"

## Bước 2: Deploy Code (2 phút)

### Cách 1: Sử dụng Script Tự Động (Khuyến nghị)

**Windows:**
```bash
# Mở Command Prompt trong thư mục dự án
deploy.bat
```

**macOS/Linux:**
```bash
# Mở Terminal trong thư mục dự án
chmod +x deploy.sh
./deploy.sh
```

### Cách 2: Thủ công
```bash
git init
git remote add origin https://github.com/TienHoaBgg/dung_nhan_wedding.git
git add .
git commit -m "Initial wedding website"
git push -u origin main
```

## Bước 3: Cài đặt GitHub Pages (1 phút)

1. **Vào repository:** https://github.com/TienHoaBgg/dung_nhan_wedding
2. **Click:** Tab "Settings"
3. **Scroll xuống:** Phần "Pages" (sidebar trái)
4. **Cấu hình:**
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
5. **Click:** "Save"

## ✅ Hoàn thành!

**Website sẽ có địa chỉ:**
```
https://tienhoabgg.github.io/dung_nhan_wedding/
```

**Thời gian deploy:** 5-10 phút

## 📝 Checklist sau khi deploy

- [ ] Website hiển thị đúng
- [ ] Thay thế ảnh demo bằng ảnh thật
- [ ] Cập nhật thông tin cặp đôi
- [ ] Thêm QR code ngân hàng
- [ ] Test trên mobile
- [ ] Chia sẻ link với bạn bè

## 🔄 Cập nhật website

Mỗi khi sửa đổi:
```bash
git add .
git commit -m "Update info"
git push
```

Website tự động cập nhật sau 1-2 phút.

## ❗ Troubleshooting

**Lỗi thường gặp:**

1. **"Repository not found"**
   - Đảm bảo đã tạo repository trên GitHub
   - Kiểm tra tên repository: `dung_nhan_wedding`

2. **"Authentication failed"**
   - Nhập đúng username/password GitHub
   - Nếu có 2FA: dùng Personal Access Token

3. **"Website không hiển thị"**
   - Đợi 5-10 phút
   - Kiểm tra GitHub Pages settings
   - Xóa cache trình duyệt

4. **"Ảnh không hiển thị"**
   - Kiểm tra tên file ảnh
   - Đảm bảo ảnh trong thư mục `images/`

## 🎯 Mục tiêu

Sau khi hoàn thành, bạn sẽ có:
- ✅ Website thiệp mời cưới online
- ✅ Địa chỉ web riêng
- ✅ Tự động cập nhật khi sửa đổi
- ✅ Responsive trên mọi thiết bị
- ✅ Miễn phí hoàn toàn

**Chúc mừng! 🎉**
