import AppHeader from "../components/AppHeader";
import CartItems from "../components/CartItems";
import Main from "../components/Main";

export default function ShoppingCart() {

  return (
    <div>
        <AppHeader />
        <section className="px-4 py-6">
            <header className="flex justify-between items-center py-4">
                <h1 className="text-[1.75rem] text-[#212121] font-semibold">Shopping cart</h1>
            </header>
            <Main className={'mt-4'}>
              <CartItems />
            </Main>
        </section>
    </div>
  )
}
