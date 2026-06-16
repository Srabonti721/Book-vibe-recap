import React from 'react';
// import { HiH2 } from 'react-icons/hi2';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/AddToDB';
import { AddToStoredWishDB } from '../../utility/AddToWishDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData();
    const singleData = data.find(book => book.bookId === bookId);
    // console.log(bookId, data);
    const { bookName,totalPages, author, review, publisher, tags, rating, image, category, yearOfPublishing } = singleData;


    const handleRead = (id) =>{
        addToStoredDB(id)  ; 
        MySwal.fire({
              icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: "<a href=\"#\">Why do I have this issue?</a>"
})
    }

    const handleWishList = (id) =>{
        // console.log("click");
        AddToStoredWishDB(id)
    }
    return (
        
        <div className='flex gap-4 '>
            <div className=' bg-gray-100 p-10'>
                <img className=' max-h-96 max-w-xl rounded-lg ' src={image} alt="book" />
            </div>
            <div>
                <h1 className="text-3xl font-bold">{bookName}</h1>
                <h3 className='border-b-1 border-gray-300 py-2'>BY : {author}</h3>
                <h4 className="border-b-1 border-gray-300 py-2">{category}</h4>
                <p className="py-6"><span className='font-semibold'>review:</span> {review}
                </p>
                <div className='text-green-400 flex gap-6 border-b-1 border-gray-300 py-2'> tag:
                    {tags.map((tag,index)=><h2 key={index}>#{tag}</h2>)}
                </div>
                <div className='flex gap-4'>
                    <div className='text-gray-400'>
                        <h2> Number of Pages</h2>
                        <h2> Publisher</h2>
                        <h2> Year of Publishing</h2>
                        <h2> Rating </h2>

                    </div>
                    <div className='font-semibold'>
                        <h2>: {totalPages}</h2>
                        <h2>: {publisher}</h2>
                        <h2>: {yearOfPublishing}</h2>
                        <h2>: {rating}</h2>
                    </div>
                </div>
                <button onClick={()=>(handleRead(id))} className="btn m-2">read 
                </button>
                <button onClick={()=>handleWishList(id)} className="btn bg-blue-300 text-white">wishList</button>
            </div>
        </div>
    );
};

export default BookDetails;