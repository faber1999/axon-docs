import { createStore } from '@faber1999/axon.js'

interface ThemeState {
  theme: 'dark' | 'light'
}

export const [themeStore, setThemeStore] = createStore<ThemeState>({
  theme: 'light'
})
