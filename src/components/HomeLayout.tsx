import type { JSXChild } from '@faber1999/axon.js'
import { Sidebar } from './Sidebar'

interface HomeLayoutProps {
  children?: JSXChild
}

export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div class="doc-container">
      <Sidebar />
      <main class="home-shell">{children}</main>
    </div>
  )
}
