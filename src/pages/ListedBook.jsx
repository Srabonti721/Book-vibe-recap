import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../utility/AddToDB';
import { useState } from 'react';
import Book from './Books/Book';
const ListedBook = () => {
    const [readList, setReadList] = useState([]);
    const data = useLoaderData();
    console.log(data);
    useEffect(()=>{
        const storedBookData = getStoredBook();
        const convertedStoredBookData = storedBookData.map(id=>parseInt(id));
        const myReadList = data.filter(book =>convertedStoredBookData.includes(book.bookId));
        setReadList(myReadList);
        
    },[])
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
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBook;