// src/stores/AuthStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  auth: {
    authenticated: boolean;
    user?: {
      email: string;
      name: string;
    };
  };
  authenticate: (user: { email: string; name: string; userId: number }) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      auth: { authenticated: false, user: undefined },

      authenticate: (user) =>
        set(() => ({
          auth: { authenticated: true, user },
        })),

      logout: () =>
        set(() => ({
          auth: { authenticated: false, user: undefined },
        })),
    }),

    {
      name: "auth-storage", // nombre clave para localStorage
      partialize: (state) => ({ auth: state.auth }), // especifica qué partes deben ser persistentes
    }
  )
);

export default useAuthStore;
