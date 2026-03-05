import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const H_FUNCTION = `// JSX compiles to h() calls:
<div class="box">Hello</div>
// becomes:
h('div', { class: 'box' }, 'Hello')`

const COMPONENT_FN = `// A component is just a function that returns DOM nodes
function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>
}

// Use it in JSX
<Greeting name="World" />`

const REACTIVE_PROPS = `const [name, setName] = signal('World')

// Static prop — set once
<Greeting name="Alice" />

// Reactive prop — updates when the signal changes
// The Vite plugin wraps the expression automatically
<Greeting name={name()} />`

const CHILDREN = `interface CardProps {
  title: string
  children?: JSXChild
}

function Card({ title, children }: CardProps) {
  return (
    <div class="card">
      <h2>{title}</h2>
      <div class="card-body">{children}</div>
    </div>
  )
}

// Usage:
<Card title="My Card">
  <p>Content goes here</p>
</Card>`

const CREATE_APP = `import { createApp } from '@faber1999/axon.js'

function App() {
  return <h1>Hello!</h1>
}

// Mount to a DOM element
createApp(App).mount('#app')

// Or pass a DOM element directly
createApp(App).mount(document.getElementById('root')!)`

export default function JsxComponents() {
  return (
    <div>
      <h1>{lang('JSX & Components', 'JSX y Componentes')}</h1>
      <p class="doc-lead">
        {lang(
          'axon.js uses JSX with a custom runtime. Components are plain functions — no classes, no hooks rules, no special lifecycle decorators.',
          'axon.js usa JSX con un runtime personalizado. Los componentes son funciones simples — sin clases, sin reglas de hooks, sin decoradores de ciclo de vida especiales.'
        )}
      </p>

      <h2>{lang('The h() factory', 'La función h()')}</h2>
      <p>
        {lang(
          'JSX compiles to calls of the h() function (configured via jsxFactory in tsconfig). The Vite plugin handles this automatically — you never call h() directly.',
          'JSX compila a llamadas de la función h() (configurada via jsxFactory en tsconfig). El plugin de Vite lo maneja automáticamente — nunca llamas h() directamente.'
        )}
      </p>
      <CodeBlock code={H_FUNCTION} lang="ts" />

      <div class="doc-note">
        {lang(
          'h() and Fragment are auto-imported by the Vite plugin in .tsx files. You do not need explicit imports.',
          'h() y Fragment son auto-importados por el plugin de Vite en archivos .tsx. No necesitas imports explícitos.'
        )}
      </div>

      <h2>{lang('Component functions', 'Funciones componente')}</h2>
      <p>
        {lang(
          'A component is a function that receives props and returns DOM nodes. It runs exactly once when mounted.',
          'Un componente es una función que recibe props y retorna nodos del DOM. Se ejecuta exactamente una vez al montarse.'
        )}
      </p>
      <CodeBlock code={COMPONENT_FN} />

      <h2>{lang('Reactive props', 'Props reactivos')}</h2>
      <p>
        {lang(
          'Props are passed as a plain object. To make a prop reactive, pass a signal getter — the Vite plugin wraps JSX attribute expressions automatically.',
          'Los props se pasan como un objeto simple. Para hacer un prop reactivo, pasa un getter de señal — el plugin de Vite envuelve las expresiones de atributos JSX automáticamente.'
        )}
      </p>
      <CodeBlock code={REACTIVE_PROPS} />

      <h2>Children</h2>
      <p>
        {lang(
          'Children are passed via the children prop. Import JSXChild from axon.js for the type.',
          'Los children se pasan a través del prop children. Importa JSXChild de axon.js para el tipo.'
        )}
      </p>
      <CodeBlock code={CHILDREN} />

      <h2>createApp()</h2>
      <p>
        {lang(
          'createApp() bootstraps your root component and mounts it to a DOM element. Call it once at the entry point of your app.',
          'createApp() inicializa tu componente raíz y lo monta en un elemento del DOM. Llámalo una vez en el punto de entrada de tu app.'
        )}
      </p>
      <CodeBlock code={CREATE_APP} />
    </div>
  )
}
