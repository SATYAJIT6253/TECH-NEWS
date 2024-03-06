import React from 'react';
import { useContext} from 'react';
import { AppContext } from '../../context/AppContext';
import './search.scss';
function Search() {
    const {searchpost,query} = useContext(AppContext);
  return (
    <div className='search-form'>
       <form action="">
        <input type="text"  placeholder='search here' className='search-box'
        onChange={(e)=> searchpost(e.target.value)}
        />
       </form>
    </div>
  )
}

export default Search;