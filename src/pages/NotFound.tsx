import { useNavigate } from '@faber1999/axon.js'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;text-align:center;gap:16px;padding:40px 24px">
      <span style="font-size:5rem;font-weight:900;color:var(--color-primary);line-height:1">404</span>
      <h1 style="font-size:1.5rem;font-weight:700;color:var(--color-text);margin:0">Page not found</h1>
      <p style="color:var(--color-text-muted);margin:0;font-size:0.95rem">
        The route you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate('/')}
        class="btn-primary"
        style="margin-top:8px"
      >
        Go home
      </button>
    </div>
  )
}
