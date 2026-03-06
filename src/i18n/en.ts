export const en = {
  // Nav groups
  'nav.group.gettingStarted': 'Getting Started',
  'nav.group.reactivity': 'Reactivity',
  'nav.group.components': 'Components',
  'nav.group.controlFlow': 'Control Flow',
  'nav.group.router': 'Router',
  'nav.group.store': 'Store',
  'nav.group.context': 'Context',
  'nav.group.advanced': 'Advanced',

  // Nav items
  'nav.home': 'Home',
  'nav.introduction': 'Introduction',
  'nav.installation': 'Installation',
  'nav.signals': 'Signals',
  'nav.effects': 'Effects',
  'nav.computed': 'Computed',
  'nav.batchUntrack': 'Batch & Untrack',
  'nav.jsxComponents': 'JSX & Components',
  'nav.lifecycle': 'Lifecycle',
  'nav.show': 'Show',
  'nav.for': 'For',
  'nav.dynamicPortal': 'Dynamic & Portal',
  'nav.routerSetup': 'Setup',
  'nav.navigation': 'Navigation',
  'nav.guards': 'Guards',
  'nav.lazyLoading': 'Lazy Loading',
  'nav.store': 'createStore',
  'nav.context': 'createContext',
  'nav.viewTransitions': 'View Transitions',
  'nav.howItWorks': 'How It Works',

  // UI chrome
  'ui.previous': 'Previous',
  'ui.next': 'Next',
  'ui.lightMode': 'Light mode',
  'ui.darkMode': 'Dark mode',
  'ui.openMenu': 'Open menu',
  'ui.closeMenu': 'Close menu',
  'ui.getStarted': 'Get started',
  'ui.readDocs': 'Read the docs',
  'ui.viewOnGithub': 'View on GitHub',
  'ui.docs': 'Docs',
  'ui.changeLanguage': 'Change language',

  // Home
  'home.eyebrow': 'Fine-grained reactive framework',
  'home.tagline': 'Build reactive UIs without the overhead.',
  'home.description':
    'axon.js is a fine-grained reactive frontend framework. No virtual DOM, no re-renders — only the exact DOM nodes tied to a signal update.',
  'home.feature1.title': 'Fine-grained Reactivity',
  'home.feature1.desc':
    'Components run once. Only the exact DOM nodes tied to a signal update — no diffing, no re-renders.',
  'home.feature2.title': 'Zero Dependencies',
  'home.feature2.desc': 'The entire runtime is under 10 kB. No external libraries required.',
  'home.feature3.title': 'JSX Native',
  'home.feature3.desc': 'Write components with the JSX syntax you already know, powered by a custom Vite plugin.',
  'home.feature4.title': 'Full-featured',
  'home.feature4.desc': 'Router, Store, Context, Portals, Lazy loading — everything you need in one package.',
  'home.quickstart': 'Quick start'
} as const

export type TranslationKey = keyof typeof en
