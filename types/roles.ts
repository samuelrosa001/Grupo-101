export type UserRole = 'guest' | 'member' | 'distributor' | 'admin';

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  joinedAt: string;
}

export interface Permission {
  canAccessDashboard: boolean;
  canAccessPrivateArea: boolean;
  canAccessAcademy: boolean;
  canManageUsers: boolean;
  canEditContent: boolean;
}

export const ROLE_PERMISSIONS: Record<UserRole, Permission> = {
  guest: {
    canAccessDashboard: false,
    canAccessPrivateArea: false,
    canAccessAcademy: false,
    canManageUsers: false,
    canEditContent: false,
  },
  member: {
    canAccessDashboard: false,
    canAccessPrivateArea: true,
    canAccessAcademy: true,
    canManageUsers: false,
    canEditContent: false,
  },
  distributor: {
    canAccessDashboard: true,
    canAccessPrivateArea: true,
    canAccessAcademy: true,
    canManageUsers: false,
    canEditContent: false,
  },
  admin: {
    canAccessDashboard: true,
    canAccessPrivateArea: true,
    canAccessAcademy: true,
    canManageUsers: true,
    canEditContent: true,
  },
};

export function hasPermission(role: UserRole, permission: keyof Permission): boolean {
  return ROLE_PERMISSIONS[role]?.[permission] ?? false;
}
