
import { useLoaderData } from 'react-router';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { getStoredWishBook } from '../../utility/AddToWishDB';
// import { RechartsDevtools } from '@recharts/devtools';

const PageLoad = () => {
    const data = useLoaderData();
// console.log(data.bookName);

    // const products=[
    //     {name:"srabonti", product:2000},
    //     {name:"nafiza", product:6000},
    //     {name:"suraiya", product:8000},
    //     {name:"sumaiya", product:3000},
    // ]

    
    return (
        <div>
{
    data.map(bookData =><h2 >{bookData.bookName}</h2>)
}
                <BarChart width={600} height={300} data={data} >
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="bookName" fill="#8884d8"  />
      <Bar dataKey="totalPages" fill="#8884d8"  />
      {/* <RechartsDevtools /> */}
    </BarChart>
        </div>
    );
};

export default PageLoad;