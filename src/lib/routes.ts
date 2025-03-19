// Lấy prefix admin từ biến môi trường hoặc sử dụng giá trị mặc định
export const ADMIN_PREFIX = process.env.NEXT_PUBLIC_ADMIN_PATH || "admin";

// Helper function để tạo đường dẫn admin
export function getAdminPath(path: string = ""): string {
  return `/${ADMIN_PREFIX}${path ? `/${path}` : ""}`;
}

// Các route admin chính
export const adminRoutes = {
  dashboard: () => getAdminPath("dashboard"),
  settings: () => getAdminPath("settings"),
  profile: () => getAdminPath("settings/profile"),
  security: () => getAdminPath("settings/security"),
  appearance: () => getAdminPath("settings/appearance"),
  notifications: () => getAdminPath("settings/notifications"),
  analytics: () => getAdminPath("analytics"),
  users: () => getAdminPath("users"),
  trips: () => getAdminPath("trips"),
  routes: () => getAdminPath("routes"),
  vehicles: () => getAdminPath("vehicles"),
  bookings: () => getAdminPath("bookings"),
  drivers: () => getAdminPath("drivers"),
  billing: () => getAdminPath("billing"),
  help: () => getAdminPath("help"),
  company: () => getAdminPath("company"),
} as const;
