import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const BASIC = `import { createRouter } from '@faber1999/axon.js'
import { Home, About, NotFound } from './pages'

createRouter([
  { path: '/',       component: Home    },
  { path: '/about',  component: About   },
  { path: '*',       component: NotFound },
])`

const WITH_PARAMS = `createRouter([
  { path: '/',         component: Home    },
  { path: '/user/:id', component: Profile },
  { path: '*',         component: NotFound },
])`

const GROUPS = `createRouter([
  { path: '/login', component: Login },

  // Route group: shared layout + access guard
  {
    layout: DashboardLayout,
    guard: () => isLoggedIn() || '/login',
    fallbackPath: '/login',
    children: [
      { path: '/dashboard', component: Dashboard },
      { path: '/settings',  component: Settings  },
      { path: '/profile',   component: Profile   },
    ],
  },

  { path: '*', component: NotFound },
])`

const MAIN = `import { createApp, createRouter, RouterView } from '@faber1999/axon.js'
import { routes } from './router/routes'

// Call createRouter before mounting
createRouter(routes, { viewTransitions: true })

function App() {
  return (
    <div>
      <Nav />
      <main>
        <RouterView />
      </main>
    </div>
  )
}

createApp(App).mount('#app')`

export default function RouterSetup() {
  return (
    <div>
      <h1>{lang('Router Setup', 'Configuración del Router')}</h1>
      <p class="doc-lead">
        {lang(
          'axon.js includes a client-side router built on the History API. Routes are defined as a flat array or in groups with shared layout and access guards.',
          'axon.js incluye un router del lado del cliente construido sobre la History API. Las rutas se definen como un array plano o en grupos con layout compartido y guards de acceso.'
        )}
      </p>

      <h2>{lang('Basic routes', 'Rutas básicas')}</h2>
      <p>
        {lang(
          'Call createRouter() once at app startup, before mounting. Pass an array of route definitions.',
          'Llama a createRouter() una vez al inicio de la app, antes de montar. Pasa un array de definiciones de rutas.'
        )}
      </p>
      <CodeBlock code={BASIC} />

      <h2>{lang('Route parameters', 'Parámetros de ruta')}</h2>
      <p>
        {lang(
          'Use :paramName in the path to define dynamic segments. Read them with useParams().',
          'Usa :paramName en la ruta para definir segmentos dinámicos. Léelos con useParams().'
        )}
      </p>
      <CodeBlock code={WITH_PARAMS} />

      <h2>{lang('Route groups', 'Grupos de rutas')}</h2>
      <p>
        {lang(
          'Group routes together to share a layout component and/or an access guard. The guard runs before any child route renders.',
          'Agrupa rutas para compartir un componente de layout y/o un guard de acceso. El guard se ejecuta antes de que cualquier ruta hijo se renderice.'
        )}
      </p>
      <CodeBlock code={GROUPS} />

      <h2>{lang('Full app setup', 'Configuración completa de la app')}</h2>
      <CodeBlock code={MAIN} />

      <div class="doc-note">
        {lang(
          'createRouter() must be called before createApp().mount(). The router uses the History API — ensure your dev server and production host serve the index.html for all routes.',
          'createRouter() debe llamarse antes de createApp().mount(). El router usa la History API — asegúrate de que tu servidor de desarrollo y host de producción sirvan el index.html para todas las rutas.'
        )}
      </div>

      <h2>{lang('Wildcard route', 'Ruta comodín')}</h2>
      <p>
        {lang(
          'Use { path: \'*\' } as the last route to catch all unmatched paths (404 page).',
          'Usa { path: \'*\' } como última ruta para capturar todas las rutas que no coincidan (página 404).'
        )}
      </p>
    </div>
  )
}
