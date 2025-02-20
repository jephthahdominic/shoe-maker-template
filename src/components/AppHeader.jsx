import { FiMenu, FiShoppingCart } from 'react-icons/fi'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useSidebar } from '../contexts/SidebarContext'

export default function AppHeader() {
  const {setIsSidebarOpen} = useSidebar();
  return (
    <header className='w-full py-3 px-4 bg-white shadow-md flex items-center justify-between'>
        <Logo />
        <div className='flex gap-8 text-[24px]'>
            <Link to='cart'><FiShoppingCart /></Link>
            <button onClick={()=>setIsSidebarOpen((s)=>!s)}><FiMenu /></button>
        </div>
    </header>
  )
}
