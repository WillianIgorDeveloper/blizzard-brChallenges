import { useContext } from "react"
import { Navbar } from "./components/Navbar"
import { gamesContext } from './context/gamesContext'

export const App = () => {

   return (
      <div>
         <Navbar />
         <main>
            <section className="h-[90vh] bg-wow">
            </section>
         </main>
      </div>
   )
}