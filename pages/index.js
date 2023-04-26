import FirstBlock from "@/components/FirstBlock"
import NavBar from "@/components/NavBar"
import { montserrat } from '../utils/fonts';
import Grad from "@/utils/gradient"

export default function Home() {
  return (
    <div className={montserrat.className}>
      <Image className="starImage" src='/star.svg' alt="logo" width="1175" height="1170" />
      <NavBar />
      <FirstBlock />
      <Grad />
    </div>
  )
}
