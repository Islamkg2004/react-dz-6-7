import './App.css';
import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Pokemon from "./Pages/PokemonInfo/Pokemon";
function App() {
    const [theme, setTheme] = useState('light')

    const toggleTheme = ()=>{
        const newTheme =  theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }
  return (
    <div className={`app ${theme}`}>
        <div className='container'>
        <button onClick={toggleTheme}>
            Change color
        </button>
        <Routes>
            <Route path='/' element={<MainPage />}  />
            <Route path='/about-us/' element={<AboutUs />}  />
             <Route path='/pokemon/:name' element={<Pokemon/>}/>
            
        </Routes>



        </div>
    </div>
  );
}

export default App;
