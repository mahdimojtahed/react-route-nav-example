
import { Link , NavLink , Outlet , useSearchParams , useLocation } from 'react-router-dom';
import { getBooks } from '../../data/data';
import './books.style.scss';



const Books = () => {
   let books = getBooks();
   let [searchParams , setSearchParams] = useSearchParams();

   return (
      <div className='container'>
         <nav>
            <input
               placeholder='Search Books ...'
               value={searchParams.get('filter') || ""}
               onChange={(event) => {
                  let filter = event.target.value;
                  if(filter) {
                     setSearchParams({filter});
                  } else {
                     setSearchParams({});
                  }
               }}
            />

            {books.filter((book) => {
               let filter = searchParams.get('filter')
               if(!filter) return true;
               let name = book.name.toLowerCase();
               return name.includes(filter.toLowerCase());
            })
            .map((book) => (
               <Link style={{display:'block', margin:'1rem 0'}}
                  to={`/books/${book.number}`}
                  key={book.number}
                  >
                  
                  {book.name}
               </Link>
            ))}

         </nav>
      </div>
   );
}



export default Books;