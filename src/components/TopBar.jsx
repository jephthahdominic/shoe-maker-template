import { IoCallOutline } from 'react-icons/io5'
import { IoMdArrowDropdown } from 'react-icons/io'

export default function TopBar() {
  return (
    <section className='flex items-center justify-between bg-announcementGreen text-white-400 padding-x
    py-3 text-xl max-lg:hidden'>
      <div className='flex items-center gap-2'>
        <IoCallOutline /> +234 9999999
      </div>
      <div className='flex items-center gap-4'>
        <p>Get a discount on selected items</p>
        <p>Shop now</p>
      </div>
      <div className='flex items-center gap-3'>
        <div>
          <span className='flex items-center gap-1'>En <IoMdArrowDropdown /></span>
        </div>
        <div>
          <span className='flex items-center gap-1'>Location <IoMdArrowDropdown /></span>
        </div>
      </div>
    </section>
  )
}
