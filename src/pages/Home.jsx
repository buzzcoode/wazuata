import { Layout } from "../components/Layout"
import { Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "../sections"

export const Home = () => {
  return <Layout>
    <>
      <section className="xl:padding-l wide-padding-r padding-b">
        <Hero />
      </section>

      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x py-10">
        <Services />
      </section>

      <section className="padding">
        <SpecialOffer />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
    </>
  </Layout>
}
