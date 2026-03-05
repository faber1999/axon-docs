import type { JSXChild } from '@faber1999/axon.js'

interface PublicLayoutProps {
  children?: JSXChild
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div class="space-y-6">
      <div class="flex items-center gap-3 px-4 py-2.5 bg-violet-950/50 border border-violet-800/50 rounded-lg">
        <span class="text-violet-400 text-sm">🔒</span>
        <span class="text-violet-300 text-sm font-medium">Public area</span>
      </div>
      <div>{children}</div>
    </div>
  )
}
