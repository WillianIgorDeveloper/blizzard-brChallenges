import { useEffect, createContext, useState } from "react"
import { Loading } from "../components/Loading"

export const gamesContext = createContext()

export const GamesProvider = ({ children }) => {

   const [games, setGames] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      fetch('https://api.brchallenges.com/api/blizzard/games')
      .then(data => data.json())
      .then(data => setGames(data))
      .then(setLoading(false))
   }, [])

   return (
      <gamesContext.Provider value={ games }>
         {
            loading
            ? <Loading />
            : children
         }
      </gamesContext.Provider>
   )
}