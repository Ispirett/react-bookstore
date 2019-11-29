import React from 'react'

export default (book) => (
    <tr>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
    </tr>

)