import NavBar from "@/components/NavBar"
import FirstBlock from "@/components/FirstBlock"
import SecondBlock from "@/components/SecondBlock"
import Roadmap from "@/components/Roadmap"
import FAQs from "@/components/FAQs"
import SMBlock from "@/components/SMBlock"
import Footer from "@/components/Footer"
import NavigationButton from '@/components/NavigationButton'

import { montserrat } from "@/utils/fonts"
import Image from "next/image";


export default function Home() {
  return (
    <div className={`${montserrat.className} main-body`}>
      <Image className="starImage" src='/star.svg' alt="star" width="1175" height="1170" />
      <NavBar />
      <FirstBlock />
      <SecondBlock />
      <Roadmap />
      <FAQs />
      <SMBlock />
      <Footer />
      <NavigationButton />
    </div>
  )
}
