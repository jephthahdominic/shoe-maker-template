import { copyright } from "../assets/icons"
import {headerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container"  data-aos="zoom-in" data-aos-duration = "500" data-aos-once = "false" data-aos-easing = "ease-in-out" data-aos-delay="50">
      <div className="flex justify-between items-start gap-20
      flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={headerLogo} alt="nike-logo" className="w-[300px] h-[300px] m-auto"/>
          </a>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20
        flex-wrap">
          {footerLinks.map((section)=>(
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl
              leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link)=>(
                  <li className="mt-3 text-white-400 font-montserrat text-base
                  hover:text-slate-gray" key={link.name}>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24
      max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2
        font-montserrat cursor-pointer">
          <img 
           src={copyright}
           alt="copy right sign"
           width={20}
           height={20}
           className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & conditions</p>
      </div>
    </footer>
  )
}

export default Footer