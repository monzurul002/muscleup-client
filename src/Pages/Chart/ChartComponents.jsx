import { FaCircle } from 'react-icons/fa6';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Karlie',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Monzurul',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Hetmer',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Relia',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Heloe',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Jaber',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },

];

const ChartComponents = () => {
    return (
        <div className='mt-5 bg-base-100 rounded-lg'>
            <div className='flex justify-between  p-4'>
                <h3 className='p-2 font-bold text-center  text-cyan-900'>Students Performance</h3>
                <div >
                    <div className='flex justify-center items-center'>
                        <FaCircle className='text-xs text-indigo-800 inline' />
                        <p className='text-sm'>This Weak</p>

                    </div>
                    <p className='text-xm font-bold ml-2 mb-2 '>1258</p>
                </div>
                <div >
                    <div className='flex justify-center items-center'>
                        <FaCircle className='text-xs text-warning inline' />
                        <p className='text-sm ml-1'>Last Weak</p>

                    </div>
                    <p className='text-xm font-bold ml-2 mb-2 '>1258</p>
                </div>

            </div>
            <LineChart
                width={420}
                height={300}
                data={data}

                margin={{
                    top: 10,
                    right: 5,
                    left: 10,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" className="" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>

        </div>
    );
};

export default ChartComponents;