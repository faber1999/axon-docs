import { Link, Show } from '@faber1999/axon.js'
import { navGroups } from '../router/nav'
import { t } from '../i18n'
import { sidebarOpen, setSidebarOpen } from './Navbar'

export function Sidebar() {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        class={() => `sidebar-overlay${sidebarOpen() ? ' open' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside class={() => `sidebar${sidebarOpen() ? ' open' : ''}`}>
        {navGroups.map((group) => (
          <div class="sidebar-group">
            <p class="sidebar-group-label">{t(group.groupKey)}</p>
            <ul class="sidebar-group-list">
              {group.items.map((item) => (
                <li>
                  <Link
                    href={item.path}
                    class="sidebar-link"
                    activeClass="sidebar-link--active"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span>{t(item.labelKey)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </>
  )
}
