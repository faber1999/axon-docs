import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const BASIC = `import { signal, effect } from '@faber1999/axon.js'

const [count, setCount] = signal(0)

effect(() => {
  console.log('count is', count())
})
// Logs: "count is 0" immediately

setCount(5)
// Logs: "count is 5"`

const MULTI_DEPS = `const [a, setA] = signal(1)
const [b, setB] = signal(2)

effect(() => {
  // Subscribes to both a and b
  console.log(a() + b())
})

setA(10) // re-runs: logs 12
setB(20) // re-runs: logs 30`

const CLEANUP = `import { signal, effect, onCleanup } from '@faber1999/axon.js'

const [interval, setInterval_] = signal(1000)

effect(() => {
  const ms = interval()
  const id = setInterval(() => console.log('tick'), ms)

  // Cleanup runs before the effect re-runs or when disposed
  onCleanup(() => clearInterval(id))
})`

const DOM_UPDATE = `function Clock() {
  const [time, setTime] = signal(new Date().toLocaleTimeString())

  onMount(() => {
    const id = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    )
    onCleanup(() => clearInterval(id))
  })

  // Only this text node updates — nothing else re-renders
  return <p>Time: {time}</p>
}`

export default function Effects() {
  return (
    <div>
      <h1>{lang('Effects', 'Efectos')}</h1>
      <p class="doc-lead">
        {lang(
          'An effect is a function that runs immediately and re-runs automatically whenever the signals it reads change.',
          'Un efecto es una función que se ejecuta inmediatamente y se re-ejecuta automáticamente cada vez que las señales que lee cambian.'
        )}
      </p>

      <h2>{lang('Basic usage', 'Uso básico')}</h2>
      <p>
        {lang(
          'effect() runs the callback immediately, tracks which signals are read, and re-runs when any of them change.',
          'effect() ejecuta el callback inmediatamente, rastrea qué señales se leen, y se re-ejecuta cuando alguna de ellas cambia.'
        )}
      </p>
      <CodeBlock code={BASIC} lang="ts" />

      <h2>{lang('Multiple dependencies', 'Múltiples dependencias')}</h2>
      <p>
        {lang(
          'Effects track every signal read during their execution. No explicit dependency array needed.',
          'Los efectos rastrean cada señal leída durante su ejecución. No se necesita un array de dependencias explícito.'
        )}
      </p>
      <CodeBlock code={MULTI_DEPS} lang="ts" />

      <h2>{lang('Cleanup', 'Limpieza')}</h2>
      <p>
        {lang(
          'Use onCleanup() inside an effect to register a teardown function. It runs before the effect re-executes and when the owner is disposed.',
          'Usa onCleanup() dentro de un efecto para registrar una función de limpieza. Se ejecuta antes de que el efecto se re-ejecute y cuando el owner es destruido.'
        )}
      </p>
      <CodeBlock code={CLEANUP} lang="ts" />

      <h2>{lang('Effects and the DOM', 'Efectos y el DOM')}</h2>
      <p>
        {lang(
          'Inside components, the JSX runtime uses effects under the hood to keep DOM nodes in sync with signals. You rarely need to write effects manually for DOM updates.',
          'Dentro de los componentes, el runtime de JSX usa efectos internamente para mantener los nodos del DOM sincronizados con las señales. Raramente necesitas escribir efectos manualmente para actualizaciones del DOM.'
        )}
      </p>
      <CodeBlock code={DOM_UPDATE} />

      <div class="doc-note">
        {lang(
          'Effects created inside a component are automatically disposed when the component is removed from the DOM. Effects created at module level run for the lifetime of the app.',
          'Los efectos creados dentro de un componente se destruyen automáticamente cuando el componente se elimina del DOM. Los efectos creados a nivel de módulo se ejecutan durante toda la vida de la app.'
        )}
      </div>

      <h2>{lang('How tracking works', 'Cómo funciona el seguimiento')}</h2>
      <p>
        {lang(
          'When an effect runs, axon.js pushes it onto a global tracking stack. Any signal read during that time registers the current effect as a subscriber. When the signal changes, it notifies all its subscribers to re-run.',
          'Cuando un efecto se ejecuta, axon.js lo coloca en una pila de seguimiento global. Cualquier señal leída durante ese tiempo registra el efecto actual como suscriptor. Cuando la señal cambia, notifica a todos sus suscriptores para que se re-ejecuten.'
        )}
      </p>
    </div>
  )
}
