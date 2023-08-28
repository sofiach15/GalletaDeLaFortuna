
import getRandomElement from '../utils/getRandomElement'
import phrases from '../utils/phrases.json'


const ButtonRandom = ({clickAnother, clickRandomImage}) => {

    const clickChangePhrase = () => {
        clickAnother(getRandomElement(phrases))
        clickRandomImage(getRandomElement([1, 2, 3, 4]))
    }

    return(
        <div>
            <button className='App-button' onClick={clickChangePhrase}>
                Ver mi Fortuna
            </button>
        </div>
    )

}

export default ButtonRandom