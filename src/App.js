import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CheckoutPage from './Pages/CheckoutPage';
import FrontPage from './Pages/FrontPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage/>}/>
          <Route path="/Cart" element={<CheckoutPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
