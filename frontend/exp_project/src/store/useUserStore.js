import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Store global para gerenciar o estado do usuário
 * Utiliza o middleware persist para manter os dados do usuário entre recarregamentos da página
 */
const useUserStore = create(
  persist(
    (set) => ({
      // Estado inicial
      user: null,
      isAuthenticated: false,
      token: null,
      
      // Ações
      setUser: (userData) => set({ 
        user: userData,
        isAuthenticated: true 
      }),
      
      setToken: (token) => set({ token }),
      
      logout: () => set({ 
        user: null,
        isAuthenticated: false,
        token: null
      }),
    }),
    {
      name: 'user-storage', // nome usado para armazenar no localStorage
    }
  )
);

export default useUserStore;
