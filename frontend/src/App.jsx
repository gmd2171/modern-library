import { Group, Button } from '@mantine/core';
import Home from './frontend/pages/Home';
import Contact from './frontend/pages/Contact';
import Error from './frontend/components/Error/Error';
import { Routes, Route } from 'react-router-dom';
import HeaderMenu from './frontend/components/Header/HeaderMenu';
import CardCarousel from './frontend/components/Books/CardCarousel';
import Register from './frontend/components/Profiling/Register';
import Login from './frontend/components/Profiling/Login';
import Blogs from './frontend/components/Blogs/Blogs';
import AddBook from './frontend/components/Books/AddBook';
import Admin from './frontend/pages/Admin';
import CheckOut from './frontend/components/Payments/CheckOut';
import Books from './frontend/components/Books/Books';
import Orders from './frontend/components/Orders/Orders';

function App() {
  return (
    <div>
      <HeaderMenu />
      <Routes path='/'>
        <Route index element={<Home />} />
        <Route path='/books' element={<CardCarousel />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={<CheckOut />} />

        <Route path='/admin'>
          <Route index element={<Admin />} />
          <Route path='/admin/books'>
            <Route index element={<Books />} />
            <Route path='/admin/books/addBook' element={<AddBook />} />
          </Route>
          <Route path='/admin/orders/'>
            <Route index element={<Orders />} />
          </Route>
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
