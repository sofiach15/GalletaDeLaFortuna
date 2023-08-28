
import './App.css'
import phrases from './utils/phrases.json'
import PhraseLucky from './components/PhraseLucky'
import ButtonRandom from './components/ButtonRandom'
import getRandomElement from './utils/getRandomElement'
import {useState} from 'react'

const images = [1, 2, 3, 4]

function App() {

  const [anotherPhrase, setAnotherPhrase] = useState(getRandomElement(phrases))

  const [randomImage, setRandomImage] = useState(getRandomElement(images))

  const styleApp = {

    backgroundImage: `url('/images_background/fondo${randomImage}.png')`

  }


  return(
    <div style={styleApp} className="App">
      <h2 className='App-title'>GALLETAS DE LA FORTUNA</h2>
    
    <PhraseLucky another={anotherPhrase}/> 

    <ButtonRandom clickAnother={setAnotherPhrase} clickRandomImage={setRandomImage}/>
    </div>
  )
}


export default App
