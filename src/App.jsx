import Navbar from "./components/Navbar"
import { About, Contact, Hero, Popular, Reviews, Services, Special } from "./sections"

function App() {
  return (
    <>
      <main className="relative">
        <div>
          {/*Idea from digital agency*/}
          <Navbar />
        </div>
        <section className="xl:padding-l wide:padding-r xl:padding-b bg-tint">
          {/*Text arrangement: Link to behance mood board, Digital agency portfolio */}
          {/* IMage: ORganization from the nike project created with tailwind css*/}
          <Hero />
        </section>
        <section>
          {/*Link to the nike website i created with tailwinf*/}
          <Popular/>
        </section>
        <section>
          {/*Link to the nike website i used to learn tailwind*/}
          <About/>
        </section>
        <section>
          {/*Text arrangement: Link to behance mood board, Digital agency portfolio */}
          {/**This is going to be a slider on mobile screens and horizontally aligned on larger screens */}
          <Services />
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
