import './libraryCard.css'
import Button2  from '../Button2/button2' 

import photo from '../../assets/photo-profile.jpg'

const libraryCard = () => {
    return(
        <>
            <ul className='library-wrapper'>
                    <li className='library-rows'>
                        <img src={photo}/>
                        <ul className='data'>
                            <li className='game'>
                                <h6>Fortnite</h6>
                                <p>Sandbox</p>
                            </li>
                            <li className='game'>
                                <h6>Fortnite</h6>
                                <p>Sandbox</p>
                            </li>
                            <li className='game'>
                                <h6>Fortnite</h6>
                                <p>Sandbox</p>
                            </li>
                            
                            
                        </ul>
                        <Button2/>
                    </li>
                </ul>
        </>
    )
}

export default libraryCard