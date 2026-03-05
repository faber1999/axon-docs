import { computed, Show } from '@faber1999/axon.js'
import { useRouter, useNavigate } from '@faber1999/axon.js'
import { getPrevNext } from '../router/nav'
import { t } from '../i18n'

export function NavPager() {
  const router = useRouter()
  const navigate = useNavigate()

  const prevItem = computed(() => getPrevNext(router.pathname()).prev)
  const nextItem = computed(() => getPrevNext(router.pathname()).next)

  return (
    <div class="nav-pager">
      <div class="pager-side pager-side--left">
        <Show when={() => prevItem() !== null}>
          <button
            class="pager-btn pager-prev"
            onClick={() => {
              const p = prevItem()
              if (p) navigate(p.path)
            }}
          >
            <span class="pager-arrow">←</span>
            <div class="pager-text">
              <span class="pager-hint">{t('ui.previous')}</span>
              <span class="pager-title">
                {() => {
                  const p = prevItem()
                  return p ? t(p.labelKey)() : ''
                }}
              </span>
            </div>
          </button>
        </Show>
      </div>

      <div class="pager-side pager-side--right">
        <Show when={() => nextItem() !== null}>
          <button
            class="pager-btn pager-next"
            onClick={() => {
              const n = nextItem()
              if (n) navigate(n.path)
            }}
          >
            <div class="pager-text">
              <span class="pager-hint">{t('ui.next')}</span>
              <span class="pager-title">
                {() => {
                  const n = nextItem()
                  return n ? t(n.labelKey)() : ''
                }}
              </span>
            </div>
            <span class="pager-arrow">→</span>
          </button>
        </Show>
      </div>
    </div>
  )
}
