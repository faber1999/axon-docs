import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const COUNTER = `import { signal, createApp } from '@faber1999/axon.js'

function Counter() {
  const [count, setCount] = signal(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  )
}

createApp(Counter).mount('#app')`

export default function Introduction() {
  return (
    <div>
      <h1>{lang('Introduction', 'Introducción')}</h1>
      <p class="doc-lead">
        {lang(
          'axon.js is a fine-grained reactive frontend framework built from scratch. No virtual DOM, no re-renders, zero dependencies.',
          'axon.js es un framework frontend reactivo de grano fino construido desde cero. Sin virtual DOM, sin re-renders, sin dependencias.'
        )}
      </p>

      <h2>{lang('What is axon.js?', '¿Qué es axon.js?')}</h2>
      <p>
        {lang(
          'Most frontend frameworks re-render entire components when state changes. axon.js takes a different approach: components execute exactly once to build their initial DOM. After that, only the specific DOM nodes that depend on a signal update — nothing else.',
          'La mayoría de los frameworks frontend re-renderizan componentes enteros cuando el estado cambia. axon.js toma un enfoque diferente: los componentes se ejecutan exactamente una vez para construir su DOM inicial. Después, solo los nodos exactos del DOM que dependen de una señal se actualizan — nada más.'
        )}
      </p>

      <h2>{lang('Core principles', 'Principios fundamentales')}</h2>
      <ul>
        <li>
          <strong>{lang('Fine-grained reactivity', 'Reactividad de grano fino')}</strong>
          {' — '}
          {lang(
            'Signals track exactly which DOM nodes depend on them. Updates are surgical.',
            'Las señales rastrean exactamente qué nodos del DOM dependen de ellas. Las actualizaciones son precisas.'
          )}
        </li>
        <li>
          <strong>{lang('No virtual DOM', 'Sin virtual DOM')}</strong>
          {' — '}
          {lang(
            'Direct DOM manipulation. No diffing overhead.',
            'Manipulación directa del DOM. Sin sobrecarga de diffing.'
          )}
        </li>
        <li>
          <strong>{lang('Zero dependencies', 'Sin dependencias')}</strong>
          {' — '}
          {lang('The entire runtime is under 10 kB.', 'El runtime completo pesa menos de 10 kB.')}
        </li>
        <li>
          <strong>JSX</strong>
          {' — '}
          {lang(
            'Familiar syntax, powered by a custom Vite plugin.',
            'Sintaxis familiar, impulsada por un plugin de Vite personalizado.'
          )}
        </li>
      </ul>

      <h2>{lang('Quick example', 'Ejemplo rápido')}</h2>
      <p>
        {lang(
          'A reactive counter. The component runs once; only the text node showing the count updates when the signal changes.',
          'Un contador reactivo. El componente se ejecuta una vez; solo el nodo de texto que muestra el conteo se actualiza cuando la señal cambia.'
        )}
      </p>
      <CodeBlock code={COUNTER} lang="tsx" />

      <div class="doc-note">
        {lang(
          'Components run once. Only effect() callbacks re-execute when signals change — and only the DOM nodes those effects control update.',
          'Los componentes se ejecutan una vez. Solo los callbacks de effect() se re-ejecutan cuando las señales cambian — y solo los nodos del DOM que esos efectos controlan se actualizan.'
        )}
      </div>

      <h2>{lang('What\'s included', 'Qué incluye')}</h2>
      <ul>
        <li>{lang('Signals, effects, computed values, batch, untrack', 'Señales, efectos, valores computados, batch, untrack')}</li>
        <li>JSX {lang('runtime with reactive props and children', 'runtime con props y children reactivos')}</li>
        <li>{lang('Component lifecycle: onMount, onCleanup', 'Ciclo de vida de componentes: onMount, onCleanup')}</li>
        <li>{lang('Control flow: Show, For, Dynamic, Portal', 'Control de flujo: Show, For, Dynamic, Portal')}</li>
        <li>{lang('Client-side router with layouts and guards', 'Router del lado del cliente con layouts y guards')}</li>
        <li>{lang('Reactive store', 'Store reactivo')}</li>
        <li>{lang('Context API', 'API de Context')}</li>
        <li>{lang('View Transitions support', 'Soporte para View Transitions')}</li>
      </ul>
    </div>
  )
}
