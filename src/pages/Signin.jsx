import { Link } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import Button from "../components/Button";

export default function Signin(){
    return(
        <div className="h-screen">
            <AppHeader />
            <div className="py-3 px-5 mt-10">
                <h1 className="text-[#212121] text-[1.75rem] font-playfair font-semibold">Sign in</h1>
                <form action="" className="mt-4 flex flex-col gap-5 items-center">
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="email" className="text-[1.125rem] font-playfair text-[#212121]">Email address</label>
                        <input type="email" className="p-1.5 rounded-[10px]" />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="password" className="text-[1.125rem] font-playfair text-[#212121]">Password</label>
                        <input type="password" className="p-1.5 rounded-[10px]"/>
                    </div>
                    <Button className={'bg-primary w-full p-3 rounded-[10px] mt-6 text-[1.125rem] font-poppins text-white'}>Sign in</Button>
                    <p>Not yet registered? <Link to='/signup' className="text-[#1E90FF]">Sign up</Link></p>
                </form>
            </div>
       </div>
    )
}