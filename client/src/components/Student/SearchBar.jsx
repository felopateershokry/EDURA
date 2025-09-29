import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom';

const SearchBar = ({data}) => {

    const navigate = useNavigate();
    const [input, setInput] = useState(data ? data : '');
    const onSearchHandler = (e) => {
        e.preventDefault();
        navigate('/course-list/' + input);
    }


    return (

        <form className="search-form" onSubmit={onSearchHandler}>
            <img src={assets.search_icon} alt="search icon" />
            <input onChange={e => setInput(e.target.value)} value={input} type="text" placeholder="Search for courses" />
            <button type="submit">Search</button>
        </form>


    )
}

export default SearchBar
