import Nav from '../components/Nav'
import { Footer } from '../sections'

export const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer />
    </section>
  </>
)