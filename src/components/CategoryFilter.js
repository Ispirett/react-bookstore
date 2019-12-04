import React from 'react'

const handleChange = (e,props) =>{
return props.handleFilter(e.target.value)
};

export default (props) => (
    <select name={"category"}
            defaultValue={'All'}
            onChange={(e) => handleChange(e,props)}
            className={"custom-select custom-select-sm  mb-5"}>
        <option value={'All'}>All</option>
        <option  value={'Programming'}>Programming</option>
        <option value={'Comics'}>Comics</option>
        <option value={'Action'}>Action</option>
        <option value={"Biography"}>Biography</option>
        <option value={"History"}>History</option>
        <option value={"Horror"}>Horror</option>
        <option value={"Kids"}>Kids</option>
        <option value={"Learning"}>Learning</option>
        <option value={"Sci-Fi"}>Sci-Fi</option>
    </select>
)

