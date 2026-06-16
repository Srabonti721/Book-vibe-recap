
import { useLoaderData } from 'react-router';
import { Bar, BarChart, Cell, Tooltip, XAxis, YAxis } from 'recharts';


const PageLoad = () => {
    const pData = useLoaderData();
    console.log(pData);

    return (
        <div>
            <BarChart width={800} height={400} data={pData}>
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip />
                <Bar
                 dataKey='totalPages'
                    fill='green' >
                </Bar>
            </BarChart>
        </div>
    );
};

export default PageLoad;