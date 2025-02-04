import Header from '../components/Header'
import MainSideBar from '../components/MainSideBar'
import TopBar from '../components/TopBar'

export default function Homepage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className='padding-x'>
        <MainSideBar />
      </main>
    </>
  )
}
