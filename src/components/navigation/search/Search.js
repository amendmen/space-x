import React, { useState, useEffect } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useNavigate } from "react-router-dom";

import './Search.css'
import { connect } from 'react-redux'

const Search = ({items}) => {
    const navigate = useNavigate();
    const [height, setHeight] = useState('40px');

    const handleOnSelect = (e) => {
        navigate(`/shipment/${e.id}`)
    }

    const checkSize = () => {
        const height =  window.innerWidth < 768 ? '40px' : '50px'
        setHeight(height)
    }
   

    window.addEventListener('resize', () => {
        checkSize()
    })

    useEffect(() => {       
        checkSize()       
    }, []);

    return (
    <div className="search">
        <ReactSearchAutocomplete items={items}  onSelect={handleOnSelect} styling={{height: height}}/>
    </div>
)}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
export default connect(mapStateToProps)(Search)