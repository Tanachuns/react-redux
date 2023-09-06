
import { counter1Selector ,decrease,increase, setValueAsync} from '../store/slices/counter1Slice'
import { useSelector } from 'react-redux/'
import { useAppDispatch } from '../store/store'
type Props = {}

export default function Home({}: Props) {
    const dispatch = useAppDispatch();
    const counter1Reducer = useSelector(counter1Selector)
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
     <div style={{height:"200px",overflow:"scroll"}}>
     <table >
        <thead>
          <th>
            <td></td>
          </th>
        </thead>
        <tbody >
          {counter1Reducer.countries.map((item:any,idx:number)=>{
            return <tr key={idx}><td>{item.name.common}</td></tr>
          })}
        </tbody>
      </table>
      </div>
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