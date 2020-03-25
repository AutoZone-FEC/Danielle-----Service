import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import toolbar from './toolbar.css';

let Toolbar = (props) => {
    return(
        <div className={toolbar.toolbar}> 
            <div className={toolbar.inner_clearfix}>
                <span id={toolbar.related_sites}>
                    <span className={toolbar.headerfirst}>FIND A REPAIR SHOP</span>
                    <span className={toolbar.headersecond}>FOR THE PROFESSIONAL</span>
                    <span className={toolbar.myzone}>MyZone℠</span>
                    <span className={toolbar.profilenav}>Login</span>
                </span>
            </div>
        </div>
    )
}


export default Toolbar;