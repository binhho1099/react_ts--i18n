/**
 * Dinh nghia cau hinh cua tung route.
 * @property {string} page - Ten cua component duoc cau hinh duoi thu muc pages, gia tri phai giong voi
 * ten duoc dinh nghia trong thu muc page
 * @property {boolean} exact - Chi dinh co phai la "partial match hay khong". @see https://reactrouter.com/web/api/Route/exact-bool
 * @property {string} path - path truy cap tren trinh duyet
 */
export interface IRoute {
  page: string;
  exact?: boolean;
  path: string;
  name: string;
}

type RestrictedRoute = 'login';
/**
 * @description
 * Dinh nghia nhung route chi nhung nguoi chua dang nhap moi xem duoc
 *
 * Vi du: /login
 * Nếu đã đăng nhập thì sẽ chuyển hướng tới trang chủ /dashboard
 */
export const restrictedRoutes: Readonly<Record<RestrictedRoute, IRoute>> = {
  login: {
    name: 'Login',
    page: 'login',
    exact: true,
    path: '/login',
  },
};

type PublicRoute = string;
/**
 * @description
 * Ding nghia nhung route cho ca nhung nguoi chua dang nhap va nhung nguoi da
 * dang nhap co the xem duoc
 */
export const publicRoutes: Readonly<Record<PublicRoute, IRoute>> = {
  group: {
    page: 'group',
    exact: true,
    path: '/group',
    name: 'Nhóm',
  },
};

export type ProtectedRoute =
  | 'profile'
  | 'setting'
  | 'dashboard'
  | 'manageKiosk'
  | 'userManagement'
  | 'test';
/**
 * @description
 * Dinh nghia nhung route chi danh cho nhung nguoi da nhap thi moi duoc truy cap
 * Vi du: setting
 * Nếu chưa đăng nhập sẽ bị đẩy về trang /login
 */
export const protectedRoutes: Readonly<Record<ProtectedRoute, IRoute>> = {
  profile: {
    name: 'Thông tin cá nhân',
    page: 'profile',
    exact: false,
    path: '/profile',
  },
  setting: {
    name: 'Cài đặt',
    page: 'setting',
    exact: false,
    path: '/setting',
  },
  dashboard: {
    name: 'Trang chủ',
    page: 'dashboard',
    exact: false,
    path: '/dashboard',
  },
  manageKiosk: {
    page: 'ManageKiosk',
    exact: false,
    path: '/manage-kiosk',
    name: 'Manage Kiosk',
  },
  userManagement: {
    page: 'userManagement',
    exact: false,
    path: '/user-management',
    name: 'User Management',
  },
  test: {
    page: 'test',
    exact: false,
    path: '/test',
    name: 'test',
  },
};

export type ProtectedSettingRoute = 'setting' | 'common' | 'sidebar';

export const protectedSettingRoutes: Readonly<
  Record<ProtectedSettingRoute, IRoute>
> = {
  setting: {
    name: 'Cài đặt',
    page: 'setting',
    exact: false,
    path: '/setting',
  },
  common: {
    name: 'Cài đặt',
    page: 'setting/sidebar',
    exact: false,
    path: '/setting/sidebar',
  },
  sidebar: {
    name: 'Cài đặt',
    page: 'setting/sidebar',
    exact: false,
    path: '/setting/sidebar',
  },
};
