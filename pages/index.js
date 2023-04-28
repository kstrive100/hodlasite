import NavBar from "@/components/NavBar"
import FirstBlock from "@/components/FirstBlock"
import SecondBlock from "@/components/SecondBlock"
import Roadmap from "@/components/Roadmap"
import FAQ from "@/components/FAQ"

import { montserrat } from '../utils/fonts';

import Grad from "@/utils/gradient"
import Image from "next/image";


export default function Home() {
  return (
    <div className={`${montserrat.className} main-body`}>
      <Image className="starImage" src='/star.svg' alt="star" width="1175" height="1170" />
      <NavBar />
      <FirstBlock />
      <SecondBlock />
      <Roadmap />
      <FAQ />
    </div>
  )
}
