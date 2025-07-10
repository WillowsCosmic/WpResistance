import { DarkModeProvider } from "./components/DarkModeContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import PopularArea from "./sections/PopularArea";
import Properties from "./sections/Properties";
import Services from "./sections/Services";



export default function App(){
  return(
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularArea />
        <Properties />
        <Services />
        <Clients />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  )
}