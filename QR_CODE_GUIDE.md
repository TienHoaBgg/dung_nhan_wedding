# 📱 Hướng dẫn tạo QR Code ngân hàng

## Cách tạo QR Code chuyển khoản

### Phương pháp 1: Sử dụng app ngân hàng
1. Mở app ngân hàng (VCB, Techcombank, BIDV, etc.)
2. Vào mục "Nhận tiền" hoặc "QR Code"
3. Chọn "Tạo mã QR nhận tiền"
4. Nhập thông tin:
   - Số tiền (có thể để trống)
   - Nội dung chuyển khoản: "Mung cuoi [Tên cặp đôi]"
5. Tạo QR và lưu ảnh

### Phương pháp 2: Sử dụng Napas 247
1. Truy cập: https://www.napas247.vn/
2. Chọn "Tạo mã QR"
3. Nhập thông tin tài khoản:
   - Số tài khoản
   - Tên chủ tài khoản
   - Ngân hàng
   - Số tiền (tùy chọn)
   - Nội dung
4. Tạo và tải QR code

### Phương pháp 3: Sử dụng VietQR
1. Truy cập: https://vietqr.io/
2. Chọn ngân hàng
3. Nhập số tài khoản
4. Nhập số tiền và nội dung
5. Tạo QR code

## Thông tin cần chuẩn bị

### Cho chú rể:
- **Tên tài khoản**: [Tên đầy đủ theo CMND]
- **Số tài khoản**: [Số tài khoản ngân hàng]
- **Ngân hàng**: [Tên ngân hàng]
- **Nội dung**: "Mung cuoi [Tên chú rể] [Tên cô dâu]"

### Cho cô dâu:
- **Tên tài khoản**: [Tên đầy đủ theo CMND]
- **Số tài khoản**: [Số tài khoản ngân hàng]
- **Ngân hàng**: [Tên ngân hàng]
- **Nội dung**: "Mung cuoi [Tên chú rể] [Tên cô dâu]"

## Lưu ý quan trọng

### Kích thước ảnh:
- **Kích thước**: 400x400px hoặc 500x500px
- **Định dạng**: PNG (nền trong suốt) hoặc JPG
- **Chất lượng**: Cao, rõ nét để dễ quét

### Tên file:
- QR chú rể: `qr-groom.png`
- QR cô dâu: `qr-bride.png`

### Test QR code:
1. Sau khi tạo, hãy test bằng app ngân hàng
2. Quét QR để kiểm tra thông tin có chính xác không
3. Đảm bảo số tài khoản và tên hiển thị đúng

## Cập nhật thông tin trong website

### Bước 1: Thay đổi thông tin trong HTML
Trong file `index.html`, tìm và sửa:

```html
<!-- QR Code 1 - Chú rể -->
<h5>TÊN CHÚ RỂ</h5>
<p class="account-number">SỐ TÀI KHOẢN</p>
<p class="bank-name">TÊN NGÂN HÀNG</p>

<!-- QR Code 2 - Cô dâu -->
<h5>TÊN CÔ DÂU</h5>
<p class="account-number">SỐ TÀI KHOẢN</p>
<p class="bank-name">TÊN NGÂN HÀNG</p>
```

### Bước 2: Upload ảnh QR
1. Copy file `qr-groom.png` vào thư mục `images/`
2. Copy file `qr-bride.png` vào thư mục `images/`

### Bước 3: Test website
1. Mở website trong trình duyệt
2. Kiểm tra QR code hiển thị đúng
3. Test tính năng copy số tài khoản (click vào card)

## Mẫu QR Code

Trong demo hiện tại, QR code được hiển thị dưới dạng placeholder. 
Bạn cần thay thế bằng QR code thật theo hướng dẫn trên.

## Bảo mật

⚠️ **Lưu ý bảo mật:**
- Chỉ chia sẻ QR code với khách mời tin tưởng
- Không đặt số tiền cố định trong QR (để khách tự quyết định)
- Kiểm tra thường xuyên tài khoản ngân hàng
- Có thể tạo tài khoản riêng cho việc nhận quà cưới

## Hỗ trợ

Nếu gặp khó khăn trong việc tạo QR code, bạn có thể:
1. Liên hệ ngân hàng để được hỗ trợ
2. Nhờ bạn bè có kinh nghiệm
3. Sử dụng dịch vụ tạo QR online miễn phí
