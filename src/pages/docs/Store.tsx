import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const CREATE = `import { createStore } from '@faber1999/axon.js'

interface AppState {
  theme: 'dark' | 'light'
  count: number
  user: string | null
}

const [store, setStore] = createStore<AppState>({
  theme: 'dark',
  count: 0,
  user: null,
})`

const READ = `// Reading a property is reactive — any effect or JSX that reads it
// will re-run when that property changes
store.theme  // 'dark'
store.count  // 0
store.user   // null`

const WRITE = `// Set a single property
setStore('theme', 'light')

// Update with a function (receives current value)
setStore('count', (c) => c + 1)

// Merge update: set multiple properties at once
setStore({ theme: 'light', count: 5 })`

const IN_COMPONENT = `function ThemeToggle() {
  return (
    <button onClick={() => setStore('theme', store.theme === 'dark' ? 'light' : 'dark')}>
      {() => store.theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}

function Counter() {
  return (
    <div>
      <p>Count: {() => store.count}</p>
      <button onClick={() => setStore('count', (c) => c + 1)}>+1</button>
    </div>
  )
}`

const SELECT = `import { select } from '@faber1999/axon.js'

// select() creates a computed value derived from a store
const isDark = select(store, (s) => s.theme === 'dark')
const label  = select(store, (s) => \`Theme: \${s.theme}\`)

isDark()  // true (reactive getter)
label()   // 'Theme: dark'`

const MULTIPLE_STORES = `// Multiple independent stores — each with its own reactive scope
const [userStore, setUserStore] = createStore({ name: '', email: '' })
const [cartStore, setCartStore] = createStore({ items: [], total: 0 })
const [uiStore,   setUiStore]   = createStore({ sidebarOpen: false })`

export default function Store() {
  return (
    <div>
      <h1>createStore</h1>
      <p class="doc-lead">
        {lang(
          'createStore() creates a reactive global state object. Each top-level property is an independent signal — reading it subscribes, writing it notifies.',
          'createStore() crea un objeto de estado global reactivo. Cada propiedad de nivel superior es una señal independiente — leerla suscribe, escribirla notifica.'
        )}
      </p>

      <h2>{lang('Creating a store', 'Crear un store')}</h2>
      <CodeBlock code={CREATE} lang="ts" />

      <h2>{lang('Reading state', 'Leer el estado')}</h2>
      <p>
        {lang(
          'Read properties directly from the store proxy. Each read inside a reactive context (effect, JSX, computed) creates a subscription.',
          'Lee las propiedades directamente del proxy del store. Cada lectura en un contexto reactivo (effect, JSX, computed) crea una suscripción.'
        )}
      </p>
      <CodeBlock code={READ} lang="ts" />

      <h2>{lang('Updating state', 'Actualizar el estado')}</h2>
      <p>
        {lang(
          'setStore() has three overloads: set a key-value pair, update with a function, or merge an object.',
          'setStore() tiene tres sobrecargas: establecer un par clave-valor, actualizar con una función, o fusionar un objeto.'
        )}
      </p>
      <CodeBlock code={WRITE} lang="ts" />

      <h2>{lang('Using the store in components', 'Usar el store en componentes')}</h2>
      <CodeBlock code={IN_COMPONENT} />

      <h2>select()</h2>
      <p>
        {lang(
          'select() is syntactic sugar for computed(() => selector(store)). Use it to derive values from a store.',
          'select() es azúcar sintáctico para computed(() => selector(store)). Úsalo para derivar valores de un store.'
        )}
      </p>
      <CodeBlock code={SELECT} lang="ts" />

      <h2>{lang('Multiple stores', 'Múltiples stores')}</h2>
      <p>
        {lang(
          'There is no single global store — call createStore() as many times as you need. Stores are just reactive objects; export them from a module and import wherever needed.',
          'No hay un único store global — llama a createStore() tantas veces como necesites. Los stores son solo objetos reactivos; expórtalos desde un módulo e impórtalos donde se necesiten.'
        )}
      </p>
      <CodeBlock code={MULTIPLE_STORES} lang="ts" />
    </div>
  )
}
