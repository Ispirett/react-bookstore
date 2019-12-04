import React from 'react'


export default (props) => {
   return( <tr>
        <td>{props.id}</td>
        <td>{props.title}</td>
        <td>{props.category}</td>
        <td>
            <button onClick={props.clickHandler}>delete</button>
        </td>
    </tr>)

}