import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const BATCH = `import { signal, effect, batch } from '@faber1999/axon.js'

const [x, setX] = signal(0)
const [y, setY] = signal(0)

effect(() => console.log(x(), y()))

// Without batch: effect runs twice
setX(1) // logs "1 0"
setY(1) // logs "1 1"

// With batch: effect runs once
batch(() => {
  setX(2)
  setY(2)
})
// logs "2 2" — one notification`

const UNTRACK = `import { signal, effect, untrack } from '@faber1999/axon.js'

const [a, setA] = signal(0)
const [b, setB] = signal(0)

effect(() => {
  const aVal = a()                  // subscribes to a
  const bVal = untrack(() => b())   // does NOT subscribe to b

  console.log(aVal, bVal)
})

setA(1) // re-runs the effect
setB(1) // does NOT re-run (b was untracked)`

const REAL_WORLD_BATCH = `function updatePosition(x: number, y: number) {
  batch(() => {
    setX(x)
    setY(y)
    setTimestamp(Date.now())
  })
  // Any effect that reads x, y, or timestamp fires once
}`

const REAL_WORLD_UNTRACK = `const [items, setItems] = signal<string[]>([])
const [log, setLog] = signal<string[]>([])

effect(() => {
  const list = items()  // track items changes

  // Read log without subscribing — we only want to react to items
  const currentLog = untrack(() => log())
  setLog([...currentLog, \`Items updated: \${list.length}\`])
})`

export default function BatchUntrack() {
  return (
    <div>
      <h1>Batch & Untrack</h1>
      <p class="doc-lead">
        {lang(
          'Two utilities for fine-tuning reactivity: batch() groups multiple signal updates into a single notification, and untrack() reads a signal without creating a subscription.',
          'Dos utilidades para ajustar la reactividad: batch() agrupa múltiples actualizaciones de señales en una sola notificación, y untrack() lee una señal sin crear una suscripción.'
        )}
      </p>

      <h2>batch()</h2>
      <p>
        {lang(
          'When you update multiple signals in sequence, each update notifies subscribers immediately. batch() defers notifications until all updates are done, so effects and computeds run only once.',
          'Cuando actualizas múltiples señales en secuencia, cada actualización notifica a los suscriptores inmediatamente. batch() pospone las notificaciones hasta que todas las actualizaciones estén completas, por lo que los efectos y computeds se ejecutan solo una vez.'
        )}
      </p>
      <CodeBlock code={BATCH} lang="ts" />

      <CodeBlock code={REAL_WORLD_BATCH} lang="ts" />

      <h2>untrack()</h2>
      <p>
        {lang(
          'Reads one or more signals inside an effect without registering them as dependencies. The effect will not re-run when those signals change.',
          'Lee una o más señales dentro de un efecto sin registrarlas como dependencias. El efecto no se re-ejecutará cuando esas señales cambien.'
        )}
      </p>
      <CodeBlock code={UNTRACK} lang="ts" />

      <CodeBlock code={REAL_WORLD_UNTRACK} lang="ts" />

      <h2>{lang('When to use each', 'Cuándo usar cada uno')}</h2>
      <table>
        <thead>
          <tr>
            <th>{lang('Utility', 'Utilidad')}</th>
            <th>{lang('Use when...', 'Usar cuando...')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>batch()</code></td>
            <td>
              {lang(
                'You update multiple signals at once and want a single re-render',
                'Actualizas múltiples señales a la vez y quieres un solo re-render'
              )}
            </td>
          </tr>
          <tr>
            <td><code>untrack()</code></td>
            <td>
              {lang(
                'You need to read a signal\'s value inside an effect without triggering a re-run when it changes',
                'Necesitas leer el valor de una señal dentro de un efecto sin disparar una re-ejecución cuando cambia'
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
