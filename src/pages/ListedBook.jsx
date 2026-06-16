import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../utility/AddToDB';
import { useState } from 'react';
import Book from './Books/Book';
import { getStoredWishBook } from '../utility/AddToWishDB';
const ListedBook = () => {
    const [readList, setReadList] = useState([]);
    const [wish, setWish] = useState([]);
    const [sort, setSort] = useState('')
    const data = useLoaderData();
    // console.log(data);
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBookData = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBookData.includes(book.bookId));
        // console.log(myReadList);
        setReadList(myReadList)

        const storedWishData = getStoredWishBook();
        const convertedWishData = storedWishData.map(id => parseInt(id));
        const myWishList = data.filter(wish => convertedWishData.includes(wish.bookId))
        // console.log(myWishList);
        setWish(myWishList);
    }, [])
    const handleSort = (type) => {
        setSort(type);
        if (type === "ratings") {
            const sortByRatings = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortByRatings)
        }
        if (type === "pages") {
            const sortByPages = [...readList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setReadList(sortByPages)
        }
    }

    return (
        <div>
            <div className='text-center my-2'>
                <details className="dropdown ">
                    <summary className="btn m-1">Sort By : {sort ? sort : ""}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("pages")}>Pages</a></li>
                        <li><a onClick={() => handleSort("ratings")}>Ratings</a></li>
                    </ul>
                </details>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wished Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book i read : {readList.length} </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Wished Books : {wish.length}</h2>
                    {
                        wish.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;