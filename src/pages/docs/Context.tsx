import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const CREATE = `import { createContext } from '@faber1999/axon.js'

// createContext(defaultValue) — default used when no Provider is above
const ThemeContext = createContext<'dark' | 'light'>('dark')`

const PROVIDER = `function App() {
  const [theme, setTheme] = signal<'dark' | 'light'>('light')

  return (
    // Provide the current theme value to all descendants
    <ThemeContext.Provider value={theme}>
      <Page />
    </ThemeContext.Provider>
  )
}`

const CONSUMER = `function Page() {
  // .use() reads the nearest Provider's value above in the tree
  const theme = ThemeContext.use()

  return <div class={theme}>Page content</div>
}`

const REACTIVE_CONTEXT = `// The Provider's value can be a reactive getter
function App() {
  const [theme, setTheme] = signal<'dark' | 'light'>('dark')

  return (
    // Pass the getter (not the value) — consumers update automatically
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme((t) => t === 'dark' ? 'light' : 'dark')}>
        Toggle
      </button>
      <Page />
    </ThemeContext.Provider>
  )
}

function Page() {
  const theme = ThemeContext.use()
  // theme is a getter — call it in reactive contexts
  return <div class={theme}>...</div>
}`

const NESTED = `// Providers can be nested — inner ones shadow outer ones
function App() {
  return (
    <ThemeContext.Provider value="light">
      <Header />  {/* reads 'light' */}
      <ThemeContext.Provider value="dark">
        <Sidebar />  {/* reads 'dark' */}
      </ThemeContext.Provider>
    </ThemeContext.Provider>
  )
}`

const MULTIPLE = `const ThemeContext = createContext<'dark' | 'light'>('light')
const LocaleContext = createContext<'en' | 'es'>('en')
const UserContext   = createContext<User | null>(null)

function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <LocaleContext.Provider value={locale}>
        <UserContext.Provider value={user}>
          <Router />
        </UserContext.Provider>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  )
}`

export default function Context() {
  return (
    <div>
      <h1>createContext</h1>
      <p class="doc-lead">
        {lang(
          'Context passes values down the component tree without prop drilling. Any descendant can read the nearest Provider\'s value.',
          'Context pasa valores por el árbol de componentes sin prop drilling. Cualquier descendiente puede leer el valor del Provider más cercano.'
        )}
      </p>

      <h2>{lang('Creating a context', 'Crear un context')}</h2>
      <p>
        {lang(
          'createContext(defaultValue) creates a context object. The default value is used when a component reads the context but there is no Provider above it.',
          'createContext(defaultValue) crea un objeto context. El valor por defecto se usa cuando un componente lee el context pero no hay un Provider por encima de él.'
        )}
      </p>
      <CodeBlock code={CREATE} lang="ts" />

      <h2>Provider</h2>
      <p>
        {lang(
          'Wrap your component tree with Context.Provider to supply a value. The value is available to all descendants.',
          'Envuelve tu árbol de componentes con Context.Provider para proporcionar un valor. El valor está disponible para todos los descendientes.'
        )}
      </p>
      <CodeBlock code={PROVIDER} />

      <h2>{lang('Reading context', 'Leer el context')}</h2>
      <p>
        {lang(
          'Call Context.use() inside any descendant component to read the nearest Provider\'s value.',
          'Llama a Context.use() dentro de cualquier componente descendiente para leer el valor del Provider más cercano.'
        )}
      </p>
      <CodeBlock code={CONSUMER} />

      <h2>{lang('Reactive context values', 'Valores de context reactivos')}</h2>
      <p>
        {lang(
          'Pass a signal getter as the value to make the context reactive. Consumers automatically update when the signal changes.',
          'Pasa un getter de señal como value para hacer el context reactivo. Los consumidores se actualizan automáticamente cuando la señal cambia.'
        )}
      </p>
      <CodeBlock code={REACTIVE_CONTEXT} />

      <h2>{lang('Nested providers', 'Providers anidados')}</h2>
      <p>
        {lang(
          'Inner providers shadow outer ones. Each component reads the nearest Provider above it.',
          'Los providers internos sobrescriben a los externos. Cada componente lee el Provider más cercano por encima de él.'
        )}
      </p>
      <CodeBlock code={NESTED} />

      <h2>{lang('Multiple contexts', 'Múltiples contexts')}</h2>
      <CodeBlock code={MULTIPLE} />
    </div>
  )
}
