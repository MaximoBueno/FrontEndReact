import './App.css'
import { useEffect } from 'react'
import { useFetchData } from "./hooks/useFetchData";
import { UserApi } from './interfaces/UserApi';

function App() {
  //const [count, setCount] = useState(0)

  const { results, fetchData, loading, error } = useFetchData<Array<UserApi>>([]);

  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/users");
  }, []);

  return (
    <>
      { loading && <p>Cargando...</p> }
      { error && <p>Error {error}</p> }

      {
         results?.map((item) => {
                return(
                  <p key={item.id} className='text-start'>
                    <a >{item.name}</a>
                    <a>{item.phone}</a>
                    <a>{item.email}</a>
                    <a>{item.address.street}</a>
                    <a>{item.address.geo.lat}</a>
                    <a>{item.address.geo.lng}</a>
                    <a>{item.company.name}</a>
                  </p>
                )
        })
      }
    </>
  )
}

export default App
