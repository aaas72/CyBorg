import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Container} from './coomponet/index'
import {Header,Footer} from './sections/index'
import {Home, Profile} from './Pages/index'


import './App.css';

const App = () => {
    return(
        <>
            <Router>
                <Container>
                    <Header/>
                        <Routes>
                            <Route path='/' element={<Home/>} />
                            <Route path='profile' element={<Profile/>} />
                        </Routes>
                    <Footer/>
                </Container>
            </Router>
        </>
    )
}

export default App;