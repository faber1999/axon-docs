import type { JSXChild } from '@faber1999/axon.js'
import { NavPager } from './NavPager'
import { Sidebar } from './Sidebar'

interface DocLayoutProps {
  children?: JSXChild
}

export function DocLayout({ children }: DocLayoutProps) {
  return (
    <div class="doc-container">
      <Sidebar />
      <main class="doc-main mx-auto">
        <article class="doc-article">{children}</article>
        <NavPager />
      </main>
    </div>
  )
}
