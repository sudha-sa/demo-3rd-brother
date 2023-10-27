import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';


import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import User from './components/User'

function App() {
    return (
        <>
        <Router>
        {/* <BrowserRouter> */}
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/User/:id' element={<User/>} />
            </Routes>
            <Footer />
            
            {/* </BrowserRouter> */}
            </Router>
        </>
    )
} export default App;