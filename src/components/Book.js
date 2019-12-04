import React from 'react'


export default (props) => {
   return(
       <div className={'d-flex justify-content-between book-detail mb-5  bg-light text-secondary p-4 rounded'}>
         <article>
             <h4 className={'text-left'}>{props.id}</h4>
             <h6 className={'text-left'}>{props.category}</h6>
             <h3>{props.title}</h3>
         </article>

        <div>
            <button className={'btn btn-danger'}
                    onClick={props.clickHandler}>delete</button>
        </div>
       </div>
   )

}

// export default (props) => {
//     return(
//         <tr>
//             <td>{props.id}</td>
//             <td>{props.title}</td>
//             <td>{props.category}</td>
//             <td>
//                 <button className={'btn btn-danger'}
//                         onClick={props.clickHandler}>delete</button>
//             </td>
//         </tr>
//     )
//
// }