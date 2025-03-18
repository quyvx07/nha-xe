/**
 * Hàm đảm bảo các đường dẫn tài nguyên tĩnh luôn được tham chiếu từ thư mục gốc
 * và không bị ảnh hưởng bởi định tuyến ngôn ngữ
 */
export const getAssetPath = (path: string): string => {
  // Đảm bảo path luôn bắt đầu bằng dấu '/'
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // Sử dụng URL tuyệt đối từ gốc của trang web
  return process.env.NEXT_PUBLIC_BASE_URL
    ? `${process.env.NEXT_PUBLIC_BASE_URL}${normalizedPath}`
    : normalizedPath;
};
