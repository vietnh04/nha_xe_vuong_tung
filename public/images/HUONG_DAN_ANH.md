# Hướng dẫn thêm ảnh cho website

## Danh sách ảnh cần có:

### 1. Logo chính (✅ Đã có)
- **File**: `logo.png`
- **Vị trí**: Header, Footer, Favicon
- **Kích thước**: Tự động điều chỉnh theo chiều cao 48px

### 2. Logo Zalo (✅ Đã có)
- **File**: `zalo_logo.png`
- **Vị trí**: Banner CTA, Footer social icons
- **Kích thước**: 24x24px

### 3. Ảnh đội xe (❗ Cần thêm)
- **File cần đặt**: `about-cars.jpg` hoặc `about-cars.png`
- **Vị trí**: Section "Kiến Tạo Chuẩn Mực Di Chuyển Mới"
- **Mô tả**: Ảnh 2 xe (sedan + van) như bạn đã cung cấp
- **Kích thước khuyến nghị**: 800x1000px (tỷ lệ 4:5)
- **Format**: JPG hoặc PNG

## Cách thêm ảnh:

1. **Lưu ảnh xe vào thư mục này** với tên: `about-cars.jpg`
2. Nếu dùng format PNG, đổi tên thành: `about-cars.png` và cập nhật trong `src/App.js`
3. Restart dev server để thấy thay đổi

## Vị trí file trong code:

```javascript
// src/App.js - AboutSection
<img 
  src="/images/about-cars.jpg" 
  alt="Đội xe cao cấp - Nhà Xe Tú Linh" 
  alt="Đội xe cao cấp - Nhà Xe Minh Đức" 
  alt="Đội xe cao cấp - Nhà Xe Minh Khôi" 
  className="w-full h-[500px] object-cover"
/>
```

## Lưu ý:
- Ảnh sẽ được crop để fit vào khung 500px chiều cao
- Nên dùng ảnh có độ phân giải cao để đảm bảo chất lượng
- Format JPG cho ảnh thực tế, PNG cho ảnh có nền trong suốt
