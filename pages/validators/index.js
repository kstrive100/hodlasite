import NavBar from "@/components/NavBar"
import NavigationButton from '@/components/NavigationButton'

import { montserrat } from "@/utils/fonts"
import Image from "next/image";

export default function Home() {
    return (
      <div className={`${montserrat.className} main-body`}>
        <NavBar />
        <NavigationButton />
      </div>
    )
  }
  