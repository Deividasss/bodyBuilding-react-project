import './components/Sass/App.scss';
import Header from './components/RecordsTable/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BodyXMainPage from './components/BodyXMainPage/BodyXMainPage';
import MainShop from './components/Shop/mainShop/MainShop';
import Cart from './components/Shop/Cart/Cart';
import Login from './components/Login/Login';
import WithoutNav from './components/Nav/withoutNav';
import WithNav from './components/Nav/withNav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route exact path='/' element={<Login />} />
        </Route>
        <Route element={<WithNav />}>
          <Route exact path='/BodyXMainPage' element={<BodyXMainPage />} />
          <Route exact path='/Header' element={<Header />} />
          <Route exact path='/MainShop' element={<MainShop />} />
          <Route exact path='/Cart' element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </Router >
  )
}

export default App;
