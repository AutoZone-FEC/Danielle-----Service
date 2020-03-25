import React from 'react';
import vehicles from './vehicles.css';

let Vehicles = () => {
    return (
        <div className={vehicles.grid}>
            <div className={vehicles.header}>My Vehicles</div>
        </div>
    )
}


export default Vehicles;

//<div className={vehicles.header}>
{/* <img src={filename.png}><span>My Vehicles </span>
    
</div> */}