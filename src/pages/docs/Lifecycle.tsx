import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const ON_MOUNT = `import { onMount } from '@faber1999/axon.js'

function MyComponent() {
  onMount(() => {
    // Runs after the component's DOM is inserted into the page
    console.log('mounted!')
  })

  return <div>Hello</div>
}`

const ON_CLEANUP = `import { onMount, onCleanup } from '@faber1999/axon.js'

function Timer() {
  const [seconds, setSeconds] = signal(0)

  onMount(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)

    // Cleanup runs when the component is removed from the DOM
    onCleanup(() => clearInterval(id))
  })

  return <p>Elapsed: {seconds}s</p>
}`

const CLEANUP_IN_EFFECT = `function WatchedInput() {
  const [value, setValue] = signal('')

  // onCleanup can also be called inside effect()
  effect(() => {
    const handler = (e: Event) => setValue((e.target as HTMLInputElement).value)
    window.addEventListener('input', handler)
    onCleanup(() => window.removeEventListener('input', handler))
  })

  return <p>Value: {value}</p>
}`

const ORDER = `function Parent() {
  onMount(() => console.log('parent mounted'))

  return <Child />
}

function Child() {
  onMount(() => console.log('child mounted'))
  return <span>child</span>
}

// Order of logs:
// 1. "child mounted"
// 2. "parent mounted"`

export default function Lifecycle() {
  return (
    <div>
      <h1>{lang('Lifecycle', 'Ciclo de vida')}</h1>
      <p class="doc-lead">
        {lang(
          'axon.js provides two lifecycle hooks: onMount() runs after the DOM is inserted, and onCleanup() runs before the component is removed.',
          'axon.js proporciona dos hooks de ciclo de vida: onMount() se ejecuta después de que el DOM es insertado, y onCleanup() se ejecuta antes de que el componente sea eliminado.'
        )}
      </p>

      <h2>onMount()</h2>
      <p>
        {lang(
          'Registers a callback that runs after the component\'s DOM nodes are inserted into the document. Use it for DOM measurements, third-party library initialization, or any code that requires the element to be in the page.',
          'Registra un callback que se ejecuta después de que los nodos del DOM del componente son insertados en el documento. Úsalo para mediciones del DOM, inicialización de librerías de terceros, o cualquier código que requiera que el elemento esté en la página.'
        )}
      </p>
      <CodeBlock code={ON_MOUNT} />

      <h2>onCleanup()</h2>
      <p>
        {lang(
          'Registers a teardown function. When called inside onMount(), it runs when the component is removed. When called inside effect(), it runs before the effect re-executes.',
          'Registra una función de limpieza. Cuando se llama dentro de onMount(), se ejecuta cuando el componente es eliminado. Cuando se llama dentro de effect(), se ejecuta antes de que el efecto se re-ejecute.'
        )}
      </p>
      <CodeBlock code={ON_CLEANUP} />

      <h2>{lang('Cleanup inside effects', 'Cleanup dentro de efectos')}</h2>
      <CodeBlock code={CLEANUP_IN_EFFECT} />

      <h2>{lang('Execution order', 'Orden de ejecución')}</h2>
      <p>
        {lang(
          'Mount callbacks run bottom-up: children mount before parents.',
          'Los callbacks de mount se ejecutan de abajo hacia arriba: los children se montan antes que los parents.'
        )}
      </p>
      <CodeBlock code={ORDER} />

      <div class="doc-note">
        {lang(
          'onMount() and onCleanup() must be called synchronously during component setup — not inside async callbacks or timeouts. They are registered on the current component owner.',
          'onMount() y onCleanup() deben llamarse sincrónicamente durante la configuración del componente — no dentro de callbacks asíncronos o timeouts. Se registran en el owner del componente actual.'
        )}
      </div>
    </div>
  )
}
