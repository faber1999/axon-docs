import { Link, signal } from '@faber1999/axon.js'
import { langStore, setLang, t } from '../i18n'
import { themeStore, toggleTheme } from '../stores/themeStore'
import { Logo } from './Logo'

export const [sidebarOpen, setSidebarOpen] = signal(false)

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

export function Navbar() {
  return (
    <header class="navbar">
      <button class="icon-btn mobile-menu-btn" onClick={() => setSidebarOpen((v) => !v)} title={t('ui.openMenu')}>
        <MenuIcon />
      </button>

      <Link href="/" class="navbar-brand">
        <Logo size={24} />
        <span>axon.js</span>
      </Link>

      <Link href="/docs/introduction" class="navbar-docs-link">
        <span>{t('ui.docs')}</span>
      </Link>

      <div class="navbar-spacer" />

      <div class="navbar-actions">
        <a
          href="https://github.com/faber1999/axon.js"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-btn"
          title={t('ui.viewOnGithub')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>

        <button
          class="icon-btn"
          onClick={toggleTheme}
          title={() => (themeStore.theme === 'dark' ? t('ui.lightMode') : t('ui.darkMode'))}
        >
          {() => (themeStore.theme === 'dark' ? <SunIcon /> : <MoonIcon />)}
        </button>

        <button
          class="lang-btn"
          onClick={() => setLang(langStore.lang === 'en' ? 'es' : 'en')}
          title={t('ui.changeLanguage')}
        >
          {() => (langStore.lang === 'en' ? 'ES' : 'EN')}
        </button>
      </div>
    </header>
  )
}
