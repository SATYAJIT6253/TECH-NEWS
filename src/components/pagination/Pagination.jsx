import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import './pagination.scss';
function Pagination() {

    const{page,nbPages,getprevpage,getnextpage} = useContext(AppContext);
    
  return (
    <div className='pagination-container'>
        <button onClick={()=>getprevpage()} className='cnt-btn'>PREV</button>
        <p>{page + 1} of {nbPages}</p>
        <button  onClick={()=>getnextpage()} className='cnt-btn'>NEXT</button>
    </div>
  )
}

export default Pagination;