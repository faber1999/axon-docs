import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const BASIC = `createRouter([
  { path: '/login', component: Login },
  {
    guard: () => isLoggedIn() || '/login',
    children: [
      { path: '/dashboard', component: Dashboard },
    ],
  },
])`

const RETURN_VALUES = `// Allow: return true
guard: () => true

// Deny (go back / fallbackPath): return false
guard: () => false

// Redirect: return a path string
guard: () => isLoggedIn() ? true : '/login'
guard: () => isAdmin() || '/unauthorized'`

const FALLBACK_PATH = `{
  layout: AdminLayout,
  guard: () => user()?.role === 'admin',
  fallbackPath: '/unauthorized',   // used when accessed directly via URL
  children: [
    { path: '/admin', component: AdminDashboard },
  ],
}`

const REACTIVE = `const [user, setUser] = signal<User | null>(null)

// The guard re-evaluates whenever user() changes
// If the user logs out, RouterView re-renders automatically
{
  guard: () => user() !== null || '/login',
  children: [
    { path: '/dashboard', component: Dashboard },
  ],
}`

const MULTIPLE_CHECKS = `function adminGuard() {
  if (!isLoggedIn()) return '/login'
  if (!isAdmin()) return '/unauthorized'
  return true
}

createRouter([
  {
    guard: adminGuard,
    children: [
      { path: '/admin', component: AdminPanel },
    ],
  },
])`

export default function Guards() {
  return (
    <div>
      <h1>Guards</h1>
      <p class="doc-lead">
        {lang(
          'Route guards control access to protected routes. A guard is a function that returns true to allow, false to deny, or a path string to redirect.',
          'Los guards de ruta controlan el acceso a rutas protegidas. Un guard es una función que retorna true para permitir, false para denegar, o una cadena de ruta para redirigir.'
        )}
      </p>

      <h2>{lang('Basic guard', 'Guard básico')}</h2>
      <p>
        {lang(
          'Attach a guard to a route group. The guard runs before any child route renders.',
          'Adjunta un guard a un grupo de rutas. El guard se ejecuta antes de que cualquier ruta hijo se renderice.'
        )}
      </p>
      <CodeBlock code={BASIC} />

      <h2>{lang('Return values', 'Valores de retorno')}</h2>
      <table>
        <thead>
          <tr>
            <th>{lang('Returns', 'Retorna')}</th>
            <th>{lang('Behavior', 'Comportamiento')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>true</code></td>
            <td>{lang('Allow access, render the component', 'Permitir acceso, renderizar el componente')}</td>
          </tr>
          <tr>
            <td><code>false</code></td>
            <td>{lang('Deny: navigate back, or to fallbackPath if no history', 'Denegar: navegar atrás, o a fallbackPath si no hay historial')}</td>
          </tr>
          <tr>
            <td><code>"/path"</code></td>
            <td>{lang('Redirect to that path', 'Redirigir a esa ruta')}</td>
          </tr>
        </tbody>
      </table>
      <CodeBlock code={RETURN_VALUES} lang="ts" />

      <h2>fallbackPath</h2>
      <p>
        {lang(
          'When the guard returns false and there is no previous route (e.g. the user accessed the URL directly), fallbackPath is used as the redirect target. If omitted and there is no previous route, nothing renders.',
          'Cuando el guard retorna false y no hay ruta anterior (por ejemplo, el usuario accedió directamente a la URL), fallbackPath se usa como destino de redirección. Si se omite y no hay ruta anterior, no se renderiza nada.'
        )}
      </p>
      <CodeBlock code={FALLBACK_PATH} />

      <h2>{lang('Reactive guards', 'Guards reactivos')}</h2>
      <p>
        {lang(
          'Guards that read signals are reactive. RouterView re-evaluates the guard whenever those signals change — no manual re-checking needed.',
          'Los guards que leen señales son reactivos. RouterView re-evalúa el guard cada vez que esas señales cambian — no se necesita re-verificación manual.'
        )}
      </p>
      <CodeBlock code={REACTIVE} />

      <h2>{lang('Multiple conditions', 'Múltiples condiciones')}</h2>
      <p>
        {lang(
          'Extract complex guard logic into a named function for clarity.',
          'Extrae la lógica compleja del guard en una función con nombre para mayor claridad.'
        )}
      </p>
      <CodeBlock code={MULTIPLE_CHECKS} lang="ts" />
    </div>
  )
}
