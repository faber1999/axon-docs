import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const EFFECT_STACK = `// Simplified pseudocode of the tracking mechanism
const effectStack: Effect[] = []

function signal(initial) {
  let value = initial
  const subscribers = new Set()

  const getter = () => {
    // If an effect is running, subscribe it
    const current = effectStack[effectStack.length - 1]
    if (current) subscribers.add(current)
    return value
  }

  const setter = (next) => {
    value = typeof next === 'function' ? next(value) : next
    // Notify all subscribers
    subscribers.forEach(e => e.run())
  }

  return [getter, setter]
}

function effect(fn) {
  const e = { run: () => {
    effectStack.push(e)
    fn()   // reads signals → they subscribe e
    effectStack.pop()
  }}
  e.run()  // run immediately
}`

const DOM_UPDATE = `// When a signal is used as a JSX child, h() creates a reactive text node:
function appendChild(parent, child) {
  if (typeof child === 'function') {
    const marker = document.createComment('')
    parent.appendChild(marker)

    effect(() => {
      // Re-runs when any signal read inside child() changes
      const value = child()
      // Only this text node updates — nothing else in the tree
      marker.replaceWith(document.createTextNode(String(value)))
    })
  }
}`

const OWNER = `// Every component runs inside an "owner" context
// that tracks its effects and cleanup functions.
// When the component is removed (route change, Show toggle, etc.),
// disposeOwner() runs all cleanup functions and stops all effects.

function runWithOwner(Component, props) {
  const owner = { _onMount: [], _onCleanup: [], _children: [] }
  currentOwner = owner
  const result = Component(props)
  currentOwner = null
  return [result, owner]
}`

export default function HowItWorks() {
  return (
    <div>
      <h1>{lang('How It Works', 'Cómo funciona')}</h1>
      <p class="doc-lead">
        {lang(
          'A look under the hood at axon.js\'s fine-grained reactivity, JSX runtime, and component lifecycle.',
          'Un vistazo al interior de la reactividad de grano fino, el runtime de JSX y el ciclo de vida de componentes de axon.js.'
        )}
      </p>

      <h2>{lang('Fine-grained reactivity', 'Reactividad de grano fino')}</h2>
      <p>
        {lang(
          'axon.js uses a global effect stack to automatically track signal dependencies. When an effect runs, it pushes itself onto the stack. Any signal read during that run sees the current effect and adds it to its subscriber set. When the signal changes, it notifies only those subscribers.',
          'axon.js usa una pila de efectos global para rastrear automáticamente las dependencias de señales. Cuando un efecto se ejecuta, se coloca en la pila. Cualquier señal leída durante esa ejecución ve el efecto actual y lo agrega a su conjunto de suscriptores. Cuando la señal cambia, notifica solo a esos suscriptores.'
        )}
      </p>
      <CodeBlock code={EFFECT_STACK} lang="ts" />

      <h2>{lang('Reactive DOM updates', 'Actualizaciones reactivas del DOM')}</h2>
      <p>
        {lang(
          'When a getter function is passed as a JSX child, the h() factory wraps it in an effect. The effect creates a text node placeholder and replaces it whenever the signal changes. Only that one text node updates — not the component, not its siblings.',
          'Cuando se pasa una función getter como child de JSX, la función h() la envuelve en un efecto. El efecto crea un marcador de nodo de texto y lo reemplaza cada vez que la señal cambia. Solo ese nodo de texto se actualiza — no el componente, no sus hermanos.'
        )}
      </p>
      <CodeBlock code={DOM_UPDATE} lang="ts" />

      <h2>{lang('Component owners', 'Owners de componentes')}</h2>
      <p>
        {lang(
          'Every component runs inside an owner — a plain object that collects the component\'s effects, mount callbacks, and cleanup functions. When the component is removed (route change, Show toggle, etc.), disposeOwner() stops all effects and runs all cleanup functions, preventing memory leaks.',
          'Cada componente se ejecuta dentro de un owner — un objeto simple que recopila los efectos del componente, los callbacks de mount y las funciones de cleanup. Cuando el componente es eliminado (cambio de ruta, toggle de Show, etc.), disposeOwner() detiene todos los efectos y ejecuta todas las funciones de cleanup, evitando fugas de memoria.'
        )}
      </p>
      <CodeBlock code={OWNER} lang="ts" />

      <h2>{lang('No virtual DOM', 'Sin virtual DOM')}</h2>
      <p>
        {lang(
          'Traditional frameworks re-render a component tree, diff it against the previous render, and apply the diff. axon.js skips all of that. Components run once to build real DOM nodes. After that, only effect callbacks re-execute, and each effect touches only the specific DOM node it owns.',
          'Los frameworks tradicionales re-renderizan un árbol de componentes, lo comparan con el render anterior y aplican las diferencias. axon.js omite todo eso. Los componentes se ejecutan una vez para construir nodos del DOM reales. Después, solo los callbacks de efecto se re-ejecutan, y cada efecto toca solo el nodo del DOM específico que posee.'
        )}
      </p>

      <h2>{lang('Want to go deeper?', '¿Quieres profundizar más?')}</h2>
      <p>
        {lang(
          'The full internals documentation covers every layer of the framework in detail: the reactivity engine, JSX runtime, component lifecycle, router, and store.',
          'La documentación completa de internos cubre cada capa del framework en detalle: el motor de reactividad, el runtime de JSX, el ciclo de vida de componentes, el router y el store.'
        )}
      </p>
      <p>
        {lang('See ', 'Ver ')}
        <a
          href="https://github.com/faber1999/axon.js/blob/main/INTERNALS.md"
          target="_blank"
          rel="noopener noreferrer"
          style="color:var(--color-primary)"
        >
          INTERNALS.md
        </a>
        {lang(' on GitHub.', ' en GitHub.')}
      </p>
    </div>
  )
}
