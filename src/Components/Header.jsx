import IconSun from '../assets/images/icon-sun.svg'
import IconMoon from '../assets/images/icon-moon.svg'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import './Trick.css'


export default function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <header className="px-8 ">
      <div className='flex justify-between items-center pt-28'>
        <span className="uppercase font-bold letter-spacing text-4xl dark:text-white">todo</span>
        <button onClick={toggleTheme}>
            <img src={theme ? IconSun : IconMoon} alt="icon" />
        </button>
      </div>
    </header>
  )
}
