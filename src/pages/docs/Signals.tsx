import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const BASIC = `import { signal } from '@faber1999/axon.js'

const [count, setCount] = signal(0)

count()        // read → 0
setCount(1)    // write → 1
setCount((c) => c + 1)  // update with function → 2`

const IN_COMPONENT = `function Counter() {
  const [count, setCount] = signal(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
    </div>
  )
}`

const REACTIVE_ATTR = `const [active, setActive] = signal(false)

// The class attribute updates whenever active() changes
<div class={\`btn \${active() ? 'btn-active' : ''}\`} />`

const MULTIPLE = `const [firstName, setFirstName] = signal('John')
const [lastName, setLastName] = signal('Doe')
const [age, setAge] = signal(30)`

export default function Signals() {
  return (
    <div>
      <h1>{lang('Signals', 'Señales')}</h1>
      <p class="doc-lead">
        {lang(
          'A signal is a reactive primitive that holds a value. When the value changes, anything that depends on it updates automatically.',
          'Una señal es una primitiva reactiva que almacena un valor. Cuando el valor cambia, todo lo que depende de ella se actualiza automáticamente.'
        )}
      </p>

      <h2>{lang('Creating a signal', 'Crear una señal')}</h2>
      <p>
        {lang(
          'signal() returns a [getter, setter] tuple. The getter is a function — calling it reads the current value and registers a dependency in the active tracking context.',
          'signal() retorna una tupla [getter, setter]. El getter es una función — llamarla lee el valor actual y registra una dependencia en el contexto de seguimiento activo.'
        )}
      </p>
      <CodeBlock code={BASIC} lang="ts" />

      <h2>{lang('Using signals in JSX', 'Usar señales en JSX')}</h2>
      <p>
        {lang(
          'Pass the getter function as a child or attribute. The Vite plugin and the JSX runtime handle reactive updates automatically — no wrappers needed.',
          'Pasa la función getter como child o atributo. El plugin de Vite y el runtime de JSX manejan las actualizaciones reactivas automáticamente — sin envoltorios adicionales.'
        )}
      </p>
      <CodeBlock code={IN_COMPONENT} />

      <div class="doc-note">
        {lang(
          'Notice {count} without parentheses — passing the getter function itself (not calling it) lets the JSX runtime track it as a reactive dependency.',
          'Nota {count} sin paréntesis — pasar la función getter en sí (sin llamarla) permite al runtime de JSX rastrearla como dependencia reactiva.'
        )}
      </div>

      <h2>{lang('Reactive attributes', 'Atributos reactivos')}</h2>
      <p>
        {lang(
          'The Vite plugin wraps JSX attribute expressions in arrow functions automatically, making any expression that reads a signal reactive.',
          'El plugin de Vite envuelve las expresiones de atributos JSX en funciones flecha automáticamente, haciendo reactiva cualquier expresión que lea una señal.'
        )}
      </p>
      <CodeBlock code={REACTIVE_ATTR} />

      <h2>{lang('Multiple signals', 'Múltiples señales')}</h2>
      <p>
        {lang(
          'Create as many independent signals as you need. Each one tracks its own subscribers.',
          'Crea tantas señales independientes como necesites. Cada una rastrea sus propios suscriptores.'
        )}
      </p>
      <CodeBlock code={MULTIPLE} lang="ts" />

      <h2>API</h2>
      <table>
        <thead>
          <tr>
            <th>{lang('Call', 'Llamada')}</th>
            <th>{lang('Description', 'Descripción')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>signal(initialValue)</code></td>
            <td>{lang('Creates a signal, returns [getter, setter]', 'Crea una señal, retorna [getter, setter]')}</td>
          </tr>
          <tr>
            <td><code>getter()</code></td>
            <td>{lang('Reads the current value, registers dependency', 'Lee el valor actual, registra dependencia')}</td>
          </tr>
          <tr>
            <td><code>setter(value)</code></td>
            <td>{lang('Sets a new value, notifies subscribers', 'Establece un nuevo valor, notifica suscriptores')}</td>
          </tr>
          <tr>
            <td><code>setter(fn)</code></td>
            <td>{lang('Updates using a function: setter(prev => prev + 1)', 'Actualiza con una función: setter(prev => prev + 1)')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
