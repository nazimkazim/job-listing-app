import React from 'react'
import './filter.css'

const Filter = ({setFilters, filters}) => {
    const deleteItem = (idx) => {
        const newArr = [...filters]
        newArr.splice(idx, 1)
        setFilters(newArr)
    }

    const clearAll = () => {
        setFilters([])
    }



    return (        
        <div className='filter-container'>
        <div className='filter-container-items'>
            {filters.map((item, index) => <div>
                <button className='filter-buttons'>{item}</button>
                <button onClick={() => deleteItem(index)} className='filter-buttons-del'><i class="fa-solid fa-xmark"></i></button>
            </div>  )}
                           
        </div>
        <button onClick={clearAll} className='button-clear'>Clear</button>
    </div>
    )
}
export default Filter