// Games Icons
import arcadeDaBlizzard from './src/assets/menu/games-icons/arcade-da-blizzard.png'
import diablo3 from './src/assets/menu/games-icons/diablo-3.png'
import diablo4 from './src/assets/menu/games-icons/diablo-4.png'
import diabloImortal from './src/assets/menu/games-icons/diablo-imortal.png'
import diablo2 from './src/assets/menu/games-icons/diablo-2.png'
import hearthstone from './src/assets/menu/games-icons/hearthstone.png'
import herosOfTheStorm from './src/assets/menu/games-icons/heros-of-the-storm.png'
import overwatch2 from './src/assets/menu/games-icons/overwatch-2.png'
import starcraft2 from './src/assets/menu/games-icons/starcraft-2.png'
import starcraftRemastered from './src/assets/menu/games-icons/starcraft-remastered.png'
import warcraftReforged from './src/assets/menu/games-icons/warcraft-reforged.png'
import worldOfWarcraft from './src/assets/menu/games-icons/world-of-warcraft.png'

// Esportes Icons
import campeonatoMundialDeArenaWow from './src/assets/menu/esportes-icons/campeonato-mundial-de-arena-wow.png'
import copaMundialDeOverwatch from './src/assets/menu/esportes-icons/copa-mundial-de-overwatch.png'
import hearthstoneMasters from './src/assets/menu/esportes-icons/hearthstone-masters.png'
import ligaDeOverwatch from './src/assets/menu/esportes-icons/liga-de-overwatch.png'
import starcraftWcs from './src/assets/menu/esportes-icons/starcraft-wcs.png'

// Others Icons
import chat from './src/assets/menu/icon-chat.svg'
import downloads from './src/assets/menu/icon-downloads.svg'
import games from './src/assets/menu/icon-games.svg'
import logo from './src/assets/menu/icon-logo.svg'
import torneio from './src/assets/menu/icon-torneio.svg'

export const menuItems = {
   games: [
      {
         name: "Diablo® II ressurected",
         icon: diablo2,
         link: "https://diablo2.blizzard.com/pt-br/",
      },
      {
         name: "Overwatch® 2",
         icon: overwatch2,
         link: "https://overwatch.blizzard.com/pt-br/",
      },
      {
         name: "World of Warcraft®",
         icon: worldOfWarcraft,
         link: "https://worldofwarcraft.com/pt-br/",
      },
      {
         name: "Hearthstone®",
         icon: hearthstone,
         link: "https://hearthstone.blizzard.com/en-us",
      },
      {
         name: "Heroes of the storm®",
         icon: herosOfTheStorm,
         link: "https://heroesofthestorm.com/pt-br/",
      },
      {
         name: "Warcraft® III Reforged",
         icon: warcraftReforged,
         link: "https://playwarcraft3.com/pt-br/",
      },
      {
         name: "Diablo® IV",
         icon: diablo4,
         link: "https://diablo4.blizzard.com/pt-br/",
      },
      {
         name: "Diablo® Immortal",
         icon: diabloImortal,
         link: "https://diabloimmortal.blizzard.com/pt-br/",
      },
      {
         name: "Diablo® III",
         icon: diablo3,
         link: "https://us.diablo3.blizzard.com/pt-br/",
      },
      {
         name: "StarCraft® II",
         icon: starcraft2,
         link: "https://starcraft2.com/pt-br/",
      },
      {
         name: "StarCraft® Remastered",
         icon: starcraftRemastered,
         link: "https://starcraft.com/pt-br/",
      },
      {
         name: "Arcade da Blizzard®",
         icon: arcadeDaBlizzard,
         link: "https://news.blizzard.com/en-us/blizzard/23617535/relive-the-legacy-announcing-the-blizzard-arcade-collection",
      },
   ],
   esportes: [
      {
         name: "Hearthstone® masters",
         icon: hearthstoneMasters,
         link: "https://hearthstone.blizzard.com/pt-br/esports/",
      },
      {
         name: "Campeonato Mundial de Arena WoW®",
         icon: campeonatoMundialDeArenaWow,
         link: "https://worldofwarcraft.com/pt-br/esports/arena",
      },
      {
         name: "StarCraft® II WCS",
         icon: starcraftWcs,
         link: "https://pro.eslgaming.com/tour/sc2/",
      },
      {
         name: "Copa Mundial de Overwatch®",
         icon: copaMundialDeOverwatch,
         link: "https://overwatchleague.com/en-us/overwatch-world-cup",
      },
      {
         name: "Liga de Overwatch®",
         icon: ligaDeOverwatch,
         link: "https://overwatchleague.com/en-us",
      },
   ],
   others: {
      chat: chat,
      downloads: downloads,
      games: games,
      logo: logo,
      torneio: torneio,
   },
}