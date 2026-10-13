import Footer from '#/components/layout/Footer'
import Header from '#/components/layout/Header'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({ component: Home })

function Home() {
  return (
    <div className="p-8 font-mono">
      <div className="w-300 mx-auto text-[#F5F1EB]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
