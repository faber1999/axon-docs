import type { TranslationKey } from '../i18n/en'

export interface NavItem {
  path: string
  labelKey: TranslationKey
}

export interface NavGroup {
  groupKey: TranslationKey
  items: NavItem[]
}

export const navGroups: NavGroup[] = [
  {
    groupKey: 'nav.group.gettingStarted',
    items: [
      { path: '/docs/introduction', labelKey: 'nav.introduction' },
      { path: '/docs/installation', labelKey: 'nav.installation' },
    ],
  },
  {
    groupKey: 'nav.group.reactivity',
    items: [
      { path: '/docs/signals', labelKey: 'nav.signals' },
      { path: '/docs/effects', labelKey: 'nav.effects' },
      { path: '/docs/computed', labelKey: 'nav.computed' },
      { path: '/docs/batch-untrack', labelKey: 'nav.batchUntrack' },
    ],
  },
  {
    groupKey: 'nav.group.components',
    items: [
      { path: '/docs/jsx-components', labelKey: 'nav.jsxComponents' },
      { path: '/docs/lifecycle', labelKey: 'nav.lifecycle' },
    ],
  },
  {
    groupKey: 'nav.group.controlFlow',
    items: [
      { path: '/docs/show', labelKey: 'nav.show' },
      { path: '/docs/for', labelKey: 'nav.for' },
      { path: '/docs/dynamic-portal', labelKey: 'nav.dynamicPortal' },
    ],
  },
  {
    groupKey: 'nav.group.router',
    items: [
      { path: '/docs/router-setup', labelKey: 'nav.routerSetup' },
      { path: '/docs/navigation', labelKey: 'nav.navigation' },
      { path: '/docs/guards', labelKey: 'nav.guards' },
      { path: '/docs/lazy-loading', labelKey: 'nav.lazyLoading' },
    ],
  },
  {
    groupKey: 'nav.group.store',
    items: [{ path: '/docs/store', labelKey: 'nav.store' }],
  },
  {
    groupKey: 'nav.group.context',
    items: [{ path: '/docs/context', labelKey: 'nav.context' }],
  },
  {
    groupKey: 'nav.group.advanced',
    items: [
      { path: '/docs/view-transitions', labelKey: 'nav.viewTransitions' },
      { path: '/docs/how-it-works', labelKey: 'nav.howItWorks' },
    ],
  },
]

export const flatNavItems: NavItem[] = navGroups.flatMap((g) => g.items)

export function getPrevNext(currentPath: string): {
  prev: NavItem | null
  next: NavItem | null
} {
  const idx = flatNavItems.findIndex((item) => item.path === currentPath)
  return {
    prev: idx > 0 ? flatNavItems[idx - 1] : null,
    next: idx < flatNavItems.length - 1 ? flatNavItems[idx + 1] : null,
  }
}
