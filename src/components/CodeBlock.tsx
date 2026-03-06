import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import bash from 'highlight.js/lib/languages/bash'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import json from 'highlight.js/lib/languages/json'
import { signal } from '@faber1999/axon.js'

hljs.registerLanguage('ts', typescript)
hljs.registerLanguage('tsx', typescript)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('sh', bash)
hljs.registerLanguage('css', css)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('json', json)

interface CodeBlockProps {
  code: string
  lang?: string
  filename?: string
}

function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function CodeBlock({ code, lang = 'tsx', filename }: CodeBlockProps) {
  const [copied, setCopied] = signal(false)

  let highlighted: string
  try {
    highlighted = hljs.highlight(code, { language: lang }).value
  } catch {
    highlighted = escapeHtml(code)
  }

  function handleCopy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div class="code-block-wrapper">
      <div class="code-block-header">
        {filename
          ? <span class="code-block-filename">{filename}</span>
          : <span class="code-block-lang">{lang}</span>
        }
        <div class="code-block-spacer" />
        <button
          class={() => `code-block-copy${copied() ? ' code-block-copy--ok' : ''}`}
          onClick={handleCopy}
          title="Copy code"
        >
          {() => copied() ? <CheckIcon /> : <CopyIcon />}
          <span>{() => copied() ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <pre class="code-block-pre"><code class="hljs" innerHTML={highlighted} /></pre>
    </div>
  )
}
