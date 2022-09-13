import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart';
import FrontPage from './Pages/FrontPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
