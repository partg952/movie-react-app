import React, { useEffect,useState } from 'react'
import axios from 'axios'

export default function Info() {
    const id = sessionStorage.getItem('id')
    console.log(id)
    const [data,setData] = useState([])
    useEffect(() => {
      async function getData(){
          const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=e1fa13c7e6a35b25826f92b2aea94264&language=en-US`)
          console.log(response.data)
          setData([response.data])
      }  
      getData();
        
    }, [])
    return (
        <div>
            {
                data.map(info=>{
                    console.log(info.title)
                })
            }
        </div>
    )
}
