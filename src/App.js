import './components/Sass/App.scss';
import Navigation from './components/Nav/Navigation';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BodyBuildingInfo from './components/BodyBuildinginInfo/BodyBuildingInfo';
import MainShop from './components/Shop/mainShop/MainShop';

function App() {
  return (
    <Router>
        <Navigation />
        <Routes>
          <Route exact path='/Header' element={<Header />} />
          <Route exact path='/' element={<BodyBuildingInfo />} />
          <Route exact path='/MainShop' element={<MainShop/>}/>
        </Routes>
    </Router >
  )
}

export default App;
