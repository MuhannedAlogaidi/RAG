import { Link } from 'react-router-dom'

export default function App() {
  return (
    <main>
      <h1>App Shell</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/applicant">Applicant</Link>
          </li>
        </ul>
      </nav>
      <p>Select a page.</p>
    </main>
  )
}
