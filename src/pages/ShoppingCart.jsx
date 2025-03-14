import AppHeader from "../components/AppHeader";
import CartItems from "../components/CartItems";
import Main from "../components/Main";

export default function ShoppingCart() {
    const cartSize = [1];

  return (
    <div>
        <AppHeader />
        <section className="px-4 py-6">
            <header className="flex justify-between items-center py-4">
                <h1 className="text-[1.75rem] text-[#212121] font-semibold">Shopping cart</h1>
            </header>
            {cartSize.length === 0 ? (
                <Main className={'mt-4 text-center p-8'}>
                   <p className="text-[2rem] text-[#757575]">Oops!, There is no item in your cart</p> 
                </Main>
                )  : (
                <Main className={'mt-4'}>
                    <CartItems />
                </Main>
                )}
        </section>
    </div>
  )
}
