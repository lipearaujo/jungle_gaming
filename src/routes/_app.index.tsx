import Hero from '#/components/sections/Hero'
import Products from '#/components/sections/Products'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="border-t border-t-[#D28A4C]/40">
      {/* Hero section */}
      <Hero />

      {/* products section */}
      <Products />

      {/* promos section */}
      <section></section>

      {/* blog section */}
      <section></section>
    </div>
  )
}
