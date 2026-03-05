import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const BASIC = `import { lazy } from '@faber1999/axon.js'

// The module is NOT loaded until the route is first visited
const HeavyPage = lazy(() => import('./pages/HeavyPage'))

createRouter([
  { path: '/',       component: Home     },
  { path: '/heavy',  component: HeavyPage },
])`

const IN_GROUP = `createRouter([
  { path: '/', component: Home },
  {
    layout: DashboardLayout,
    guard: () => isLoggedIn() || '/login',
    children: [
      // All dashboard pages are lazy-loaded
      { path: '/dashboard', component: lazy(() => import('./pages/Dashboard')) },
      { path: '/settings',  component: lazy(() => import('./pages/Settings'))  },
      { path: '/reports',   component: lazy(() => import('./pages/Reports'))   },
    ],
  },
])`

const CACHING = `// The loader runs once — subsequent navigations are instant
const Profile = lazy(() => import('./pages/Profile'))

// First visit: loads the module, caches it, renders Profile
navigate('/profile')

// Second visit: uses cached module, no network request
navigate('/profile')`

export default function LazyLoading() {
  return (
    <div>
      <h1>Lazy Loading</h1>
      <p class="doc-lead">
        {lang(
          'lazy() wraps a dynamic import so the router loads the component module only on first navigation to that route. The result is cached for subsequent visits.',
          'lazy() envuelve un import dinámico para que el router cargue el módulo del componente solo en la primera navegación a esa ruta. El resultado se almacena en caché para visitas posteriores.'
        )}
      </p>

      <h2>{lang('Basic usage', 'Uso básico')}</h2>
      <p>
        {lang(
          'Wrap your dynamic import with lazy(). Nothing loads until the user navigates to that route for the first time.',
          'Envuelve tu import dinámico con lazy(). Nada se carga hasta que el usuario navega a esa ruta por primera vez.'
        )}
      </p>
      <CodeBlock code={BASIC} />

      <h2>{lang('In route groups', 'En grupos de rutas')}</h2>
      <p>
        {lang(
          'lazy() works seamlessly with route groups. Each page in a group can be independently lazy-loaded.',
          'lazy() funciona perfectamente con grupos de rutas. Cada página de un grupo puede cargarse de forma independiente.'
        )}
      </p>
      <CodeBlock code={IN_GROUP} />

      <h2>{lang('Caching behavior', 'Comportamiento del caché')}</h2>
      <p>
        {lang(
          'The module loader runs exactly once. After the first load, the resolved component is cached in memory — navigating back to the route is instant.',
          'El cargador del módulo se ejecuta exactamente una vez. Después de la primera carga, el componente resuelto se almacena en memoria — navegar de vuelta a la ruta es instantáneo.'
        )}
      </p>
      <CodeBlock code={CACHING} lang="ts" />

      <div class="doc-note">
        {lang(
          'While a lazy component is loading, nothing renders between the route comment markers. Consider adding a loading indicator inside the layout component.',
          'Mientras se carga un componente lazy, no se renderiza nada entre los marcadores de comentario de la ruta. Considera agregar un indicador de carga dentro del componente de layout.'
        )}
      </div>

      <h2>API</h2>
      <table>
        <thead>
          <tr>
            <th>{lang('Parameter', 'Parámetro')}</th>
            <th>{lang('Description', 'Descripción')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>loader</code></td>
            <td>{lang('A function returning a dynamic import: () => import(\'./Page\')', 'Una función que retorna un import dinámico: () => import(\'./Page\')')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
