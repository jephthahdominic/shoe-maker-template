import { FiMenu, FiShoppingCart } from 'react-icons/fi'
import Logo from './Logo'
import { Link } from 'react-router-dom'

export default function AppHeader() {
  return (
    <header className='w-full p-3 bg-white shadow-md flex items-center justify-between'>
        <Logo />
        <div className='flex gap-6 text-[24px]'>
            <Link to='cart'><FiShoppingCart /></Link>
            <button><FiMenu /></button>
        </div>
    </header>
  )
}
