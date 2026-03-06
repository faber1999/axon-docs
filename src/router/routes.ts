import { lazy, type RouteDefinition } from '@faber1999/axon.js'

import { DocLayout } from '../components/DocLayout'
import { HomeLayout } from '../components/HomeLayout'

import BatchUntrack from '../pages/docs/BatchUntrack'
import Computed from '../pages/docs/Computed'
import Context from '../pages/docs/Context'
import DynamicPortal from '../pages/docs/DynamicPortal'
import Effects from '../pages/docs/Effects'
import ForPage from '../pages/docs/For'
import Guards from '../pages/docs/Guards'
import HowItWorks from '../pages/docs/HowItWorks'
import Installation from '../pages/docs/Installation'
import Introduction from '../pages/docs/Introduction'
import JsxComponents from '../pages/docs/JsxComponents'
import LazyLoading from '../pages/docs/LazyLoading'
import Lifecycle from '../pages/docs/Lifecycle'
import Navigation from '../pages/docs/Navigation'
import RouterSetup from '../pages/docs/RouterSetup'
import ShowPage from '../pages/docs/Show'
import Signals from '../pages/docs/Signals'
import Store from '../pages/docs/Store'
import ViewTransitions from '../pages/docs/ViewTransitions'

const Home = lazy(() => import('../pages/Home'))
const NotFound = lazy(() => import('../pages/NotFound'))

export const routes: RouteDefinition[] = [
  { layout: HomeLayout, children: [{ path: '/', component: Home }] },
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
