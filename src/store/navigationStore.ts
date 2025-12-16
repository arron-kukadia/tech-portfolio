import { create } from 'zustand'

type NavigationStore = {
  isMobileMenuOpen: boolean
  setMobileMenuOpen: (isOpen: boolean) => void
  toggleMobileMenu: () => void
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  isMobileMenuOpen: false,
  setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
}))
