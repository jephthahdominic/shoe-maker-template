import { BiCartAdd } from "react-icons/bi";
import Button from "./Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AddToCart({addItem, id}) {
  const cartItems = useSelector(store => store.cart.contents);
  console.log(cartItems)

  const exists = cartItems.some(item => item.id === id);
  if(exists){
    return (
      <Link to='/cart' className={'h-[56px] border bg-white border-primary px-8 rounded-[10px] flex items-center'} disabled>
        View Cart
      </Link>
    )
  }
  
  return (
    <Button className={'h-[56px] border bg-white border-primary px-8 rounded-[10px]'} onClick={addItem}>
      <BiCartAdd className='text-[1.5rem]' />
    </Button>
  )
}
