import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: () => set({ isAuthenticated: true, user: { name: 'Budi Santoso', company: 'PT Semen Nusantara' } }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
