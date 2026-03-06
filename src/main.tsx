import { createApp, createRouter, effect, RouterView, useRouter } from '@faber1999/axon.js'

import { Navbar } from './components/Navbar'
import { routes } from './router/routes.ts'
import './stores/themeStore' // initialize theme effect on startup
import './style.css'

createRouter(routes, { viewTransitions: true })

function App() {
  const router = useRouter()

  effect(() => {
    router.pathname()
    window.scrollTo(0, 0)
  })

  return (
    <div class="app">
      <Navbar />
      <RouterView />
    </div>
  )
}

createApp(App).mount('#app')
