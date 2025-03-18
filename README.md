# Dự án NextJS Đa Ngôn Ngữ

Đây là dự án NextJS với hỗ trợ đa ngôn ngữ (tiếng Anh và tiếng Việt) sử dụng App Router. Ngôn ngữ mặc định là tiếng Việt.

## Cài đặt

```bash
# Cài đặt các phụ thuộc
yarn
```

## Chạy dự án

```bash
# Chạy môi trường phát triển
yarn dev

# Build dự án cho production
yarn build

# Chạy phiên bản đã build
yarn start

# Kiểm tra lỗi linting
yarn lint
```

## Cấu trúc thư mục

- `src/app/[lang]` - Các trang theo ngôn ngữ
- `src/middleware.ts` - Xử lý chuyển hướng ngôn ngữ
- `src/i18n` - Cấu hình đa ngôn ngữ
- `public/locales` - Các file ngôn ngữ JSON

## Ngôn ngữ hỗ trợ

- Tiếng Anh (`en`)
- Tiếng Việt (`vi`) - Mặc định

## Chuyển đổi ngôn ngữ

Ứng dụng tự động phát hiện ngôn ngữ từ trình duyệt. Bạn cũng có thể chuyển đổi thủ công bằng cách nhấp vào nút "Thay đổi ngôn ngữ" hoặc truy cập trực tiếp URL với mã ngôn ngữ:

- `/en` - Tiếng Anh
- `/vi` - Tiếng Việt
