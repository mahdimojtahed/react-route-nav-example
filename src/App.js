import './App.scss';

import { BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link } from 'react-router-dom';

import Books from './pages/books/books.page'
import Book from './pages/book/book.page'
import Profile from './pages/profile/profile.page'
import Homepage from './pages/homepage/homepage';
import Socials from './pages/profile/social.profile.page';

function App() {
  return (
      <Router>
        <header>
          <h2 className='logo'>SemiColon <span>Books</span></h2>
          <div>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/profile'>Profile</Link>
            <Link className='link' to='/books'>Books</Link>
          </div>
        </header>

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/profile' element={<Profile />}>
            <Route path=':socials' element={<Socials />}/>
          </Route>
          <Route path='/books' element={<Books />} >
          </Route>
          <Route path='books/:bookId' element={<Book />}/>
          
        </Routes>
      </Router>
  );
}

export default App;
