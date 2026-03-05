import { useNavigate } from '@faber1999/axon.js'
import { CodeBlock } from '../components/CodeBlock'
import { Logo } from '../components/Logo'
import { t } from '../i18n'

const COUNTER_EXAMPLE = `import { signal, createApp } from '@faber1999/axon.js'

function Counter() {
  const [count, setCount] = signal(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  )
}

createApp(Counter).mount('#app')`

const features = [
  { icon: '⚡', titleKey: 'home.feature1.title' as const, descKey: 'home.feature1.desc' as const },
  { icon: '0️⃣', titleKey: 'home.feature2.title' as const, descKey: 'home.feature2.desc' as const },
  { icon: '✦', titleKey: 'home.feature3.title' as const, descKey: 'home.feature3.desc' as const },
  { icon: '📦', titleKey: 'home.feature4.title' as const, descKey: 'home.feature4.desc' as const }
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div class="home">
      <section class="home-hero">
        <Logo size={56} />
        <br />
        <span class="home-eyebrow">{t('home.eyebrow')}</span>

        <h1 class="home-title">
          <span class="home-title-accent">axon.js</span>
          {' — '}
          {t('home.tagline')}
        </h1>

        <p class="home-desc">{t('home.description')}</p>

        <div class="home-actions">
          <button class="btn-primary" onClick={() => navigate('/docs/introduction')}>
            {t('ui.getStarted')}
          </button>
          <a
            href="https://github.com/faber1999/axon.js"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary"
          >
            {t('ui.viewOnGithub')}
          </a>
        </div>
      </section>

      <section class="home-features">
        {features.map((f) => (
          <div class="feature-card">
            <div class="feature-icon">{f.icon}</div>
            <p class="feature-title">{t(f.titleKey)}</p>
            <p class="feature-desc">{t(f.descKey)}</p>
          </div>
        ))}
      </section>

      <section class="home-quickstart">
        <h2>{t('home.quickstart')}</h2>
        <CodeBlock code={COUNTER_EXAMPLE} lang="tsx" />
      </section>
    </div>
  )
}
