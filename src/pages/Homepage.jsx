import Header from '../components/Header'
import Inventory from '../components/Inventory'
import Main from '../components/Main'
import MainSideBar from '../components/MainSideBar'
import MovingHero from '../components/MovingHero'
import TopBar from '../components/TopBar'
import TopBuys from '../components/TopBuys'

export default function Homepage() {
  return (
    <>
      <TopBar />
      <Header />
      <MainSideBar />
      <Main>
        <div className='padding-x'>
          <p className='text-center border border-[#c4c4c4] font-semibold py-2 font-playfair'>Experience elegance, comfort, and craftsmanship.</p>
          <MovingHero/>
        </div>
        <Inventory>
          <TopBuys />
        </Inventory>
      </Main>
    </>
  )
}
