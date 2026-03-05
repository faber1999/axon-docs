import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const DYNAMIC_BASIC = `import { Dynamic, signal } from '@faber1999/axon.js'

function Home() { return <h1>Home</h1> }
function About() { return <h1>About</h1> }

const [view, setView] = signal(Home)

// Renders whichever component is in the signal
<Dynamic component={view} />`

const DYNAMIC_TABS = `function Tabs() {
  const tabs = { overview: Overview, settings: Settings, billing: Billing }
  const [active, setActive] = signal<keyof typeof tabs>('overview')

  return (
    <div>
      <nav>
        {Object.keys(tabs).map((key) => (
          <button onClick={() => setActive(key as keyof typeof tabs)}>
            {key}
          </button>
        ))}
      </nav>
      <Dynamic component={() => tabs[active()]} />
    </div>
  )
}`

const PORTAL_BASIC = `import { Portal } from '@faber1999/axon.js'

function Modal({ onClose }: { onClose: () => void }) {
  return (
    // Renders into document.body, outside the component tree
    <Portal mount={document.body}>
      <div class="modal-backdrop" onClick={onClose}>
        <div class="modal" onClick={(e) => e.stopPropagation()}>
          <p>Modal content</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </Portal>
  )
}`

const PORTAL_TOOLTIP = `function Tooltip({ text, children }: { text: string; children?: JSXChild }) {
  const [visible, setVisible] = signal(false)

  return (
    <span
      onMouseenter={() => setVisible(true)}
      onMouseleave={() => setVisible(false)}
    >
      {children}
      <Show when={visible}>
        <Portal mount={document.body}>
          <div class="tooltip">{text}</div>
        </Portal>
      </Show>
    </span>
  )
}`

export default function DynamicPortal() {
  return (
    <div>
      <h1>Dynamic & Portal</h1>
      <p class="doc-lead">
        {lang(
          'Dynamic renders a component that can change at runtime. Portal renders children into a different DOM node, outside the current tree.',
          'Dynamic renderiza un componente que puede cambiar en tiempo de ejecución. Portal renderiza children en un nodo del DOM diferente, fuera del árbol actual.'
        )}
      </p>

      <h2>Dynamic</h2>
      <p>
        {lang(
          'Use Dynamic when the component itself needs to switch based on state. Pass a signal getter or a plain component function to the component prop.',
          'Usa Dynamic cuando el componente en sí necesita cambiar según el estado. Pasa un getter de señal o una función componente simple al prop component.'
        )}
      </p>
      <CodeBlock code={DYNAMIC_BASIC} />

      <h3>{lang('Tab panels', 'Paneles con pestañas')}</h3>
      <CodeBlock code={DYNAMIC_TABS} />

      <div class="doc-note">
        {lang(
          'Dynamic detects zero-argument functions as getter functions. A named component function like Home has length > 0 (it takes props), so pass a wrapper: component={() => tabs[active()]}.',
          'Dynamic detecta funciones sin argumentos como getters. Una función componente como Home tiene length > 0 (recibe props), por eso pasa un wrapper: component={() => tabs[active()]}.'
        )}
      </div>

      <h2>Portal</h2>
      <p>
        {lang(
          'Portal renders children directly into a target DOM element, bypassing the normal component tree. This is essential for modals, tooltips, and dropdowns that need to escape z-index stacking contexts.',
          'Portal renderiza children directamente en un elemento del DOM objetivo, ignorando el árbol de componentes normal. Es esencial para modales, tooltips y dropdowns que necesitan escapar de los contextos de apilamiento z-index.'
        )}
      </p>
      <CodeBlock code={PORTAL_BASIC} />

      <h3>Tooltip {lang('with Portal', 'con Portal')}</h3>
      <CodeBlock code={PORTAL_TOOLTIP} />

      <h2>API</h2>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Prop</th>
            <th>{lang('Description', 'Descripción')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dynamic</td>
            <td><code>component</code></td>
            <td>{lang('Component function or getter that returns one', 'Función componente o getter que retorna una')}</td>
          </tr>
          <tr>
            <td>Portal</td>
            <td><code>mount</code></td>
            <td>{lang('Target DOM Element to render children into', 'Elemento del DOM destino donde se renderizan los children')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
