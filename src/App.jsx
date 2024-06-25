import Navbar from "./components/Navbar"
import { About, Contact, Footer, Gallery, Hero, Popular, Products, Reviews, Services, Special } from "./sections"
import Aos from "aos"
import 'aos/dist/aos.css';
Aos.init();

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
          <Hero/>
        </section>
        <section className="max-xl:padding px-10 py-16">
          {/*Link to the nike website i used to learn tailwind*/}
          <About/>
        </section>
        <section className="padding bg-tint">
          {/*Text arrangement: Link to behance mood board, Digital agency portfolio */}
          {/**This is going to be a slider on mobile screens and horizontally aligned on larger screens */}
          <Gallery />
        </section>
        {/* <section className="padding bg-amber-900">
          {/*Text arrangement: Link to behance mood board, Digital agency portfolio */}
          {/**This is going to be a slider on mobile screens and horizontally aligned on larger screens */}
          {/* <Services />
        </section> */}
        <section className="padding bg-white-400">
          {/*Link to the nike website i created with tailwinf*/}
          <Products/>
        </section>
        {/* <section> */}
          {/*Get from behance the only portfolio design */}
          {/* <Reviews /> */}
        {/* </section>
        <section> */}
          {/**Idea from Masoary on mood board */}
          {/* <Contact/>
        </section> */}
        <section className="bg-tint padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
