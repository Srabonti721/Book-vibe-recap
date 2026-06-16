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
    const [wish, setWish] = useState([])
    const data = useLoaderData();
    // console.log(data);
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBookData = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBookData.includes(book.bookId));
        console.log(myReadList);
        setReadList(myReadList)


        const storedWishData = getStoredWishBook();
        const convertedWishData = storedWishData.map(id => parseInt(id));
        const myWishList = data.filter(wish => convertedWishData.includes(wish.bookId))
        console.log(myWishList);

        setWish(myWishList);

    }, [])

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wished Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book i read : {readList.length} </h2>
                    <div className='flex gap-2'>
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