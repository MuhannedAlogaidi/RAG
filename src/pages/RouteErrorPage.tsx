import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function RouteErrorPage() {
  const error = useRouteError()

  // 404 from router (unknown route)
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main data-testid="page-not-found">
        <h1>Not Found</h1>
        <p>The page you requested does not exist.</p>
      </main>
    )
  }

  // Generic route error
  return (
    <main data-testid="page-route-error">
      <h1>Something went wrong</h1>
      <pre>{String((error as any)?.statusText ?? (error as any)?.message ?? error)}</pre>
    </main>
  )
}
