import React from 'react';
import Book from './Book';

const Books = ({data}) => {
    // console.log(data);
    
    return (
        <div>
            <h2 className='text-center font-bold text-xl my-4'>Books : {data.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
               data.map(book=><Book key={book.bookId} book={book}></Book>)
            } 
            </div>
        </div>
    );
};

export default Books;