import './components/Sass/App.scss';
import Navigation from './components/Nav/Navigation';
import Header from './components/RecordsTable/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BodyBuildingInfo from './components/BodyBuildinginInfo/BodyBuildingInfo';
import MainShop from './components/Shop/mainShop/MainShop';
import Cart from './components/Shop/Cart/Cart';
import Login from './components/Login/Login';
import WithoutNav from './components/Nav/withoutNav';
import WithNav from './components/Nav/withNav';


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route exact path='/' element={<Login />} />
        </Route>
        <Route element={<WithNav />}>
          <Route exact path='/BodyBuildingInfo' element={<BodyBuildingInfo />} />
          <Route exact path='/Header' element={<Header />} />
          <Route exact path='/MainShop' element={<MainShop />} />
          <Route exact path='/Cart' element={<Cart />} />
        </Route>
      </Routes>
    </Router >
  )
}

export default App;
