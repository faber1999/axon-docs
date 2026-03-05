import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const ROUTER_VIEW = `import { RouterView } from '@faber1999/axon.js'

function App() {
  return (
    <div>
      <nav>...</nav>
      <main>
        {/* Renders the component matching the current route */}
        <RouterView />
      </main>
    </div>
  )
}`

const LINK = `import { Link } from '@faber1999/axon.js'

// Basic link
<Link href="/about">About</Link>

// Active class (applied when href matches the current path)
<Link href="/dashboard" activeClass="nav-active">
  Dashboard
</Link>

// Replace instead of push (no new history entry)
<Link href="/login" replace>Login</Link>`

const USE_NAVIGATE = `import { useNavigate } from '@faber1999/axon.js'

function LoginForm() {
  const navigate = useNavigate()

  async function handleSubmit() {
    await login()
    navigate('/dashboard')
  }

  return <form onSubmit={handleSubmit}>...</form>
}`

const USE_ROUTER = `import { useRouter, useParams } from '@faber1999/axon.js'

// Full router instance
const router = useRouter()
router.pathname()   // '/user/42' (reactive)
router.search()     // '?tab=posts' (reactive)
router.params()     // { id: '42' } (reactive)
router.navigate('/somewhere')

// Shorthand for current params
const params = useParams()
// { id: '42' } — reactive plain object`

const PROG_NAV = `function GoBackButton() {
  const navigate = useNavigate()
  const router = useRouter()

  return (
    <button onClick={() => {
      // Navigate with replace (no new history entry)
      navigate('/home', { replace: true })
    }}>
      Go Home
    </button>
  )
}`

export default function Navigation() {
  return (
    <div>
      <h1>{lang('Navigation', 'Navegación')}</h1>
      <p class="doc-lead">
        {lang(
          'axon.js provides RouterView to render the current page, Link for declarative navigation, and useNavigate for programmatic navigation.',
          'axon.js proporciona RouterView para renderizar la página actual, Link para navegación declarativa, y useNavigate para navegación programática.'
        )}
      </p>

      <h2>RouterView</h2>
      <p>
        {lang(
          'Place RouterView where you want the matched page to render. It replaces its content whenever the route changes, optionally applying layout components defined in route groups.',
          'Coloca RouterView donde quieres que se renderice la página correspondiente. Reemplaza su contenido cada vez que cambia la ruta, aplicando opcionalmente los componentes de layout definidos en los grupos de rutas.'
        )}
      </p>
      <CodeBlock code={ROUTER_VIEW} />

      <h2>Link</h2>
      <p>
        {lang(
          'Link renders an anchor tag that intercepts clicks to navigate without a full page reload. It supports an activeClass that is applied when its href matches the current path.',
          'Link renderiza un elemento anchor que intercepta clics para navegar sin recargar la página. Soporta un activeClass que se aplica cuando su href coincide con la ruta actual.'
        )}
      </p>
      <CodeBlock code={LINK} />

      <div class="doc-note">
        {lang(
          'Link only intercepts plain left-clicks without modifier keys (Ctrl, Meta, Shift, Alt). Modified clicks open in a new tab as expected.',
          'Link solo intercepta clics normales con el botón izquierdo sin teclas modificadoras (Ctrl, Meta, Shift, Alt). Los clics con modificadores abren en una pestaña nueva como se espera.'
        )}
      </div>

      <h2>useNavigate()</h2>
      <p>
        {lang(
          'Returns the navigate function for imperative navigation. Use it inside event handlers, form submissions, or after async operations.',
          'Retorna la función navigate para navegación imperativa. Úsala dentro de manejadores de eventos, envíos de formularios, o después de operaciones asíncronas.'
        )}
      </p>
      <CodeBlock code={USE_NAVIGATE} />

      <h2>useRouter() / useParams()</h2>
      <p>
        {lang(
          'useRouter() returns the full router instance with reactive getters for pathname, search, and params. useParams() is a shorthand that returns just the current params.',
          'useRouter() retorna la instancia completa del router con getters reactivos para pathname, search y params. useParams() es un shorthand que retorna solo los params actuales.'
        )}
      </p>
      <CodeBlock code={USE_ROUTER} lang="ts" />

      <h2>{lang('Replace vs Push', 'Replace vs Push')}</h2>
      <CodeBlock code={PROG_NAV} />
    </div>
  )
}
