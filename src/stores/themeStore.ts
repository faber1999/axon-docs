import { createStore, effect } from '@faber1999/axon.js'

export type Theme = 'light' | 'dark'

const saved = typeof localStorage !== 'undefined' ? (localStorage.getItem('axon-docs-theme') as Theme | null) : null
const initialTheme: Theme = saved === 'dark' || saved === 'light' ? saved : 'dark'

export const [themeStore, setThemeStore] = createStore<{ theme: Theme }>({ theme: initialTheme })

export function setTheme(theme: Theme) {
  setThemeStore('theme', theme)
  localStorage.setItem('axon-docs-theme', theme)
}

export function toggleTheme() {
  setTheme(themeStore.theme === 'dark' ? 'light' : 'dark')
}

// Reactively apply/remove the `dark` class on <html>
effect(() => {
  if (themeStore.theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
