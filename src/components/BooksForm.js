import React from 'react'


export default  () => (
    <form acceptCharset={'UTF-8'} style={styles.form} >
        <input type={'text'} className="form-control" placeholder={'Enter book title'} style={styles.textInput}/>
        <input type={'text'} className="form-control" placeholder={'Enter book category'} style={styles.textInput}/>
        <select className={"custom-select custom-select-sm"}>
            <option value={'Programming'}>programming</option>
            <option value={'Comics'}>comics</option>
            <option value={'Action'}>Action</option>
            <option value="Biography">Biography</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Kids">Kids</option>
            <option value="Learning">Learning</option>
            <option value="Sci-Fi">Sci-Fi</option>
        </select>
    </form>
)

const styles = {
    form:{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '2em'
    },
    textInput: {
        borderRadius: '1em',
        outline: 'none',
        marginBottom: '1em',
    }
};