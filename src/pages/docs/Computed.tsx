import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const BASIC = `import { signal, computed } from '@faber1999/axon.js'

const [count, setCount] = signal(2)

const double = computed(() => count() * 2)
const isEven = computed(() => count() % 2 === 0)

double()  // 4
isEven()  // true

setCount(3)
double()  // 6
isEven()  // false`

const IN_JSX = `function PriceDisplay() {
  const [price, setPrice] = signal(100)
  const [qty, setQty] = signal(3)

  const total = computed(() => price() * qty())
  const tax   = computed(() => total() * 0.21)

  return (
    <div>
      <p>Subtotal: ${'{'}total{'}'}</p>
      <p>Tax (21%): ${'{'}tax{'}'}</p>
      <p>Total: {() => total() + tax()}</p>
    </div>
  )
}`

const CHAINED = `const [celsius, setCelsius] = signal(0)

const fahrenheit = computed(() => celsius() * 9/5 + 32)
const kelvin     = computed(() => celsius() + 273.15)

// Computeds can depend on other computeds
const summary = computed(
  () => \`\${celsius()}°C = \${fahrenheit()}°F = \${kelvin()}K\`
)`

export default function Computed() {
  return (
    <div>
      <h1>{lang('Computed', 'Computed')}</h1>
      <p class="doc-lead">
        {lang(
          'computed() creates a derived reactive value. It re-evaluates only when its signal dependencies change, and caches the result between reads.',
          'computed() crea un valor reactivo derivado. Se re-evalúa solo cuando sus dependencias de señal cambian, y almacena en caché el resultado entre lecturas.'
        )}
      </p>

      <h2>{lang('Basic usage', 'Uso básico')}</h2>
      <p>
        {lang(
          'computed() takes a computation function and returns a getter. The getter is reactive — reading it inside an effect or JSX subscribes to the computed value.',
          'computed() toma una función de cómputo y retorna un getter. El getter es reactivo — leerlo dentro de un efecto o JSX suscribe al valor computado.'
        )}
      </p>
      <CodeBlock code={BASIC} lang="ts" />

      <h2>{lang('Using computed in JSX', 'Usar computed en JSX')}</h2>
      <p>
        {lang(
          'Pass a computed getter as a child — just like a signal getter. Only the nodes that read the computed value will update.',
          'Pasa un getter computado como child — igual que un getter de señal. Solo los nodos que leen el valor computado se actualizarán.'
        )}
      </p>
      <CodeBlock code={IN_JSX} />

      <h2>{lang('Chained computeds', 'Computeds encadenados')}</h2>
      <p>
        {lang(
          'Computeds can depend on other computeds. axon.js tracks the full dependency graph and updates only what needs to change.',
          'Los computeds pueden depender de otros computeds. axon.js rastrea el grafo de dependencias completo y actualiza solo lo que necesita cambiar.'
        )}
      </p>
      <CodeBlock code={CHAINED} lang="ts" />

      <h2>{lang('vs effect()', 'vs effect()')}</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>computed()</th>
            <th>effect()</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{lang('Returns', 'Retorna')}</td>
            <td>{lang('A getter (reactive value)', 'Un getter (valor reactivo)')}</td>
            <td>{lang('Nothing (side effects)', 'Nada (efectos secundarios)')}</td>
          </tr>
          <tr>
            <td>{lang('Use for', 'Usar para')}</td>
            <td>{lang('Derived state', 'Estado derivado')}</td>
            <td>{lang('DOM updates, logging, timers', 'Actualizaciones del DOM, logs, timers')}</td>
          </tr>
          <tr>
            <td>{lang('Caches result?', '¿Almacena en caché?')}</td>
            <td>{lang('Yes — lazy evaluation', 'Sí — evaluación perezosa')}</td>
            <td>{lang('No', 'No')}</td>
          </tr>
        </tbody>
      </table>

      <div class="doc-note">
        {lang(
          'computed() is lazy — the computation only runs when the getter is read. If nothing reads it, it never evaluates.',
          'computed() es perezoso — el cómputo solo se ejecuta cuando se lee el getter. Si nada lo lee, nunca se evalúa.'
        )}
      </div>
    </div>
  )
}
