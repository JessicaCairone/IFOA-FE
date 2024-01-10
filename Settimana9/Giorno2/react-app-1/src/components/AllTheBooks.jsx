import { useState } from 'react';
import {Button, Card} from 'react-bootstrap';
import FantasyBooks from '../assets/fantasy.json';
import HistoryBooks from '../assets/history.json';
import HorrorBooks from '../assets/horror.json';
import RomanceBooks from '../assets/romance.json';
import SciFiBooks from '../assets/scifi.json';


const AllTheBooks = () => {
//const [books, setBooks] = useState(HistoryBooks);
const [books, setBooks] = useState([]);

    return (
        <>
        <div className='text-center mb-5 mt-4'>
        <Button variant="outline-dark mx-3" onClick={() => setBooks(FantasyBooks)}>Fantasy</Button>
        <Button variant="outline-dark mx-3" onClick={() => setBooks(HistoryBooks)}>History</Button>
        <Button variant="outline-dark mx-3" onClick={() => setBooks(HorrorBooks)}>Horror</Button>
        <Button variant="outline-dark mx-3" onClick={() => setBooks(RomanceBooks)}>Romance</Button>
        <Button variant="outline-dark mx-3" onClick={() => setBooks(SciFiBooks)}>Sci-Fi</Button>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
            {books.map((book) =>
        <Card style={{ width: '18rem' }} key={book.asin}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.price}€</Card.Text>
             <Button variant="outline-warning">Aggiungi al carrello</Button>
         </Card.Body>
            </Card>
         )}

        </div>
     </>
     )
            };



export default AllTheBooks;