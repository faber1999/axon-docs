import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const BASIC = `import { Show } from '@faber1999/axon.js'

const [isLoggedIn, setIsLoggedIn] = signal(false)

<Show when={isLoggedIn} fallback={<Login />}>
  <Dashboard />
</Show>`

const REACTIVE_WHEN = `// when can be a getter function (reactive)
<Show when={() => count() > 10} fallback={<p>Too low</p>}>
  <p>Count is above 10!</p>
</Show>

// or a plain value (evaluated once)
<Show when={user !== null}>
  <Profile />
</Show>`

const NO_FALLBACK = `// fallback is optional — nothing renders when when is falsy
<Show when={isAdmin}>
  <AdminPanel />
</Show>`

const NESTED = `<Show when={isLoggedIn} fallback={<Login />}>
  <Show when={() => hasPermission()} fallback={<Forbidden />}>
    <AdminDashboard />
  </Show>
</Show>`

const TYPED = `interface User {
  name: string
}

const [user, setUser] = signal<User | null>(null)

// Show passes the truthy value to children (typed)
<Show when={user}>
  {(u) => <p>Hello, {u.name}</p>}
</Show>`

export default function ShowPage() {
  return (
    <div>
      <h1>Show</h1>
      <p class="doc-lead">
        {lang(
          'Show is the idiomatic way to conditionally render content. It renders children when the when condition is truthy, and the fallback otherwise.',
          'Show es la forma idiomática de renderizar contenido condicionalmente. Renderiza children cuando la condición when es verdadera, y el fallback en caso contrario.'
        )}
      </p>

      <h2>{lang('Basic usage', 'Uso básico')}</h2>
      <CodeBlock code={BASIC} />

      <h2>{lang('Reactive condition', 'Condición reactiva')}</h2>
      <p>
        {lang(
          'Pass a getter function to when for reactive conditions. The condition is re-evaluated whenever the signals it reads change.',
          'Pasa una función getter a when para condiciones reactivas. La condición se re-evalúa cada vez que las señales que lee cambian.'
        )}
      </p>
      <CodeBlock code={REACTIVE_WHEN} />

      <h2>{lang('Without fallback', 'Sin fallback')}</h2>
      <p>
        {lang(
          'The fallback prop is optional. If omitted, nothing is rendered when the condition is false.',
          'El prop fallback es opcional. Si se omite, no se renderiza nada cuando la condición es falsa.'
        )}
      </p>
      <CodeBlock code={NO_FALLBACK} />

      <h2>{lang('Nested Show', 'Show anidado')}</h2>
      <CodeBlock code={NESTED} />

      <div class="doc-note">
        {lang(
          'Show disposes and re-creates its children tree when the condition toggles. For frequent toggling, consider CSS visibility instead.',
          'Show destruye y re-crea el árbol de children cuando la condición cambia. Para cambios frecuentes, considera usar visibilidad CSS en su lugar.'
        )}
      </div>

      <h2>API</h2>
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>{lang('Description', 'Descripción')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>when</code></td>
            <td><code>{'(() => T) | T'}</code></td>
            <td>{lang('Condition to evaluate', 'Condición a evaluar')}</td>
          </tr>
          <tr>
            <td><code>fallback</code></td>
            <td><code>JSXChild</code></td>
            <td>{lang('Rendered when when is falsy (optional)', 'Renderizado cuando when es falsy (opcional)')}</td>
          </tr>
          <tr>
            <td><code>children</code></td>
            <td><code>JSXChild</code></td>
            <td>{lang('Rendered when when is truthy', 'Renderizado cuando when es truthy')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
