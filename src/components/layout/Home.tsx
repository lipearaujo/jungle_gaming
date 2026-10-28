import Blog from '#/components/sections/Blog'
import Hero from '#/components/sections/Hero'
import Products from '#/components/sections/Products'
import Promos from '#/components/sections/Promos'

const Home = () => {
  return (
    <div className="md:border-t border-t-[#D28A4C]/40 ">
      {/* Hero section */}
      <Hero />

      {/* products section */}
      <Products />

      {/* promos section */}
      <Promos />

      {/* blog section */}
      <Blog />
    </div>
  )
}

export default Home
