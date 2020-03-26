import React from 'react';
import mycart from './mycart.css'

let Mycart = () => {
    return(
        <div className={mycart.grid}>
            <div className={mycart.header}>My Cart</div>
            <img src="https://www.autozone.com/images/common/cart.svg" className={mycart.mycartimage}/>
            <span className={mycart.number}>1</span>
        </div>
    )
}


export default Mycart;