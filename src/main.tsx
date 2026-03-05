import { createApp, createRouter, RouterView } from '@faber1999/axon.js'

import { routes } from './router/routes.ts'
import { Navbar } from './components/Navbar'
import './stores/themeStore'  // initialize theme effect on startup
import './style.css'

createRouter(routes, { viewTransitions: true })

function App() {
  return (
    <div class="app">
      <Navbar />
      <RouterView />
    </div>
  )
}

createApp(App).mount('#app')
