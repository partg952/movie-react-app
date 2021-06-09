import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Template from './template'
import './row.css'

export default function Row({row_title,fetch_url}) {
    const [movies,setMovies] = useState([]); 
    console.log(`https://api.themoviedb.org/4${fetch_url}`)
            useEffect(()=>{
                axios(`https://api.themoviedb.org/3${fetch_url}`)
                .then(response=>{
                    console.log(response.data)
                    setMovies(response.data.results)
                    console.table(movies)
                    
                })
            },[fetch_url])
            
       
        

            let path = ''
            

    

    return (
       
        <div className="Row">
            <h2>{row_title}</h2>

            <div className="row_posters">
                
            {
                movies.map(element=>
                    {
                      var title = ''
                     element.name == null ? title = element.title : title = element.name
                      return(
                          <Template title={title} img_url={element.poster_path} id={element.id}/>
                      )
                    })
            }
                        
            </div>
        </div>
    )
}
