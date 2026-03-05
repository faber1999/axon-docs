import { CodeBlock } from '../../components/CodeBlock'
import { lang } from '../../i18n'

const ENABLE = `createRouter(routes, { viewTransitions: true })`

const CSS_BASIC = `/* Name the content area you want to animate */
.doc-main {
  view-transition-name: page;
}

/* Define the animations */
@keyframes fade-out { to   { opacity: 0; } }
@keyframes fade-in  { from { opacity: 0; } }

::view-transition-old(page) {
  animation: 120ms ease-out fade-out both;
}
::view-transition-new(page) {
  animation: 180ms ease-in  fade-in  both;
}`

const CSS_SLIDE = `/* Slide transition */
@keyframes slide-out { to   { transform: translateX(-24px); opacity: 0; } }
@keyframes slide-in  { from { transform: translateX( 24px); opacity: 0; } }

::view-transition-old(page) {
  animation: 150ms ease-out slide-out both;
}
::view-transition-new(page) {
  animation: 200ms ease-out slide-in  both;
}`

const ROOT_OVERRIDE = `/* axon.js injects this automatically when viewTransitions: true
   so only named elements animate — the background and nav stay static */
::view-transition-old(root),
::view-transition-new(root) { animation: none; }`

export default function ViewTransitions() {
  return (
    <div>
      <h1>{lang('View Transitions', 'Transiciones de vista')}</h1>
      <p class="doc-lead">
        {lang(
          'axon.js integrates with the browser\'s View Transitions API to animate route changes. Enable it with one option and style the transitions with CSS.',
          'axon.js se integra con la API de View Transitions del navegador para animar los cambios de ruta. Actívala con una opción y estiliza las transiciones con CSS.'
        )}
      </p>

      <h2>{lang('Enable', 'Activar')}</h2>
      <p>
        {lang(
          'Pass { viewTransitions: true } to createRouter(). That\'s all the JavaScript you need.',
          'Pasa { viewTransitions: true } a createRouter(). Eso es todo el JavaScript que necesitas.'
        )}
      </p>
      <CodeBlock code={ENABLE} lang="ts" />

      <h2>{lang('Name your content area', 'Nombrar el área de contenido')}</h2>
      <p>
        {lang(
          'Give view-transition-name to the element that should animate. Elements without a name use the root transition, which axon.js disables by default.',
          'Asigna view-transition-name al elemento que debe animarse. Los elementos sin nombre usan la transición raíz, que axon.js deshabilita por defecto.'
        )}
      </p>
      <CodeBlock code={CSS_BASIC} lang="css" />

      <h2>{lang('Slide transition', 'Transición deslizante')}</h2>
      <CodeBlock code={CSS_SLIDE} lang="css" />

      <h2>{lang('Root override (automatic)', 'Override de root (automático)')}</h2>
      <p>
        {lang(
          'When viewTransitions is enabled, axon.js automatically injects a style that disables the default root animation. This prevents the full-page flash and ensures only your named elements animate.',
          'Cuando viewTransitions está activado, axon.js inyecta automáticamente un estilo que deshabilita la animación root por defecto. Esto evita el parpadeo de pantalla completa y garantiza que solo animen tus elementos nombrados.'
        )}
      </p>
      <CodeBlock code={ROOT_OVERRIDE} lang="css" />

      <div class="doc-note">
        {lang(
          'The View Transitions API is not supported in all browsers. axon.js falls back gracefully — navigation still works, just without the animation.',
          'La API de View Transitions no está disponible en todos los navegadores. axon.js degrada graciosamente — la navegación sigue funcionando, solo sin la animación.'
        )}
      </div>

      <h2>{lang('Tips', 'Consejos')}</h2>
      <ul>
        <li>
          {lang(
            'Only one element per page can have each view-transition-name value.',
            'Solo un elemento por página puede tener cada valor de view-transition-name.'
          )}
        </li>
        <li>
          {lang(
            'Keep animations short (100–250ms) for a snappy feel.',
            'Mantén las animaciones cortas (100–250ms) para una sensación ágil.'
          )}
        </li>
        <li>
          {lang(
            'Use @media (prefers-reduced-motion: reduce) to disable animations for users who prefer it.',
            'Usa @media (prefers-reduced-motion: reduce) para deshabilitar animaciones para usuarios que lo prefieren.'
          )}
        </li>
      </ul>
    </div>
  )
}
