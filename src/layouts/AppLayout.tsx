// Root layout
import { Outlet, Link } from 'react-router'

export function AppLayout() {
  return (
    <>
      <header style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/">Home</Link>
          <Link to="/apply">Apply</Link>
        </nav>
      </header>

      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </>
  )
}
