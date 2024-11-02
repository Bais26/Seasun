import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Index from './router/Route';
import Home from './page/Home';
import ErrorPage from './page/ErrorPage';
import About from './page/About';
import ProductPage from './page/ProductPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path='/about' element={<About/>} />
          <Route path='/product' element={<ProductPage/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;