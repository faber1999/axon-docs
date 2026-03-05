import { lazy, type RouteDefinition } from '@faber1999/axon.js'
import { DocLayout } from '../components/DocLayout'

const Home = lazy(() => import('../pages/Home'))
const NotFound = lazy(() => import('../pages/NotFound'))

// Doc pages
const Introduction = lazy(() => import('../pages/docs/Introduction'))
const Installation = lazy(() => import('../pages/docs/Installation'))
const Signals = lazy(() => import('../pages/docs/Signals'))
const Effects = lazy(() => import('../pages/docs/Effects'))
const Computed = lazy(() => import('../pages/docs/Computed'))
const BatchUntrack = lazy(() => import('../pages/docs/BatchUntrack'))
const JsxComponents = lazy(() => import('../pages/docs/JsxComponents'))
const Lifecycle = lazy(() => import('../pages/docs/Lifecycle'))
const ShowPage = lazy(() => import('../pages/docs/Show'))
const ForPage = lazy(() => import('../pages/docs/For'))
const DynamicPortal = lazy(() => import('../pages/docs/DynamicPortal'))
const RouterSetup = lazy(() => import('../pages/docs/RouterSetup'))
const Navigation = lazy(() => import('../pages/docs/Navigation'))
const Guards = lazy(() => import('../pages/docs/Guards'))
const LazyLoading = lazy(() => import('../pages/docs/LazyLoading'))
const Store = lazy(() => import('../pages/docs/Store'))
const Context = lazy(() => import('../pages/docs/Context'))
const ViewTransitions = lazy(() => import('../pages/docs/ViewTransitions'))
const HowItWorks = lazy(() => import('../pages/docs/HowItWorks'))

export const routes: RouteDefinition[] = [
  { path: '/', component: Home },
  {
    layout: DocLayout,
    children: [
      { path: '/docs/introduction', component: Introduction },
      { path: '/docs/installation', component: Installation },
      { path: '/docs/signals', component: Signals },
      { path: '/docs/effects', component: Effects },
      { path: '/docs/computed', component: Computed },
      { path: '/docs/batch-untrack', component: BatchUntrack },
      { path: '/docs/jsx-components', component: JsxComponents },
      { path: '/docs/lifecycle', component: Lifecycle },
      { path: '/docs/show', component: ShowPage },
      { path: '/docs/for', component: ForPage },
      { path: '/docs/dynamic-portal', component: DynamicPortal },
      { path: '/docs/router-setup', component: RouterSetup },
      { path: '/docs/navigation', component: Navigation },
      { path: '/docs/guards', component: Guards },
      { path: '/docs/lazy-loading', component: LazyLoading },
      { path: '/docs/store', component: Store },
      { path: '/docs/context', component: Context },
      { path: '/docs/view-transitions', component: ViewTransitions },
      { path: '/docs/how-it-works', component: HowItWorks }
    ]
  },

  { path: '*', component: NotFound }
]
