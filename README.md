# axon-docs

Official documentation site for [axon.js](https://github.com/faber1999/axon.js) — a fine-grained reactive frontend framework built from scratch for educational purposes.

Live site: [axon-docs.fabergrajales.dev](https://axon-docs.fabergrajales.dev)

---

## About axon.js

axon.js is a lightweight frontend framework (~6 kB gzip) built to explore and demonstrate how modern reactive UI frameworks work under the hood.

It implements:

- **Fine-grained reactivity** via signals and effects — only the exact DOM nodes that depend on a changed value are updated, no virtual DOM involved.
- **JSX runtime** (`h()`) that treats function children and props as reactive automatically.
- **Client-side router** with lazy loading, layout groups, and navigation guards.
- **Reactive stores** built on `Proxy`.
- **Context API** for dependency injection across the component tree.
- **View Transitions API** integration for animated route changes.

> axon.js was created for educational purposes — to study, experiment with, and understand how reactivity and component lifecycles can be implemented from scratch without relying on existing frameworks.

---

## About this site

This documentation site is itself built with axon.js, serving as a real-world example of the framework in use.

**Features:**

- Bilingual content (English / Spanish)
- Light and dark theme, driven by CSS custom properties
- Syntax-highlighted code blocks with copy button
- Lazy-loaded doc pages with client-side routing
- Prev/Next page navigation

**Stack:**

- [axon.js](https://github.com/faber1999/axon.js) — UI framework
- [Vite](https://vitejs.dev) — build tool
- [highlight.js](https://highlightjs.org) — syntax highlighting
- [Tailwind CSS](https://tailwindcss.com) — utility base (minimal usage)

---

## Local development

```bash
pnpm install
pnpm dev
```

```bash
pnpm build
pnpm preview
```

---

## Author

**Faber Grajales Hincapié** — [@faber1999](https://github.com/faber1999)
