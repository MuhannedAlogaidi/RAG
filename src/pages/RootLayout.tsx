import { Link, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
            <li>
              <Link to="/auth/register">Register</Link>
            </li>
            <li>
              <Link to="/app/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/app/profile">Profile</Link>
            </li>
            <li>
              <Link to="/app/settings">Settings</Link>
            </li>
            <li>
              <Link to="/admin/users">Admin Users</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
