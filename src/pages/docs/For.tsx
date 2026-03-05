import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const BASIC = `import { For, signal } from '@faber1999/axon.js'

const [todos, setTodos] = signal([
  { id: 1, text: 'Buy milk' },
  { id: 2, text: 'Read a book' },
])

<ul>
  <For each={todos}>
    {(todo, index) => (
      <li>{() => index() + 1}. {todo.text}</li>
    )}
  </For>
</ul>`

const REACTIVE_EACH = `// each can be a signal getter (reactive list)
const [items, setItems] = signal<string[]>([])

<For each={items}>
  {(item) => <li>{item}</li>}
</For>

// Adding an item re-renders the list
setItems((prev) => [...prev, 'New item'])`

const STATIC_EACH = `// each can also be a plain array (renders once)
const MENU_ITEMS = ['Home', 'About', 'Contact']

<nav>
  <For each={MENU_ITEMS}>
    {(label) => <a href="#">{label}</a>}
  </For>
</nav>`

const WITH_REMOVAL = `function TodoList() {
  const [todos, setTodos] = signal([
    { id: 1, text: 'Buy milk', done: false },
  ])

  function toggle(id: number) {
    setTodos((list) =>
      list.map((t) => t.id === id ? { ...t, done: !t.done } : t)
    )
  }

  function remove(id: number) {
    setTodos((list) => list.filter((t) => t.id !== id))
  }

  return (
    <ul>
      <For each={todos}>
        {(todo) => (
          <li>
            <span>{todo.text}</span>
            <button onClick={() => toggle(todo.id)}>Toggle</button>
            <button onClick={() => remove(todo.id)}>Remove</button>
          </li>
        )}
      </For>
    </ul>
  )
}`

export default function ForPage() {
  return (
    <div>
      <h1>For</h1>
      <p class="doc-lead">
        {lang(
          'For is the idiomatic way to render lists in axon.js. It renders an item for each element in an array, reactively updating when the array changes.',
          'For es la forma idiomática de renderizar listas en axon.js. Renderiza un elemento por cada ítem de un array, actualizándose reactivamente cuando el array cambia.'
        )}
      </p>

      <h2>{lang('Basic usage', 'Uso básico')}</h2>
      <p>
        {lang(
          'The children of For is a render function that receives the current item and a reactive index getter.',
          'El children de For es una función de renderizado que recibe el ítem actual y un getter de índice reactivo.'
        )}
      </p>
      <CodeBlock code={BASIC} />

      <h2>{lang('Reactive list', 'Lista reactiva')}</h2>
      <p>
        {lang(
          'Pass a signal getter to each. The list re-renders whenever the signal changes.',
          'Pasa un getter de señal a each. La lista se re-renderiza cuando la señal cambia.'
        )}
      </p>
      <CodeBlock code={REACTIVE_EACH} />

      <h2>{lang('Static list', 'Lista estática')}</h2>
      <p>
        {lang(
          'For also accepts a plain array. In this case the list renders once and never updates.',
          'For también acepta un array simple. En ese caso la lista se renderiza una vez y nunca se actualiza.'
        )}
      </p>
      <CodeBlock code={STATIC_EACH} />

      <h2>{lang('Full example with mutations', 'Ejemplo completo con mutaciones')}</h2>
      <CodeBlock code={WITH_REMOVAL} />

      <div class="doc-note">
        {lang(
          'For uses non-keyed reconciliation — when the array changes, it clears and re-renders all items. For large lists with frequent reordering, batch your updates to minimize work.',
          'For usa reconciliación sin claves — cuando el array cambia, limpia y re-renderiza todos los ítems. Para listas grandes con reordenamiento frecuente, agrupa tus actualizaciones con batch() para minimizar el trabajo.'
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
            <td><code>each</code></td>
            <td><code>{'(() => T[]) | T[]'}</code></td>
            <td>{lang('The array to iterate over', 'El array a iterar')}</td>
          </tr>
          <tr>
            <td><code>children</code></td>
            <td><code>{'(item: T, index: () => number) => JSXChild'}</code></td>
            <td>{lang('Render function for each item', 'Función de renderizado para cada ítem')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
