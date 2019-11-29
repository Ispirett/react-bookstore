import React from 'react'
import Book from "./Book";


export default  () => (
    <table className='table table-dark  w-50'>
        <tr className='text-info'>
            <th>ID</th>
            <th>Title</th>
            <th>CATEGORY</th>
        </tr>
            <Book id={1} title={'reactman'} category={'programming'}/>
            <Book id={1} title={'railsman'} category={'programming'}/>

    </table>

)
