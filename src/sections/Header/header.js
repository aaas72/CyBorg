import './header.css';
import { Link } from 'react-router-dom';
 

const Header = (props) => {
    return(
        <>
        <nav>
            <div className='logo'>
               <h2>Cyborg</h2>            
            </div>
            <ul>
                <li>
                    <Link className='link' to='/' >Home</Link>
                </li>
                <li>Browse</li>
                <li>Detalis</li>
                <li>Streams</li>
                <li>
                    <Link  className='link' to='/profile' >Profile</Link>
                </li>
            </ul>
        </nav>
        </>
    )   
}

export default Header