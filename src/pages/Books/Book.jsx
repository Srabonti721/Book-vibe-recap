import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link,} from 'react-router';

const Book = ({ book }) => {
    const {bookId,totalPages, bookName, publisher, tags, rating, image, category, yearOfPublishing } = book;
    // console.log(book);

    return (
       <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 shadow-sm border">
                <figure className='bg-gray-100 m-6 p-4 rounded-xl'>
                    <img
                        className='h-[166px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className='flex gap-6 mx-6 text-green-400'>
                    {
                        tags.map((tag, index) => <h2 key={index}>{tag}</h2>)
                    }
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>By : {publisher}</p>
                    <div className="card-actions justify-between ">
                        <div className="badge">{category}</div>
                        <div className="badge ">{rating} <FaStarHalfAlt /></div>
                    </div>
                </div>
            </div>
            </Link>
    );
};

export default Book;