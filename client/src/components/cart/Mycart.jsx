import React from 'react';
import mycart from './mycart.css'

let Mycart = ( {count} ) => {
    return(
        <div className={mycart.grid}>
            <div className={mycart.header}>My Cart</div>
            <img src="https://www.autozone.com/images/common/cart.svg" className={mycart.mycartimage}/>
            <span className={mycart.number}>{count}</span>
        </div>
    )
}


export default Mycart;