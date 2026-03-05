import type { TranslationKey } from './en'

export const es: Record<TranslationKey, string> = {
  // Nav groups
  'nav.group.gettingStarted': 'Comenzando',
  'nav.group.reactivity': 'Reactividad',
  'nav.group.components': 'Componentes',
  'nav.group.controlFlow': 'Control de flujo',
  'nav.group.router': 'Router',
  'nav.group.store': 'Store',
  'nav.group.context': 'Context',
  'nav.group.advanced': 'Avanzado',

  // Nav items
  'nav.introduction': 'Introducción',
  'nav.installation': 'Instalación',
  'nav.signals': 'Señales',
  'nav.effects': 'Efectos',
  'nav.computed': 'Computed',
  'nav.batchUntrack': 'Batch y Untrack',
  'nav.jsxComponents': 'JSX y Componentes',
  'nav.lifecycle': 'Ciclo de vida',
  'nav.show': 'Show',
  'nav.for': 'For',
  'nav.dynamicPortal': 'Dynamic y Portal',
  'nav.routerSetup': 'Configuración',
  'nav.navigation': 'Navegación',
  'nav.guards': 'Guards',
  'nav.lazyLoading': 'Lazy Loading',
  'nav.store': 'createStore',
  'nav.context': 'createContext',
  'nav.viewTransitions': 'Transiciones',
  'nav.howItWorks': 'Cómo funciona',

  // UI chrome
  'ui.previous': 'Anterior',
  'ui.next': 'Siguiente',
  'ui.lightMode': 'Modo claro',
  'ui.darkMode': 'Modo oscuro',
  'ui.openMenu': 'Abrir menú',
  'ui.closeMenu': 'Cerrar menú',
  'ui.getStarted': 'Comenzar',
  'ui.readDocs': 'Leer documentación',
  'ui.viewOnGithub': 'Ver en GitHub',
  'ui.docs': 'Docs',
  'ui.changeLanguage': 'Cambiar idioma',

  // Home
  'home.eyebrow': 'Framework reactivo de grano fino',
  'home.tagline': 'Construye UIs reactivas sin el peso.',
  'home.description':
    'axon.js es un framework frontend reactivo de grano fino. Sin virtual DOM, sin re-renders — solo los nodos exactos del DOM vinculados a una señal se actualizan.',
  'home.feature1.title': 'Reactividad de grano fino',
  'home.feature1.desc':
    'Los componentes se ejecutan una vez. Solo los nodos exactos del DOM vinculados a una señal se actualizan — sin diffing, sin re-renders.',
  'home.feature2.title': 'Sin dependencias',
  'home.feature2.desc': 'El runtime completo pesa menos de 10 kB. No requiere librerías externas.',
  'home.feature3.title': 'JSX nativo',
  'home.feature3.desc':
    'Escribe componentes con la sintaxis JSX que ya conoces, potenciada por un plugin de Vite personalizado.',
  'home.feature4.title': 'Completo',
  'home.feature4.desc': 'Router, Store, Context, Portals, Lazy loading — todo lo que necesitas en un solo paquete.',
  'home.quickstart': 'Inicio rápido'
}
