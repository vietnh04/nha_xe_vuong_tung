
# Landing Page Nhà Xe Minh Khôi

Website landing page dịch vụ xe ghép/xe tiện chuyến cao cấp kết nối Hà Nội - Nam Định, được xây dựng bằng React + TailwindCSS.

## Tính năng

- ✅ Giao diện sang trọng, hiện đại với tông màu xanh navy đậm
- ✅ Bảng giá minh bạch ngay tại hero section
- ✅ Responsive hoàn hảo trên mọi thiết bị
- ✅ Smooth scroll navigation
- ✅ Hover effects mượt mà
- ✅ Typography đậm và chuyên nghiệp
- ✅ Bo góc lớn, bóng đổ nhẹ nhàng

## Cấu trúc trang

1. **Header** - Logo, menu điều hướng, nút liên hệ
2. **Hero Section** - Bảng giá tuyến xe với CTA buttons
3. **About Section** - Giới thiệu về dịch vụ
4. **Core Values** - 4 giá trị cốt lõi
5. **Commitment** - Cam kết không bắt khách dọc đường
6. **Fleet Section** - Đội xe cao cấp (Sedan & SUV)
7. **Testimonial** - Đánh giá khách hàng
8. **Footer** - Thông tin liên hệ đầy đủ

## Cài đặt và chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm start

# Build production
npm run build
```

Ứng dụng sẽ chạy tại: http://localhost:3000

## Công nghệ sử dụng

- React 19.2.5
- TailwindCSS 3.x
- Google Fonts (Inter)

## Tùy chỉnh

### Màu sắc
Màu sắc được định nghĩa trong `tailwind.config.js`:
- Navy: #0A2647 (màu chủ đạo)
- Accent Red: #E63946 (màu nhấn)
- Accent Orange: #F77F00 (màu phụ)

### Nội dung
Tất cả nội dung có thể chỉnh sửa trực tiếp trong `src/App.js`:
- Bảng giá: Mảng `priceList` trong `HeroSection`
- Giá trị cốt lõi: Mảng `values` trong `CoreValuesSection`
- Đội xe: Object `fleets` trong `FleetSection`

### Liên hệ
Cập nhật số điện thoại và thông tin liên hệ trong:
- Header CTA button
- Hero section buttons
- Footer contact info

## License

© 2026 Nhà Xe Minh Khôi. All rights reserved.
