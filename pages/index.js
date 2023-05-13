import NavBar from "@/components/NavBar"
import StakersFrontPage from "@/components/StakersFrontPage"
import SecondBlock from "@/components/SecondBlock"
import Roadmap from "@/components/Roadmap"
import FAQs from "@/components/FAQs"
import SMBlock from "@/components/SMBlock"
import Footer from "@/components/Footer"
import NavigationButton from '@/components/NavigationButton'

import { montserrat } from "@/utils/fonts"
import Image from "next/image";
import stakersFaqTexts from '@/utils/stakersFaqTexts.json'

export default function Home() {
  return (
    <div className={`${montserrat.className} main-body`}>
      <Image className="starImage" src='/star.svg' alt="star" width="1175" height="1170" />
      <NavBar color='yellowBackGround'/>
      <StakersFrontPage />
      <SecondBlock />
      <Roadmap roadmapSvg='/roadmap-line.svg' />
      <FAQs faq={stakersFaqTexts}/>
      <SMBlock />
      <Footer />
      <NavigationButton />
    </div>
  )
}
