import React from 'react'


export default (props) => {
   return(
       <div
           className={'d-flex justify-content-between book-detail mb-5 ' +
           ' bg-white z-index-3 text-secondary p-4 rounded shadow btn-block hover' }>
         <article >
             <h4 className={'text-left'}>{props.id}</h4>
             <h6 className={'text-left'}>{props.category}</h6>
             <h3>{props.title}</h3>
         </article>

        <div className={'border-left pl-5 d-flex flex-column justify-content-start w-25 '}>
            <h5 className={' font-sm text-muted text-left'}>CURRENT CHAPTER</h5>
            <h5 className={'font-sm-5 text-left'}> CHAPTER 7</h5>
            <button className={'btn btn-info shadow align-left'}
                    onClick={props.clickHandler}>DELETE</button>
        </div>
       </div>
   )

}
