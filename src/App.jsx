import Navbar from "./components/Navbar"
import { About, Contact, Gallery, Hero, Popular, Products, Reviews, Services, Special } from "./sections"

function App() {
  return (
    <>
      <main className="relative">
        <div>
          {/*Idea from digital agency*/}
          <Navbar />
        </div>
        <section className="xl:padding-l wide:padding-r max-xl:pb-2 bg-tint padding-b padding-t">
          {/*Text arrangement: Link to behance mood board, Digital agency portfolio */}
          {/* IMage: ORganization from the nike project created with tailwind css*/}
          <Hero />
        </section>
        <section className="max-xl:padding px-10 py-16">
          {/*Link to the nike website i used to learn tailwind*/}
          <About/>
        </section>
        <section className="padding bg-amber-900">
          {/*Text arrangement: Link to behance mood board, Digital agency portfolio */}
          {/**This is going to be a slider on mobile screens and horizontally aligned on larger screens */}
          <Gallery />
        </section>
        {/* <section className="padding bg-amber-900">
          {/*Text arrangement: Link to behance mood board, Digital agency portfolio */}
          {/**This is going to be a slider on mobile screens and horizontally aligned on larger screens */}
          {/* <Services />
        </section> */}
        <section className="padding">
          {/*Link to the nike website i created with tailwinf*/}
          <Products/>
        </section>
        <section>
          {/*Link to the nike website i created with tailwinf*/}
          <Popular/>
        </section>
        <section>
          {/*Inspirtation from the nike project done with tailwind*/}
          <Special />
        </section>
        <section>
          {/*Get from behance the only portfolio design */}
          <Reviews />
        </section>
        <section>
          {/**Idea from Masoary on mood board */}
          <Contact/>
        </section>
      </main>
    </>
  )
}

export default App
