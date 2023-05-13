import NavBar from "@/components/NavBar"
import ValidatorsFrontPage from "@/components/ValidatorsFrontPage"
import Roadmap from "@/components/Roadmap"
import FAQs from "@/components/FAQs"
import SMBlock from "@/components/SMBlock"
import Footer from "@/components/Footer"
import NavigationButton from '@/components/NavigationButton'

import { montserrat } from "@/utils/fonts"
import Image from "next/image";
import validatorsFaqTexts from '@/utils/validatorsFaqTexts.json'


export default function Home() {
    return (
      <div className={`${montserrat.className} main-body`}>
        <Image className="starImage" src='/star.svg' alt="star" width="1000" height="1000" />
        <NavBar color='orangeBackGround'/>
        <ValidatorsFrontPage />
        <Roadmap color='orangeTitle' roadmapSvg='/roadmap-line-orange.svg'/>
        <FAQs faq={validatorsFaqTexts}/>
        <SMBlock color='orangeBackGround'/>
        <Footer />
        <NavigationButton />
      </div>
    )
  }
  