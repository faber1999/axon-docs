interface CodeBlockProps {
  code: string
  lang?: string
  filename?: string
}

export function CodeBlock({ code, lang = 'tsx', filename }: CodeBlockProps) {
  return (
    <div class="code-block-wrapper">
      <div class="code-block-header">
        {filename
          ? <span class="code-block-filename">{filename}</span>
          : <span class="code-block-lang">{lang}</span>
        }
      </div>
      <pre class="code-block-pre"><code>{code}</code></pre>
    </div>
  )
}
