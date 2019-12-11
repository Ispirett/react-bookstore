import React from 'react'

const handleChange = (e,props) =>{
return props.handleFilter(e.target.value)
};

const options = () =>{
        const optionsArray = [
            'All','Programming','Comics','Action',
            'Biography', 'History','Horror', 'Kids',
            'Learning', 'Sci-Fi'
        ];
      return optionsArray.map((option, index)  => (
          <option key={index} value={option}>{option}</option>
      ))
};

export default (props) => (
    <select name={"category"}
            defaultValue={'All'}
            onChange={(e) => handleChange(e,props)}
            className={"custom-select custom-select-sm  mb-5 shadow-sm"}>
            {options()}
    </select>
)

