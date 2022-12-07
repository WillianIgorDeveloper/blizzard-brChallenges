//TO-DO =================================================================
// Update link logo to deployment link

import { useRef, useState } from 'react'
import { CaretDown, CaretUp, List, User, X } from 'phosphor-react'
import ScrollReveal from 'scrollreveal'

import logoBlizzard from '../assets/logo-blizzard.png'
import { menuItems } from '../../menuItems'
import { Button } from './Button'
import { useEffect } from 'react'


export const Navbar = () => {

   const [menuOpen, setMenuOpen] = useState(undefined)

   return (
      <header className="fixed w-full">
         <div className="relative z-40 border-b-2 border-b-white-t-10">
            <div className="p-6 flex justify-between items-center after:w-11 after:bg-brand-primary after:h-[2px] after:absolute after:-bottom-[2px] container m-auto">
               <div className="flex gap-32 items-center">
                  <a href="#">
                     <img src={logoBlizzard} alt="Blizzard Logo" className="h-8" />
                  </a>
                  <DesktopMenu />
               </div>
               <div className="flex gap-20 items-center">
                  <TabletMenu />
                  {
                     menuOpen
                        ? <X className="text-3xl lg:hidden cursor-pointer" onClick={() => { setMenuOpen(!menuOpen) }} />
                        : <List className="text-3xl lg:hidden cursor-pointer" onClick={() => { setMenuOpen(!menuOpen) }} />
                  }
               </div>
            </div>
         </div>
         <MobileMenu menuOpen={menuOpen} />
      </header>
   )
}

const MobileMenu = ({ menuOpen }) => {

   const [jogosMenuOpen, setJogosMenuOpen] = useState(false)
   const [esportesMenuOpen, setEsportesMenuOpen] = useState(false)

   return (
      <div
         className={`
            absolute z-10 h-screen w-full pt-20 bg-gradient-to-t from-menu-primary to-menu-secondary backdrop-blur
            ${menuOpen ? "top-0 animate-menuOpen" : "-top-[9999px] animate-menuClose"}
            ${menuOpen === undefined && "animate-none"}
            md:pt-[94px] lg:hidden
         `}
      >
         <div className="h-full p-6 overflow-x-auto flex flex-col gap-9">
            <nav>
               <ul className=" container m-auto flex flex-col gap-9 font-medium text-sm">
                  <li className="flex flex-col">
                     <div
                        onClick={() => { setJogosMenuOpen(!jogosMenuOpen); esportesMenuOpen && setEsportesMenuOpen(false) }}
                        className="flex items-center gap-3 cursor-pointer"
                     >
                        Jogos {jogosMenuOpen ? <CaretUp /> : <CaretDown />}
                     </div>
                     <div className={`${jogosMenuOpen ? "h-[1269px] md:h-[601px] py-4" : "h-0 py-0"} transition-all duration-300 overflow-hidden`}>
                        <ul className={`flex flex-wrap justify-center items-center gap-8`}>
                           {
                              menuItems.games.map(game => {
                                 return (
                                    <li key={game.name} className="w-36 h-36 flex items-center justify-center rounded-md hover:bg-menu-primary [&>a>img]:hover:scale-110">
                                       <a href={game.link} target="_blank" className="flex flex-col items-center gap-2 text-center text-sm text-gray">
                                          <img src={game.icon} alt={game.name} className="w-16 transition-transform duration-200" />
                                          {game.name}
                                       </a>
                                    </li>
                                 )
                              })
                           }
                        </ul>
                        <div className="pt-6 mt-6 border-t border-white-t-10">
                           <ul className="flex flex-col justify-center items-center gap-6 md:flex-row">
                              <li><a href="https://www.blizzard.com/pt-br/games" target="_blank" className="flex items-center gap-3"><img src={menuItems.others.games} alt="Todos os jogos" /> Ver todos os jogos</a></li>
                              <li><a href="https://www.blizzard.com/pt-br/apps/battle.net/desktop" target="_blank" className="flex items-center gap-3"><img src={menuItems.others.logo} alt="Blattle.net" />Aplicativo Battle.net</a></li>
                              <li><a href="https://www.blizzard.com/pt-br/download/" target="_blank" className="flex items-center gap-3"><img src={menuItems.others.downloads} alt="Downloads" />Downloads</a></li>
                              <li><a href="https://us.forums.blizzard.com/en/blizzard/" target="_blank" className="flex items-center gap-3"><img src={menuItems.others.chat} alt="Fóruns" />Fóruns dos jogos</a></li>
                           </ul>
                        </div>
                     </div>
                  </li>

                  <li className="flex flex-col">
                     <div
                        onClick={() => { setEsportesMenuOpen(!esportesMenuOpen); jogosMenuOpen && setJogosMenuOpen(false) }}
                        className="flex items-center gap-3 cursor-pointer"
                     >
                        Esportes {esportesMenuOpen ? <CaretUp /> : <CaretDown />}
                     </div>
                     <div className={`${esportesMenuOpen ? "h-[601px] md:h-[457px] py-4" : "h-0 py-0"} transition-all duration-300 overflow-hidden`}>
                        <ul className={`flex flex-wrap justify-center items-center gap-8`}>
                           {
                              menuItems.esportes.map(esporte => {
                                 return (
                                    <li key={esporte.name} className="w-36 md:w-40 h-36 md:h-40 flex items-center justify-center [&>a>img]:hover:scale-110 rounded-md hover:bg-menu-primary">
                                       <a href={esporte.link} target="_blank" className="flex flex-col items-center gap-2 text-center text-sm text-gray">
                                          <img src={esporte.icon} alt={esporte.name} className="w-28 transition-transform duration-200" />
                                          {esporte.name}
                                       </a>
                                    </li>
                                 )
                              })
                           }
                        </ul>
                        <div className="pt-6 mt-6 border-t border-white-t-10">
                           <ul className="flex flex-col items-center gap-6">
                              <li><a href="https://www.blizzard.com/pt-br/legal/ad996a79-1b76-47af-a586-833c8af93a3d/blizzard-community-competition-license" target="_blank" className="flex items-center gap-3"><img src={menuItems.others.torneio} alt="Torneios" />Torneios da comunidade</a></li>
                           </ul>
                        </div>
                     </div>
                  </li>

                  <li><a href="https://us.shop.battle.net/pt-br" target="_blank">Loja</a></li>
                  <li><a href="https://news.blizzard.com/pt-br/blizzard" target="_blank">Notícias</a></li>
                  <li><a href="https://us.battle.net/support/pt/" target="_blank">Suporte</a></li>
               </ul>
            </nav>
            <Button bg className="w-full md:hidden" ><User className="text-lg" />Logar</Button>
            <Button className="w-full md:hidden" >Criar conta</Button>
         </div>
      </div>
   )
}

const TabletMenu = () => {

   return (
      <div className="flex gap-4">
         <Button className="hidden md:block md:w-28">Criar conta</Button>
         <Button bg className="hidden md:block md:w-28"><User className="text-lg" />Logar</Button>
      </div>
   )
}

const DesktopMenu = () => {

   const [jogosMenuOpen, setJogosMenuOpen] = useState(undefined)
   const [esportesMenuOpen, setEsportesMenuOpen] = useState(undefined)

   return (
      <nav className="hidden lg:block">
         <ul className="relative flex gap-9 font-medium text-sm">
            <li
               className="flex items-center gap-3 cursor-pointer"
               onClick={() => { setJogosMenuOpen(!jogosMenuOpen); esportesMenuOpen && setEsportesMenuOpen(false)}}
            >
               Jogos {jogosMenuOpen ? <CaretUp /> : <CaretDown />}
            </li>

            <li
               className="flex items-center gap-3 cursor-pointer"
               onClick={() => { setEsportesMenuOpen(!esportesMenuOpen); jogosMenuOpen && setJogosMenuOpen(false)}}
            >
               Esportes {esportesMenuOpen ? <CaretUp /> : <CaretDown />}
            </li>

            <li><a href="https://us.shop.battle.net/pt-br" target="_blank">Loja</a></li>
            <li><a href="https://news.blizzard.com/pt-br/blizzard" target="_blank">Notícias</a></li>
            <li><a href="https://us.battle.net/support/pt/" target="_blank">Suporte</a></li>
         </ul>

         <div
            className={`
               absolute -z-30 pt-[92px] w-full left-0 bg-gradient-to-t from-menu-primary to-menu-secondary backdrop-blur max-h-screen
               ${jogosMenuOpen ? "top-0 animate-menuOpen" : "-top-[9999px] animate-menuClose"}
               ${jogosMenuOpen === undefined && "animate-none"}
            `}
         >
            <div className="border-t-2 border-t-white-t-10 overflow-y-auto">
               <ul className={`container m-auto py-14 flex flex-wrap gap-2 xl:gap-8 justify-center items-center text-center`}>
                  {
                     menuItems.games.map(game => {
                        return (
                           <li key={game.name} className={`text-sm text-gray`}>
                              <a href={game.link} target="_blank" className="flex flex-col items-center justify-center gap-2 w-40 xl:w-44 h-40 xl:h-44 [&>img]:hover:scale-110 hover:bg-menu-primary rounded-md">
                                 <img src={game.icon} alt={game.name} className="w-20 transition-transform duration-200" />
                                 {game.name}
                              </a>
                           </li>
                        )
                     })
                  }
               </ul>
               <div className="border-t border-white-t-10 bg-menu-bottom">
                  <ul className="flex items-center justify-center gap-16 p-6">
                     <li><a href="https://www.blizzard.com/pt-br/games" target="_blank" className="flex items-center gap-3"><img src={menuItems.others.games} alt="Todos os jogos" /> Ver todos os jogos</a></li>
                     <li><a href="https://www.blizzard.com/pt-br/apps/battle.net/desktop" target="_blank" className="flex items-center gap-3"><img src={menuItems.others.logo} alt="Blattle.net" />Aplicativo Battle.net</a></li>
                     <li><a href="https://www.blizzard.com/pt-br/download/" target="_blank" className="flex items-center gap-3"><img src={menuItems.others.downloads} alt="Downloads" />Downloads</a></li>
                     <li><a href="https://us.forums.blizzard.com/en/blizzard/" target="_blank" className="flex items-center gap-3"><img src={menuItems.others.chat} alt="Fóruns" />Fóruns dos jogos</a></li>
                  </ul>
               </div>
            </div>
         </div>


         <div
            className={`
               absolute -z-30 pt-[92px] w-full left-0 bg-gradient-to-t from-menu-primary to-menu-secondary backdrop-blur
               ${esportesMenuOpen ? "top-0 animate-menuOpen" : "-top-[9999px] animate-menuClose"}
               ${esportesMenuOpen === undefined && "animate-none"}
            `}
         >
            <div className="border-t-2 border-t-white-t-10">
               <ul className={`container m-auto py-14 flex flex-wrap gap-12 xl:gap-16 justify-center items-center text-center`}>
                  {
                     menuItems.esportes.map(esporte => {
                        return (
                           <li key={esporte.name} className="text-sm text-gray">
                              <a href={esporte.link} target="_blank" className="flex flex-col items-center justify-center gap-6 w-40 xl:w-44 h-56 xl:h-56 rounded-md hover:bg-menu-primary [&>img]:hover:scale-110">
                                 <img src={esporte.icon} alt={esporte.name} className="w-36 transition-transform duration-200 xl:w-44" />
                                 {esporte.name}
                              </a>
                           </li>
                        )
                     })
                  }
               </ul>
               <div className="border-t border-white-t-10 bg-menu-bottom">
                  <ul className="flex items-center justify-center gap-16 p-6">
                     <li><a href="https://www.blizzard.com/pt-br/legal/ad996a79-1b76-47af-a586-833c8af93a3d/blizzard-community-competition-license" target="_blank" className="flex items-center gap-3"><img src={menuItems.others.torneio} alt="Torneios" />Torneios da comunidade</a></li>
                  </ul>
               </div>
            </div>

         </div>
      </nav>
   )
}