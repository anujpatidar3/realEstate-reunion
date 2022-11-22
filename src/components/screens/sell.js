import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

//CSS Files
import '../../CSS/rent.css'
import 'bootstrap/dist/css/bootstrap.css';

//House Data
import houseDetails from "../../dummy/sell.js"

//CardList
import CardList from "../Cards/cardList"

//Filter
import Filter from "../Filter/filter"

let tempCities = new Set();
let tempmoveInDate = new Set();
let temptypeOfHouse = new Set();
houseDetails.map(item => {
    tempCities.add(item.location)
    tempmoveInDate.add(item.moveIn)
    temptypeOfHouse.add(item.type)
})

let typesOfHouses = ["All"]
let cities = ["All"]
let moveInDate = ["All"]
let prices = ["All", "0-200", "201-400", "401-600", "601-800", "801-1000", "1001-1200", "1201-1400", "Greater than 1400"]
for (const item of temptypeOfHouse) {
    typesOfHouses.push(item)
}
for (const item of tempCities) {
    cities.push(item)
}
for (const item of tempmoveInDate) {
    moveInDate.push(item)
}

const Sell = () => {

    const [houses, setHouses] = useState(houseDetails);

    const [date, setDate] = useState(0);
    const [city, setCity] = useState(0);
    const [price, setPrice] = useState(0);
    const [typeofHouse, setTypeofHouse] = useState(0);

    const [searchText, setSearchText] = useState("")

    function priceChange(priceIdx, price, priceValue) {
        if (!priceIdx) {
            return true
        }
        const priceRange = price[priceIdx].split("-")
        if (priceRange[0] === price[price.length - 1]) {
            const lastPriceRange = priceRange[0].split(" ")
            return priceValue >= lastPriceRange[2]
        }
        return priceValue >= +priceRange[0] && priceValue <= +priceRange[1]
    }

    function dataChange(dataIdx, data, dataValue) {
        if (!dataIdx) {
            return true
        }
        return data[dataIdx] === dataValue
    }

    function dateChange(dateIdx, dateValue) {
        if (!dateIdx) {
            return true
        }
        dateIdx = new Date(dateIdx)
        return dateIdx >= dateValue
    }

    function searchChange(searchValue, data) {
        if (!searchValue) {
            return true
        }
        searchValue = searchValue.toLowerCase()
        return data.location.toLowerCase().includes(searchValue)
    }

    useEffect(() => {
        setHouses(houseDetails.filter(house => dataChange(city, cities, house.location)
            && dataChange(typeofHouse, typesOfHouses, house.type)
            && priceChange(price, prices, house.price)
            && dateChange(date, house.moveIn)
            && searchChange(searchText, house)))
    }, [city, price, typeofHouse, date, searchText])


    return (
        <div className='row box-container'>
            <div className='main-content-align'>
                <div className='main-content-text-align'>
                    <h2>Search Properties to Sell</h2>
                </div>
                <div className='main-content-text-align'>
                    <input type="text" value={searchText} placeholder="Search by location" className='search-bar' onChange={(e) => setSearchText(e.target.value)} ></input>
                </div>
            </div>
            <div className='filterMenu'>
                <div className='filterButtons'>
                    <h5 className='filterButtons-Text'><i className="fa fa-calendar" /> When</h5>
                    <input type="date" className='filter-dropdown-btn' id="moveInDate" value={date} min="2022-11-20" onChange={(e) => setDate(e.target.value)}></input>
                </div>
                <Filter filterList={cities} filterName="cities" setFilterState={setCity} selectedFilterValue={city} />
                <Filter filterList={typesOfHouses} filterName="typeofHouse" setFilterState={setTypeofHouse} selectedFilterValue={typeofHouse} />
                <Filter filterList={prices} filterName="prices" setFilterState={setPrice} selectedFilterValue={price} />
            </div>
            <CardList houses={houses} />
        </div>
    )
}

export default Sell;