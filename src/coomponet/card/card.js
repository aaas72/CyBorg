import './card.css'
import myImage from '../../../src/assets/18496664_5996335.jpg';

import { FaStar, FaDownload  } from "react-icons/fa";


const Card = (props) => {
    return (
        <>
            <div className='post-pupolar-items'>
                <div className='card-wrapper'>
                    <img src={myImage}/>
                    <div className='most-pupolar-content'>
                        <h4 className='most'>
                            {props.title}<br/>
                            <span>Sandbox</span>
                        </h4>
                        <ul>
                            <li><span style={{color:"white"}}><FaStar/></span> <span>4.8</span></li>
                            <li><soan style={{color:"white"}}><FaDownload /></soan> <span>8.M</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card