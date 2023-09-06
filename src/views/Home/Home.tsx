
import { counter1Selector ,decrease,increase, setValueAsync} from '../../store/slices/counter1Slice'
import { useSelector } from 'react-redux/'
import { useAppDispatch } from '../../store/store'
import { Table } from 'antd'
import { getPLA } from '../../controllers'
type Props = {}

export default function Home({}: Props) {
    const dispatch = useAppDispatch();
    const counter1Reducer = useSelector(counter1Selector)
    console.log(getPLA())
    const columns = [
        {
          title: 'Name',
          dataIndex: "Name",
          key: 'name',
          sorter: (a:any, b:any) => a.name.common.localeCompare(b.name.common),
          render: (_:any,item:any) => {
            return item.name.common
          }


        },
        {
            title: 'Region',
            dataIndex: "region",
            key: 'region',
          sorter: (a:any, b:any) => a.region.localeCompare(b.region),
          },
     
      ];
  return (
    <>
 
    <h1>Vite.React Tempaqlte</h1>
    <div className="card">
      <button onClick={()=>dispatch(increase())}>
       +
      </button>
      <button onClick={()=>dispatch(decrease())}>
        -
      </button>
      <button onClick={()=>dispatch(setValueAsync())}>
        getdata
      </button>
        
      <h2>count is {counter1Reducer.counter}</h2>
      
      
     {counter1Reducer.loading?<h1>Loading...</h1>:
            <Table dataSource={counter1Reducer.countries} columns={columns} />
    }
    
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </>
  )
}