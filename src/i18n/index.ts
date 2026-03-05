import { createStore } from '@faber1999/axon.js'
import { en, type TranslationKey } from './en'
import { es } from './es'

export type { TranslationKey }
export type Lang = 'en' | 'es'

const saved = typeof localStorage !== 'undefined'
  ? (localStorage.getItem('axon-docs-lang') as Lang | null)
  : null
const initialLang: Lang = saved === 'en' || saved === 'es' ? saved : 'en'

export const [langStore, setLangStore] = createStore<{ lang: Lang }>({ lang: initialLang })

export function setLang(lang: Lang) {
  setLangStore('lang', lang)
  localStorage.setItem('axon-docs-lang', lang)
}

const translations = { en, es }

/** Returns a reactive getter for a UI translation key. */
export function t(key: TranslationKey): () => string {
  return () => translations[langStore.lang][key] ?? translations.en[key] ?? key
}

/**
 * Returns a reactive getter that switches between an English and Spanish value.
 * Use this for inline translated content inside doc pages.
 */
export function lang<T>(enVal: T, esVal: T): () => T {
  return () => (langStore.lang === 'en' ? enVal : esVal)
}
