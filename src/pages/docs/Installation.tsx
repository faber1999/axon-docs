import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const INSTALL = `npm install @faber1999/axon.js
npm install -D @faber1999/vite-plugin-axon vite typescript`

const VITE_CONFIG = `import { defineConfig } from 'vite'
import axon from '@faber1999/vite-plugin-axon'

export default defineConfig({
  plugins: [axon()],
})`

const TSCONFIG = `{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "noEmit": true,
    "allowImportingTsExtensions": true,
    "strict": true,
    "jsx": "preserve",
    "jsxFactory": "h",
    "jsxFragmentFactory": "Fragment"
  },
  "include": ["src"]
}`

const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My axon.js app</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`

const MAIN = `import { signal, createApp } from '@faber1999/axon.js'

function App() {
  const [count, setCount] = signal(0)
  return (
    <div>
      <h1>Hello axon.js</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  )
}

createApp(App).mount('#app')`

export default function Installation() {
  return (
    <div>
      <h1>{lang('Installation', 'Instalación')}</h1>
      <p class="doc-lead">
        {lang(
          'Get up and running with axon.js in minutes using Vite and TypeScript.',
          'Comienza a usar axon.js en minutos con Vite y TypeScript.'
        )}
      </p>

      <h2>{lang('Prerequisites', 'Requisitos previos')}</h2>
      <ul>
        <li>Node.js 18+</li>
        <li>npm, pnpm {lang('or', 'o')} yarn</li>
      </ul>

      <h2>{lang('Install packages', 'Instalar paquetes')}</h2>
      <CodeBlock code={INSTALL} lang="bash" />

      <h2>{lang('Vite configuration', 'Configuración de Vite')}</h2>
      <p>
        {lang(
          'The Vite plugin handles JSX transformation and enables reactive expressions in JSX attributes automatically.',
          'El plugin de Vite maneja la transformación de JSX y habilita expresiones reactivas en atributos JSX automáticamente.'
        )}
      </p>
      <CodeBlock code={VITE_CONFIG} filename="vite.config.ts" />

      <h2>tsconfig.json</h2>
      <p>
        {lang(
          'The three jsx* options are the only ones specific to axon.js. The rest is standard Vite + TypeScript configuration.',
          'Las tres opciones jsx* son las únicas específicas de axon.js. El resto es configuración estándar de Vite + TypeScript.'
        )}
      </p>
      <CodeBlock code={TSCONFIG} filename="tsconfig.json" lang="json" />

      <h2>index.html</h2>
      <CodeBlock code={INDEX_HTML} filename="index.html" lang="html" />

      <h2>{lang('Your first component', 'Tu primer componente')}</h2>
      <CodeBlock code={MAIN} filename="src/main.tsx" />

      <p>
        {lang(
          'Run the dev server with ',
          'Ejecuta el servidor de desarrollo con '
        )}
        <code>vite</code>
        {lang(' and open ', ' y abre ')}
        <code>http://localhost:5173</code>.
      </p>

      <div class="doc-note">
        {lang(
          'The Vite plugin auto-imports h and Fragment so you never need to import them manually in .tsx files.',
          'El plugin de Vite importa automáticamente h y Fragment, así que nunca necesitas importarlos manualmente en archivos .tsx.'
        )}
      </div>
    </div>
  )
}
