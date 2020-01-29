import React from  'react'
import {Route , Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
const mapStateTOProps = (state) =>{
    const {token} = state.bookReducer
    return{
        token
    }
};
export default connect(mapStateTOProps)  (({component:Component, ...args},props) =>{
    const {token} = props
    return <Route {...args} render={(props) =>(
        token !== '' ? <Component {...props}   /> : <Redirect to='/signin' />
    )
    }/>
})