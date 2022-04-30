
import { useParams } from "react-router-dom";
import { getBook } from "../../data/data";


import './book.style.scss'

const Book = () => {
   let params = useParams();
   let book = getBook(parseInt(params.bookId));
   return (
      <div className="book-container">
         <article>
            <div className="img-container">
               <img src={`${book.imageURL}`}/>
            </div>
            <div className="book-info">
               <h2>Book Name : {book.name}</h2>
               <h3>Author : {book.author}</h3>
               <p>
                  {book.description}
               </p>
            </div>
         </article>
      </div>
   ); 
}

export default Book;