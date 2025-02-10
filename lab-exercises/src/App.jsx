import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetings from './components/greetings/Greetings'
import BigCats from './components/BigCats/BigCats'
import EmojiChanger from './components/Emoji/EmojiChanger'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Greetings/>
    <Greetings name='Shouvik'/>

    <BigCats/>
    <EmojiChanger/>
    </>
  )
}

export default App
