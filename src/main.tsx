import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useCurrentUser } from './hooks/use-auth'

const queryClient = new QueryClient()

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  context: {
    queryClient,
    auth: undefined as never,
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

if (import.meta.env.DEV) {
  const { network } = await import('virtual:msw')
  const { handlers } = await import('./mocks/handlers')

  network.configure({ handlers })
  await network.enable()
}

const rootElement = document.getElementById('app')!

function App() {
  const auth = useCurrentUser()

  return <RouterProvider router={router} context={{ auth, queryClient }} />
}

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
  )
}
