import { useState } from "react";
import Navbar from "./components/Navbar"
import SideNav from "./components/SideNav";
import { About, Contact, Footer, Gallery, Hero, Popular, Products, Reviews, Services, Special } from "./sections"
import Aos from "aos"
import 'aos/dist/aos.css';
Aos.init();

function App() {
  const [sideBarState, setSideBarState] = useState(false);
  return (
    <>
      <main className="relative">
        <div>
          {/*Idea from digital agency*/}
          <Navbar 
            openSideBar = {(open)=>setSideBarState(open)}
          />
        </div>
        <div className={`fixed z-50 w-screen h-screen 
        bg-darkTransparent justify-end ${sideBarState?'flex':'hidden'}
        transition ease-in-out delay-150
        ${!sideBarState ? 'invisible':'visible'}`}>
          <SideNav
            openSideBar = {(close)=>setSideBarState(close)}
            sideBarState = {sideBarState}
          />
      </div>
        <section className="xl:padding-l wide:padding-r max-xl:pb-2 bg-tint bg-hero bg-no-repeat bg-cover bg-center padding-b padding-t">
          {/*Text arrangement: Link to behance mood board, Digital agency portfolio */}
          {/* IMage: ORganization from the nike project created with tailwind css*/}
          <Hero/>
        </section>
        <section className="padding">
          {/*Link to the nike website i used to learn tailwind*/}
          <About/>
        </section>
        <section className="padding bg-tint">
          {/*Link to the nike website i used to learn tailwind*/}
          <Services/>
        </section>
        {/* <section className="padding bg-tint"> */}
          {/*Text arrangement: Link to behance mood board, Digital agency portfolio */}
          {/**This is going to be a slider on mobile screens and horizontally aligned on larger screens */}
          {/* <Gallery /> */}
        {/* </section> */}
        <section className="padding bg-white">
          {/*Link to the nike website i created with tailwinf*/}
          <Products/>
        </section>
        {/* <section className="padding bg-amber-900">
          {/*Text arrangement: Link to behance mood board, Digital agency portfolio */}
          {/**This is going to be a slider on mobile screens and horizontally aligned on larger screens */}
          {/* <Services />
        </section> */}
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
