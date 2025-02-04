import { useState } from "react";
import Aos from "aos"
import 'aos/dist/aos.css';
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import { About, Footer, Hero, Products, Services } from "../sections";

Aos.init();

function LandingPage() {
  const [sideBarState, setSideBarState] = useState(false);
  return (
    <>
      <main className="relative w-full">
        <Navbar openSideBar = {(open)=>setSideBarState(open)}/>
        <div className={`fixed z-50 w-screen h-screen 
        bg-darkTransparent justify-end ${sideBarState?'flex':'hidden'}
        transition ease-in-out delay-150
        ${!sideBarState ? 'invisible':'visible'}`}>
          <SideNav
            openSideBar = {(close)=>setSideBarState(close)}
            sideBarState = {sideBarState}
          />
        </div>
        <section className="h-[50vh] xl:h-screen xl:padding-l wide:padding-r max-xl:pb-2 bg-tint bg-hero bg-no-repeat bg-cover bg-center padding-b padding-t"
        data-aos="zoom-in" data-aos-duration = "700" data-aos-once = "true" data-aos-easing = "ease-in-out" data-aos-delay="50">
          <Hero/>
        </section>
        <section className="padding" data-aos="zoom-in" data-aos-duration = "700" data-aos-once = "true" data-aos-easing = "ease-in-out" data-aos-delay="50">
          <About/>
        </section>
        <section className="padding bg-amber-950" data-aos="zoom-in" data-aos-duration = "700" data-aos-once = "true" data-aos-easing = "ease-in-out" data-aos-delay="50">
          <Services/>
        </section>
        <section className="padding bg-white" data-aos="zoom-in" data-aos-duration = "700" data-aos-once = "true" data-aos-easing = "ease-in-out" data-aos-delay="50">
          <Products/>
        </section>
        <section className="bg-tint padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  )
}

export default LandingPage
