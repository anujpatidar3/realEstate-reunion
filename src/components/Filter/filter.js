import React from 'react';
import { v4 as uuidv4 } from 'uuid';


//CSS Files
import '../../CSS/rent.css'
import 'bootstrap/dist/css/bootstrap.css';


const Filter = ({ filterList, setFilterState, selectedFilterValue, filterName }) => {

    const handleFilterChange = (e) => {
        setFilterState(+e.target.value)
    }
    return (
        <div className='filterButtons'>
            <h5 className='filterButtons-Text'>
                {
                    filterName === "cities" && <i className="fa fa-map-marker"> Location</i>
                }
                {
                    filterName === "prices" && <i className="fa fa-dollar"> Price</i>
                }
                {
                    filterName === "typeofHouse" && <i className="fa fa-home">  Property Type</i>
                }
            </h5>
            <select name='location' id="location" className='filter-dropdown-btn' value={selectedFilterValue}
                onChange={(e) => { handleFilterChange(e) }}
            >
                {
                    filterList.map((item, index) => {
                        return (
                            <option key={uuidv4()} value={index} style={{ marginRight: "2px" }}>{item.toString()}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Filter;