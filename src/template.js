import React from 'react';
import './template.css'
import {Link} from 'react-router-dom'
import Info from './info/info'
export default function template({ img_url , title ,id }) {
    
    return (
        <Link to='/info'>
        <div className="template" onClick={
            ()=>{
                console.log('ID',id)
                sessionStorage.setItem('id',id)
            }
        }>
            <img src={'https://image.tmdb.org/t/p/w500'+img_url} />
            <p>{title}</p>
        </div>
        </Link>
    )
}
